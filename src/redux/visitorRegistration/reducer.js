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
} from "./actionType";

const initialState = {
  // for visitor
  visitor: [],
  isAddVisitorLoading: false,
  addVisitorError: "",

  // for visit check in
  isVisitCheckInLoading: false,
  visitCheckInError: "",
  visitDetails: [],

  // for visit check out
  isVisitorCheckOutLoading: false,
  visitCheckOutError: "",

  // check for existing visitor
  isCheckExistingVisitorLoading: false,
  checkExistingVisitorError: "",
  existingVisitorDataFromDB: {},

  isFetchVisitDetailsLoading: false,
  isFetchVisitDetailsError: ""
};

const reducer = (state = initialState, { type, payload }) => {
  // let isCheckedOut = false;
  switch (type) {
    case ADD_VISITOR_REQUEST:
      return {
        ...state,
        isAddVisitorLoading: true,
        existingVisitorDataFromDB: {},
        addVisitorError: ""
      };
    case ADD_VISITOR_SUCCESS:
      return {
        ...state,
        isAddVisitorLoading: false,
        visitor: [...state.visitor, payload],
        existingVisitorDataFromDB: { ...payload }
      };
    case ADD_VISITOR_FAILURE:
      return {
        ...state,
        isAddVisitorLoading: false,
        addVisitorError: "Failed to add Visitor. Please try again."
      };

    case ADD_VISIT_DETAILS_REQUEST:
      return {
        ...state,
        isVisitCheckInLoading: true,
        visitCheckInError: ""
      };
    case ADD_VISIT_DETAILS_SUCCESS:
      console.log("inside ADD_VISIT_DETAILS_SUCCESS", payload);
      return {
        ...state,
        isVisitCheckInLoading: false,
        visitDetails: [payload, ...state.visitDetails]
      };

    case ADD_VISIT_DETAILS_FAILURE:
      return {
        ...state,
        isVisitCheckInLoading: false,
        visitCheckInError: "Failed to checkin. Please try again. "
      };

    case CHECKOUT_VISITOR_REQUEST:
      return {
        ...state,
        isVisitorCheckOutLoading: true,
        visitCheckOutError: ""
      };

    case CHECKOUT_VISITOR_SUCCESS:
      console.log("CHECKOUT_VISITOR_SUCCESS reducer", payload);
      const { visitID, checkout_timestamp } = payload;
      const updatedVisitDetails = state.visitDetails.map(visitor =>
        visitor.visitID === Number(visitID)
          ? {
              ...visitor,
              checkedOut: true,
              checkout_timestamp
            }
          : visitor
      );

      return {
        ...state,
        isVisitorCheckOutLoading: false,
        visitDetails: [...updatedVisitDetails]
      };

    case CHECKOUT_VISITOR_FAILURE:
      return {
        ...state,
        isVisitorCheckOutLoading: false,
        visitCheckOutError: "Visit checkout failed. Please try again."
      };

    case CHECK_EXISTING_VISITOR_REQUEST:
      return {
        ...state,
        isCheckExistingVisitorLoading: true,
        existingVisitorDataFromDB: {},
        checkExistingVisitorError: ""
      };
    case CHECK_EXISTING_VISITOR_SUCCESS:
      console.log(payload);
      return {
        ...state,
        isCheckExistingVisitorLoading: false,
        existingVisitorDataFromDB: { ...payload }
      };
    case CHECK_EXISTING_VISITOR_FAILURE:
      return {
        ...state,
        isCheckExistingVisitorLoading: false,
        checkExistingVisitorError: "Visitor does not exists"
      };
    case FETCH_VISIT_DETAILS_FROM_DB_REQUEST:
      return {
        ...state,
        isFetchVisitDetailsLoading: true,
        isFetchVisitDetailsError: ""
      };
    case FETCH_VISIT_DETAILS_FROM_DB_SUCCESS:
      return {
        ...state,
        isFetchVisitDetailsLoading: false,
        visitDetails: [...payload]
      };
    case FETCH_VISIT_DETAILS_FROM_DB_FAILURE:
      return {
        ...state,
        isFetchVisitDetailsLoading: false,
        isFetchVisitDetailsError: payload
      };
    default:
      return {
        ...state
      };
  }
};
export default reducer;
