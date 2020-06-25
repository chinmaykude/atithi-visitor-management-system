import {
  fBaseVisitorRegister,
  fBaseAddVisitDetails
} from "../../config/fbaseConfig";

import {
  sendVisitIdToVisitor,
  sendEmailToVisitee
} from "../../utils/sendEmailAxiosRequest";

import {
  ADD_VISITOR_REQUEST,
  ADD_VISITOR_SUCCESS,
  ADD_VISITOR_FAILURE,
  ADD_VISIT_DETAILS_REQUEST,
  ADD_VISIT_DETAILS_SUCCESS,
  ADD_VISIT_DETAILS_FAILURE,
  CHECKOUT_VISITOR_REQUEST,
  CHECKOUT_VISITOR_SUCCESS,
  CHECKOUT_VISITOR_FAILURE,
  CHECK_EXISTING_VISITOR_REQUEST,
  CHECK_EXISTING_VISITOR_SUCCESS,
  CHECK_EXISTING_VISITOR_FAILURE,
  FETCH_VISIT_DETAILS_FROM_DB_REQUEST,
  FETCH_VISIT_DETAILS_FROM_DB_SUCCESS,
  FETCH_VISIT_DETAILS_FROM_DB_FAILURE
  // FETCH_VISITOR_DATA_FROM_DB
} from "./actionType";

// Adding new visitor
export const addVisitorRequest = payload => ({
  type: ADD_VISITOR_REQUEST,
  payload
});

export const addVisitorFailure = payload => ({
  type: ADD_VISITOR_FAILURE,
  payload
});

export const addVisitorSuccess = payload => ({
  type: ADD_VISITOR_SUCCESS,
  payload
});

export const addVisitor = (payload, history) => {
  const {
    captureImage,
    isImageCaptured,
    imageUrl,
    visitorName,
    visitorEmail,
    visitorMobile
  } = payload;
  return dispatch => {
    dispatch(addVisitorRequest());

    const continueFunc = () => {
      return fBaseVisitorRegister
        .add({
          captureImage,
          isImageCaptured,
          imageUrl,
          visitorName,
          visitorEmail,
          visitorMobile
        })
        .then(res => {
          const data = {
            id: res.id,
            captureImage,
            isImageCaptured,
            imageUrl,
            visitorName,
            visitorEmail,
            visitorMobile
          };
          dispatch(addVisitorSuccess(data));
          history.push("/user_visit_details_updated");
        })
        .catch(err => {
          dispatch(addVisitorFailure(err));
          return alert(err);
        });
    };

    return fBaseVisitorRegister
      .where("visitorEmail", "==", visitorEmail)
      .limit(1)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log(snapshot.empty);
          return continueFunc();
        }
        snapshot.forEach(doc => {
          console.log(doc.id, "=>", doc.data());
          const userDataFromDB = doc.data();
          alert(
            `Visitor already exists. Please verify your email to continue.`
          );
          history.push("/email_verification");
          return dispatch(addVisitorFailure("Visitor Already Exists..!!"));
        });
      });
  };
};

// Adding Visit Details:
export const addVisitDetailsRequest = (payload, whomToMeetEmail) => ({
  type: ADD_VISIT_DETAILS_REQUEST,
  payload: { payload, whomToMeetEmail }
});

export const addVisitDetailsFailure = (payload, whomToMeetEmail) => ({
  type: ADD_VISIT_DETAILS_FAILURE,
  payload: { payload, whomToMeetEmail }
});

export const addVisitDetailsSuccess = payload => ({
  type: ADD_VISIT_DETAILS_SUCCESS,
  payload
});

export const addVisitDetails = (payload, whomToMeetEmail, history) => {
  const {
    visitType,
    companyName,
    whomToMeet,
    visitorEmail,
    visitorName,
    visitorMobile,
    checkedOut,
    imageUrl,
    checkin_timestamp,
    checkout_timestamp,
    visitID
  } = payload;
  return dispatch => {
    dispatch(addVisitDetailsRequest());
    const visitRef = fBaseAddVisitDetails.doc();
    // const visitorNameToSend = visitorName;
    // const emailToSend = visitorEmail;
    // const visitIDToSend = visitID;

    return visitRef
      .set({
        id: visitRef.id,
        visitType,
        companyName,
        whomToMeet,
        visitorEmail,
        visitorName,
        visitorMobile,
        checkedOut,
        imageUrl,
        checkin_timestamp,
        checkout_timestamp,
        visitID
      })
      .then(res => {
        // console.log("in response ", res.id);
        const data = {
          visitType,
          companyName,
          whomToMeet,
          whomToMeetEmail,
          visitorEmail,
          visitorName,
          visitorMobile,
          imageUrl,
          checkedOut,
          checkin_timestamp,
          checkout_timestamp,
          visitID
        };

        dispatch(addVisitDetailsSuccess(data));

        // Send visit ID to visitor
        sendVisitIdToVisitor(visitorEmail, visitorName, visitID);

        // Send a visitor detail email to whom to visit user
        sendEmailToVisitee(visitorName, whomToMeetEmail, whomToMeet);

        history.push("/checkin_success");
      })
      .catch(err => dispatch(addVisitDetailsFailure()));
  };
};

// Checkout Visitor
export const checkoutVisitRequest = payload => ({
  type: CHECKOUT_VISITOR_REQUEST,
  payload
});

export const checkoutVisitFailure = payload => ({
  type: CHECKOUT_VISITOR_FAILURE,
  payload
});

export const checkoutVisitSuccess = payload => ({
  type: CHECKOUT_VISITOR_SUCCESS,
  payload
});

export const checkoutVisitor = (visitID, checkout_timestamp, history) => {
  return dispatch => {
    let docId = "";

    dispatch(checkoutVisitRequest());
    console.log(typeof visitID);
    fBaseAddVisitDetails
      .where("visitID", "==", Number(visitID))
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          alert("Please enter correct Visit ID");
          dispatch(checkoutVisitFailure());
          return history.push("/checkout");
        }
        snapshot.forEach(doc => {
          docId = doc.id;
          console.log("existing visitor Data from DB", "=>", docId);
        });

        fBaseAddVisitDetails
          .doc(docId)
          .update({
            checkout_timestamp,
            checkedOut: true
          })
          .then(res => {
            console.log(res);
            const data = {
              visitID,
              checkout_timestamp
            };
            dispatch(checkoutVisitSuccess(data));

            console.log(visitID, checkout_timestamp, history);
            history.push("/main_checkin_checkout");
            alert("Checkout sucess");
          })
          .catch(() => dispatch(checkoutVisitFailure()));
      });
  };
};

// Check for existing Visitor
export const checkForExistingVisitorRequest = () => ({
  type: CHECK_EXISTING_VISITOR_REQUEST
});

export const checkForExistingVisitorSuccess = payload => ({
  type: CHECK_EXISTING_VISITOR_SUCCESS,
  payload
});

export const checkForExistingVisitorFailure = () => ({
  type: CHECK_EXISTING_VISITOR_FAILURE
});

export const checkForExistingVisitor = (email, history) => {
  return dispatch => {
    dispatch(checkForExistingVisitorRequest());
    if (email.trim() === "") {
      dispatch(checkForExistingVisitorFailure());
      return alert("Email fields cannot be left empty");
    }
    fBaseVisitorRegister
      .where("visitorEmail", "==", email)
      .limit(1)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log(snapshot.empty);
          history.push("/email_verification");
          alert("Please enter correct email id..!!");
          dispatch(checkForExistingVisitorFailure());
        }
        snapshot.forEach(doc => {
          console.log(doc.id, "=>", doc.data());
          const userDataFromDB = doc.data();
          dispatch(checkForExistingVisitorSuccess(userDataFromDB));
          history.push("/user_visit_details_updated");
        });
      })
      .catch(() => {
        history.push("/email_verification");
        dispatch(checkForExistingVisitorFailure());
      });
  };
};

export const fetchVisitDetailsRequest = () => ({
  type: FETCH_VISIT_DETAILS_FROM_DB_REQUEST
});

export const fetchVisitDetailsSuccess = payload => ({
  type: FETCH_VISIT_DETAILS_FROM_DB_SUCCESS,
  payload
});

export const fetchVisitDetailsFailure = payload => ({
  type: FETCH_VISIT_DETAILS_FROM_DB_FAILURE,
  payload
});

export const fetchVisitDetails = () => {
  return dispatch => {
    dispatch(fetchVisitDetailsRequest());

    const fetchedVisitDetails = [];
    fBaseAddVisitDetails
      .orderBy("checkin_timestamp", "desc")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          fetchedVisitDetails.push(doc.data());
        });
      })
      .then(() => {
        console.log(`fetchedVisitDetails ${fetchedVisitDetails}`);
        dispatch(fetchVisitDetailsSuccess(fetchedVisitDetails));
      })
      .catch(err => dispatch(fetchVisitDetailsFailure(err)));
  };
};
