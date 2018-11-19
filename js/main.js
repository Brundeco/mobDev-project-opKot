let btnLogin = document.getElementById('btnLogin');
let btnSignup = document.getElementById('btnSignup');
let btnPasswordForgotten = document.getElementById('btnPasswordForgotten');
let btnSignupAsStudent = document.getElementById('btnSignupAsStudent');
let btnSignupAsAdmin = document.getElementById('btnSignupAsAdmin');
let btnSignupConfirm = document.getElementById('btnSignupConfirm');
let btnPasswordReset = document.getElementById('btnPasswordReset');
let pageArrows = document.querySelectorAll('a', 'page-arrow');
let btnLogout = document.querySelectorAll('button','btnLogout');

let screenStart = document.getElementById('screenStart');
let screenSignUpType = document.getElementById('screenSignUpType');
let screenSignUpConfirm = document.getElementById('screenSignUpConfirm');
let screenPasswordReset = document.getElementById('screenPasswordReset')

let screenHomePage = document.getElementById('screenHomePage');

function backToIndex() {
    screenStart.style.display = 'block';
    screenSignUpType.style.display = 'none';
    screenSignUpConfirm.style.display = 'none';
    screenPasswordReset.style.display = 'none';
    homePage.style.display = 'none';
}

for(let i = 0; i < pageArrows.length; i++) {
    pageArrows[i].addEventListener('click', backToIndex);
}

for(let i = 0; i < btnLogout.length; i++) {
    btnLogout[i].addEventListener('click', backToIndex);
}

function viewSignUpType() {
    screenStart.style.display = 'none';
    screenSignUpType.style.display = 'block';
    screenSignUpConfirm.style.display = 'none';
    screenPasswordReset.style.display = 'none';
}

function viewSignUpForm() {
    screenStart.style.display = 'none';
    screenSignUpType.style.display = 'none';
    screenSignUpConfirm.style.display = 'block';
    screenPasswordReset.style.display = 'none';
}

function viewHomePage() {
    screenStart.style.display = 'none';
    screenSignUpType.style.display = 'none';
    screenSignUpConfirm.style.display = 'none';
    screenPasswordReset.style.display = 'none';
    screenHomePage.style.display = 'block';
}

btnSignup.addEventListener('click', viewSignUpType);
btnSignupAsStudent.addEventListener('click', viewSignUpForm);
btnSignupAsAdmin.addEventListener('click', viewSignUpForm);
btnLogin.addEventListener('click', viewHomePage);

