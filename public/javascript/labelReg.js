const labelName = document.labelRegistrationForm.labelname;
const labelOwner = document.labelRegistrationForm.labelowner;
const labelHome = document.labelRegistrationForm.labelhome;
const numberOfMembers = document.labelRegistrationForm.numberofmembers;
const dateOfFormation = document.labelRegistrationForm.dateofformation;
const profilePicture = document.labelRegistrationForm.profilepicture;
const labelIcon = document.labelRegistrationForm.labelicon;
const labelSponsors = document.labelRegistrationForm.labelsponsors;
const artistsManaged = document.labelRegistrationForm.artistsmanaged;

const labelNameError = document.getElementById("label__name__error");
const labelOwnerError = document.getElementById("label__owner__error");
const labelHomeError = document.getElementById("label__home__error");
const numberOfMembersError = document.getElementById("label__Number__of__members__error");
const dateOfFormationError = document.getElementById("date__of__formation__error");
const labelIconError = document.getElementById("label__icon__error");
const labelArtistsManagedError = document.getElementById("label__artists__error");
const profilePictureError = document.getElementById("profile__picture__error");



//regexes 
const noNumber = /^[A-Za-z]+$/;
const alphaNumeric = /^[a-zA-Z0-9]+$/;
const capitalize = /^[A-Z][a-z]/;

const validate = () => {
    //label name validation
    if (labelName.value == "") {
        labelNameError.innerHTML = "label name required";
        labelNameError.style = "color:#FF7F7F";
        labelName.style.border = "1px solid #FF7F7F";
        labelName.focus();
    } else if (!(labelName.value.length > 1)) {
        labelName.style.border = "1px solid #FF7F7F";
        labelNameError.innerHTML = "Invalid label name";
        labelNameError.style = "color:#FF7F7F ";
        labelName.focus();
    } else if (!labelName.value.match(capitalize)) {
        labelNameError.innerHTML = "Please capitalize first letter";
        labelNameError.style = "color:#FF7F7F ";
        labelName.style.border = "1px solid #FF7F7F";
        labelName.focus();
    } else if (!labelName.value.match(alphaNumeric)) {
        labelName.style.border = "1px solid #FF7F7F";
        labelNameError.innerHTML = "label name should be alphanumeric";
        labelNameError.style = "color:#FF7F7F";
        labelName.focus();
    } else {
        labelNameError.innerHTML = " Field correctly filled ";
        labelNameError.style = "color:#90EE90 ";
        labelName.style.border = "1px solid #90EE90";
    }

    // Validation of label owner
    if (labelOwner.value == "") {
        labelOwner.style.border = "1px solid #FF7F7F";
        labelOwnerError.innerHTML = " label owner's name required ";
        labelOwnerError.style = "color:#FF7F7F";
        labelOwner.focus();
    } else if (!(labelOwner.value.length > 1)) {
        labelOwner.style.border = "1px solid #FF7F7F";
        labelOwnerError.innerHTML = "Invalid label Owner Name";
        labelOwnerError.style = "color:#FF7F7F ";
        labelOwner.focus();
    } else if (!labelOwner.value.match(noNumber)) {
        labelOwnerError.innerHTML = "label owner's name should not contain numbers";
        labelOwnerError.style = "color:#FF7F7F ";
        labelOwner.style.border = "1px solid #FF7F7F";
        labelOwner.focus();
    } else if (!labelOwner.value.match(capitalize)) {
        labelOwnerError.innerHTML =
            "label owner's name should start with a capital letter";
        labelOwnerError.style = "color:#FF7F7F ";
        labelOwner.style.border = "1px solid #FF7F7F";
        labelOwner.focus();
    } else {
        labelOwnerError.innerHTML = "Field correctly filled ";
        labelOwnerError.style = "color:#90EE90 ";
        labelOwner.style.border = "1px solid #90EE90";
    }

    // Validation of label home
    if (labelHome.value == "") {
        labelHomeError.innerHTML = " label Home Required ";
        labelHomeError.style = "color:#FF7F7F";
        labelHome.style.border = "1px solid #FF7F7F";
        labelHome.focus();
    } else if (!(labelHome.value.length > 1)) {
        labelHome.style.border = "1px solid #FF7F7F";
        labelHomeError.innerHTML = "label Home is should be more than one letter";
        labelHomeError.style = "color:#FF7F7F ";
        labelHome.focus();
    } else if (!labelHome.value.match(capitalize)) {
        labelHomeError.innerHTML = "label Home should start with a capital letter";
        labelHomeError.style = "color:#FF7F7F ";
        labelHome.style.border = "1px solid #FF7F7F";
        labelHome.focus();
    } else if (!labelHome.value.match(alphaNumeric)) {
        labelHome.style.border = "1px solid #FF7F7F";
        labelHomeError.innerHTML = "label Home should be Alphanumeric";
        labelHomeError.style = "color:#FF7F7F";
        labelHome.focus();
    } else {
        labelHomeError.innerHTML = "Field correctly filled ";
        labelHomeError.style = "color:#90EE90 ";
        labelHome.style.border = "1px solid #90EE90";
    }

    // Validation of number of label members
    if (numberOfMembers.value == "") {
        numberOfMembersError.innerHTML = "Number of label Members Required ";
        numberOfMembersError.style = "color:#FF7F7F";
        numberOfMembers.style.border = "1px solid #FF7F7F";
        numberOfMembers.focus();
    } else if (numberOfMembers.value < 0) {
        numberOfMembersError.innerHTML = "Wrong Number Input  ";
        numberOfMembersError.style = "color:#FF7F7F";
        numberOfMembers.style.border = "1px solid #FF7F7F";
        numberOfMembers.focus();
    } else {
        numberOfMembersError.innerHTML = "Field correctly filled ";
        numberOfMembersError.style = "color:#90EE90";
        numberOfMembers.style.border = "1px solid #90EE90";
    }
    //date of formation
    if (dateOfFormation.checked == false && dateOfFormation.value == "") {
        dateOfFormationError.innerHTML = "Date of Formation Required ";
        dateOfFormationError.style = "color:#FF7F7F";
        dateOfFormation.style.border = "1px solid #FF7F7F";
        dateOfFormation.focus();
    } else {
        dateOfFormationError.innerHTML = "Field correctly filled ";
        dateOfFormationError.style = "color:#90EE90 ";
        dateOfFormation.style.border = "1px solid #90EE90";
    }
    //profile profile
    if (profilePicture.value == "") {
        profilePictureError.innerHTML = "Please select a profile picture"
        profilePictureError.style = "color:#FF7F7F";
        profilePicture.style.border = "1px solid #FF7F7F";
        profilePicture.focus();
    }
    else {
        profilePictureError.innerHTML = "Field correctly filled ";
        profilePictureError.style = "color:#90EE90 ";
        profilePicture.style.border = "1px solid #90EE90";
    }
    //label icons
    if (labelIcon.value == "") {
        labelIconError.innerHTML = "Please select a label icon"
        labelIconError.style = "color:#FF7F7F";
        labelIcon.style.border = "1px solid #FF7F7F";
        labelIcon.focus();
    }
    else {
        labelIconError.innerHTML = "Field correctly filled ";
        labelIconError.style = "color:#90EE90 ";
        labelIcon.style.border = "1px solid #90EE90";
    }
}
const labelform = document.getElementById("form-id");
labelform.addEventListener("submit", validate);
labelform.addEventListener("submit", (e) => {
  e.preventDefault();
});
