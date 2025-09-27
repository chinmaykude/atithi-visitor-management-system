import axios from "axios";

const ELASTICEMAIL_API_KEY = process.env.REACT_APP_ELASTICEMAIL_API_KEY;

export function sendVisitIdToVisitor(email, visitorName, visitID) {
  if (!ELASTICEMAIL_API_KEY) {
    console.warn("Elastic Email API key is not configured.");
    return;
  }
  axios({
    method: "post",
    url: "https://api.elasticemail.com/v2/email/send",
    params: {
      from: "cvkude@gmail.com",
      fromName: "Atithi - Visitor Management System",
      apikey: ELASTICEMAIL_API_KEY,
      subject: "Visit ID for your latest Visit",
      to: email,
      bodyHtml: `
            <h4 style="text-center">Welcome to Atithi..!!</h4>
            <p>Hey, ${visitorName}, Your latest visit ID is ${visitID}
            Enjoy your visit. :)</p>`,
      bodyText: "Text Body"
    }
  })
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      console.log(e);
    });
}

export function sendEmailToVisitee(visitorName, whomToMeetEmail, whomToMeet) {
  if (!ELASTICEMAIL_API_KEY) {
    console.warn("Elastic Email API key is not configured.");
    return;
  }
  axios({
    method: "post",
    url: "https://api.elasticemail.com/v2/email/send",
    params: {
      from: "cvkude@gmail.com",
      fromName: "Atithi - Visitor Management System",
      apikey: ELASTICEMAIL_API_KEY,
      subject: `${visitorName} is here to meet you..!!`,
      to: whomToMeetEmail,
      bodyHtml: `
            <h2 style="text-center m-auto">YOUR INVITEE IS HERE..!!</h2>
            <p>Hey, ${whomToMeet}, <br />
            ${visitorName}, is here to meet you.</p>`
    }
  })
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      console.log(e);
    });
}
