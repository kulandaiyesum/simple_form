const form = document.getElementsById('form');
const studentName = document.getElementsById('studentName');
const fathersName = document.getElementsById('fathersName');
const DOB = document.getElementsById('DOB');
const email = document.getElementsById('email');
const mobileNo = document.getElementsById('mobileNo');
const photo = document.getElementsById('photo');

form.addEventListerner('submit', e => {
    e.preventDefault();

    validateInputs();
});
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = "";

    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isVailidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue =studentName.value.trim();
    const fatherNameValue = fathersName.value.trim();
    const DOBValue = DOB.value.trim();
    const emailValue = email.value.trim();
    const mobileNoValue = mobileNo.value.trim();
    const photoValue = photo.value.trim();


    if(nameValue === "") {
        setError(nameValue,'Studentname is required');
    }else if(nameValue.length > 20) {
        setError(nameValue,'Max characters should be 20');
    }else{
        setSuccess(nameValue);
    }

    if(fatherNameValue === "") {
        setError(fatherNameValue,'Fathers Name is required');
    }else if(fatherNameValue.length > 20) {
        setError(fatherNameValue,'Max characters should be 20');
    }else{
        setSuccess(fatherNameValue);
    }

    if(emailValue === "") {
        setError(emailValue,'Email is required');
    }else if(!isVailidEmail(emailValue)){
        setError(email,'Provide a valid email address');
    }else{
        setSuccess(emailValue);
    }
};