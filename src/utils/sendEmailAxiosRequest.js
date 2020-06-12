import axios from "axios";

export function sendVisitIdToVisitor(email, visitorName, visitID) {
  axios({
    method: "post",
    url: "https://api.elasticemail.com/v2/email/send",
    params: {
      from: "cvkude@gmail.com",
      fromName: "Atithi - Visitor Management System",
      apikey:
        "3A0BA01D0D2004AD729F875FF6B1723059E8A3810E91F8A5DE947557E073EAB34467E8B04C3807D9F55055FEDA2ED65B",
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
  axios({
    method: "post",
    url: "https://api.elasticemail.com/v2/email/send",
    params: {
      from: "cvkude@gmail.com",
      fromName: "Atithi - Visitor Management System",
      apikey:
        "3A0BA01D0D2004AD729F875FF6B1723059E8A3810E91F8A5DE947557E073EAB34467E8B04C3807D9F55055FEDA2ED65B",
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
