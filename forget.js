let emailchecks = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{3,5}$/;
let emailsss;
//

function found() {
    emailsss = document.getElementById('emailss').value;
    fasinate();
}
function search() {
    if (emailchecks.test(emailsss)) {
        document.getElementById('mails').innerHTML = `<strong>Email Verfication link has been sent to you</strong>`;
      } else {
        document.getElementById('mails').innerHTML = `<strong>The email address or mobile number you entered isn't connected to an account. <a href="./forget.html">Find your account and log in</a></strong>`;
        console.log(mails);
      }
}