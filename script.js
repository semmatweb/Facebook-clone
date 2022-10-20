let emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{3,5}$/;
let pswcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9@#$%^&*]{8,}$/;
// let pswcheck = /^([A-Za-z0-9])([@#$.!]{}){8,}$/;
let name = /^[a-zA-Z]+\s[A-Za-z]*$/g
let emails;
let psw;
let passwordField = document.querySelector("#psw");
let eyeIcon= document.querySelector("#eye");
let details= [];
let names;
let emailf;  
let pswss;
let formValid = true;
let password; 

//
const modalInp = document.getElementById('modals')
//
modalDoneBtn.addEventListener('click', login);
// registerBtn.addEventListener('click', register)
eye.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
  })

function login() {
    email = document.getElementById('emails').value;
    psw = document.getElementById('psw').value;
    validate();
    // saveitems.localStorage.setItem('pinDetails', JSON.stringify(details))
}

// function register() {
//   if (modalInp.value !== ''){
//     staticBackdrop.classList.remove('show','disp')
//     document.querySelector('#modalB').hidden=true
//     staticBackdrop.style.display='none'
//     playerName.innerHTML = nameInp.value.toUpperCase()
//     document.querySelector('.main').hidden=false
//    } 
// }

function validate() {
    if (emailcheck.test(email)) {
        document.getElementById('mail').innerHTML = ``;
      } else {
        document.getElementById('mail').innerHTML = `<strong>The email address or mobile number you entered isn't connected to an account. <a href="./forget.html">Find your account and log in</a></strong>`;
        console.log(mail);
      }
      if (pswcheck.test(psw)) {
          document.getElementById('pass').innerHTML = ``;
        } else {
          document.getElementById('pass').innerHTML = `<strong>Invalid Password</strong>`;
          console.log(pass);
        }
      
}
// function search() {
//   if (emailchecks.test(emailss)) {
//     document.getElementById('mails').innerHTML = `Email Verification Link Has Been Sent !`;
//   } else {
//     document.getElementById('mails').innerHTML = `The email address or mobile number you entered isn't connected to an account. <a href="./forget.html">Find your account and log in</a>`;
//     console.log(mails);
//   }
// }
////////////SIGN-tnUP MODAL////////////
function register() {
  // names = document.getElementById('first');
  emailf = document.getElementById('emailfact').value
  password = document.getElementById('pswss').value
  among();
  if (formValid == true){
    first.value 
    surrace.value
    emailfact.value
    psws.value
    let user ={fName:first.value, SName:surrace.value, Email:emailfact.value, PWord:psws.value}
    details.push(user)
    localstorage.setItems("getItems", JSON.stringify(details))
    window.location.href='./homepage.html'
  }
}
getFormItems = localstorage.getItems(details)
function among() {
  if (emailcheck.test(document.getElementById('emailfact').value)) {
    document.getElementById('emailfact').style.borderColor = 'green'
  } else {
    document.getElementById('emailfact').style.borderColor = 'red'
    // formValid = false

  }
}
function space(){
  if (pswcheck.test(document.getElementById('psws').value)) {
    document.getElementById('psws').style.borderColor= 'green'
    
  } else {
    document.getElementById('psws').style.borderColor= 'red'
    // formValid = false
  }
}

$(document).ready(function(){
           
    $('#signup-account').click(function(){
     
     
        $('.modal').show();
     
    }); 
     
    $('.modal-close').click(function(){
     
     
        $('.modal').hide();
     
    }); 
     
 });


 

 