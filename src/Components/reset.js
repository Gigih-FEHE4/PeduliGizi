const mailfield = document.getElementById('mail');
const labels = document.getElementsByTagName('label');
const resetPassword = getElementById('resetPassword');
const successModal = document.querySelector('success');
const failureModal = document.querySelector('failure');

const auth = firebase.auth();

//auth.languageCode = 'DE_de';

auth.useDeviceLanguage();

const resetPasswordFunction = () => {
    const email = mailfield.value;

    auth.sendPasswordResetEmail(email)
        .then(() => {
            console.log('Password Reset Email Send Successfully');
        })
        .catch(erorr => {
            console.error(erorr);
        })
}





resetPassword.addEventListener('click', resetPasswordFunction);

//Animations
mailfield.addEventListener('focus', () => {
    labels.item(0) / className = "focused-field";
});

mailfield / addEventListener('blur', () => {
    if (mailfield.value)
        labels.item(0).className = "unfocused-field";
});