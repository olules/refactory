const firstName = document.artistRegistrationForm.firstname;
const lastName = document.artistRegistrationForm.lastname;
const stageName = document.artistRegistrationForm.stagename;
const artistId = document.artistRegistrationForm.artistid;
const telephoneContact = document.artistRegistrationForm.telephonecontact;
const artistEmail = document.artistRegistrationForm.email;
const artistDob = document.artistRegistrationForm.artistdob;
const districtBasedIn = document.artistRegistrationForm.districtbasedin;
const nationalIdNumber = document.artistRegistrationForm.nationalidnumber;
const dateOfStart = document.artistRegistrationForm.dateofstart;
const location = document.artistRegistrationForm.location;
const numberOfAlbums = document.artistRegistrationForm.numberofalbums;
const numberOfSongs = document.artistRegistrationForm.numberofsongs;
const genre = document.artistRegistrationForm.genre;
const uploadPicture = document.artistRegistrationForm.uploadpicture;

const male = document.getElementById("smale");
const female = document.getElementById("sfemale");

const firstNameError = document.getElementById("first__name__error");
const lastNameError = document.getElementById("last__name__error");
const stageNameError = document.getElementById("stage__name__error");
const artistIdError = document.getElementById("artist__Id__error");
const phoneNumberError = document.getElementById("phone__number__error");
const artistTwitterError = document.getElementById("artist__twitter__error");
const emailError = document.getElementById("artist__email__error");
const artistDobError = document.getElementById("artist__dob__error");
const districtBasedInError = document.getElementById(
  "district__based__in__error"
);
const artistNinError = document.getElementById("artist__nin__error");
const dateOfStartError = document.getElementById("date__of__start__error");
const locationError = document.getElementById("artist__location__error");
const numberOfAlbumsError = document.getElementById(
  "number__of__albums__error"
);
const numberOfSongsError = document.getElementById("number__of__songs__error");
const genreError = document.getElementById("artist__genre__error");
const artistProfilePictureError = document.getElementById(
  "artist__picture__error"
);
const genderError = document.getElementById("artist__gender__error");

// Regexes
const noNumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;
const moreThan1 = /[\w\s]+/;
const alphaNumeric = /^[a-zA-Z0-9]+$/;
const artistIdformart = /^[a-z]{3}\d+[a-z]{3}/;
const nationalIDFormat = /^[A-Z]{2}\d+[A-Z]{3}/;
const phoneFormat = /^\d{12}$/;
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

const validate = () => {
  // validation of the first name .

  if (firstName.value == "") {
    firstName.style.border = "1px solid red";
    firstNameError.innerHTML = "First Name Required";
    firstNameError.style = "color:#FF7F7F ";
    firstName.focus();
  

  } else if (!(firstName.value.length > 1)) {
    firstName.style.border = "1px solid red";
    firstNameError.innerHTML =
      "First name is supposed to be more than one letter";
    firstNameError.style = "color:#FF7F7F ";
    firstName.focus();
  } else if (!(firstName.value.match(noNumber))) {
    firstNameError.innerHTML = "First Name should not  contain numbers";
    firstNameError.style = "color:#FF7F7F ";
    firstName.style.border = "1px solid red";
    firstName.focus();
  } else if (!(firstName.value.match(capitalize))) {
    firstNameError.innerHTML = "First Name should start with a capital letter";
    firstNameError.style = "color:#FF7F7F ";
    firstName.style.border = "1px solid red";
    firstName.focus();

  } else {
    firstNameError.innerHTML = " Field correctly filled ";
    firstNameError.style = "color:#90EE90 ";
    firstName.style.border = "1px solid #90EE90";
    return true;
  }
  // validationo f last name
  if (lastName.value == "") {
    lastName.style.border = "1px solid red";
    lastNameError.innerHTML = "Last Name is Required ";
    lastNameError.style = "color:#FF7F7F ";
    lastName.focus();
  } else if (!(lastName.value.length > 1)) {
    lastName.style.border = "1px solid red";
    lastNameError.innerHTML =
      "Last name is supposed to be more than one letter";
    lastNameError.style = "color:#FF7F7F ";
    lastName.focus();
  } else if (!lastName.value.match(noNumber)) {
    lastNameError.innerHTML = "Last Name should not  contain numbers";
    lastNameError.style = "color:#FF7F7F ";
    lastName.style.border = "1px solid red";
    lastName.focus();
  } else if (!lastName.value.match(capitalize)) {
    lastNameError.innerHTML = "Last  Name should start with a capital letter ";
    lastNameError.style = "color:#FF7F7F ";
    lastName.style.border = "1px solid red";
    lastName.focus();
  } else {
    lastNameError.innerHTML = "Correctly filled ";
    lastNameError.style = "color:#90EE90 ";
    lastName.style.border = "1px solid #90EE90";
  }
  // stageName input validation
  if (stageName.value == "") {
    stageName.style.border = "1px solid red";
    stageNameError.innerHTML = " stageName Field Required ";
    stageNameError.style = "color:#FF7F7F";
    stageName.focus();
  } else if (!(stageName.value.length > 1)) {
    stageName.style.border = "1px solid red";
    stageNameError.innerHTML =
      "Stage  name is supposed to be more than one letter";
    stageNameError.style = "color:#FF7F7F ";
    stageName.focus();
  } else if (!stageName.value.match(capitalize)) {
    stageNameError.innerHTML = "Stage Name should start with a capital letter";
    stageNameError.style = "color:#FF7F7F ";
    stageName.style.border = "1px solid red";
    stageName.focus();
  } else if (!stageName.value.match(alphaNumeric)) {
    stageName.style.border = "1px solid red";
    stageNameError.innerHTML = " stageName Format should be Alphanumeric";
    stageNameError.style = "color:#FF7F7F";
    stageName.focus();
  } else {
    stageNameError.innerHTML = "Field correctly filled ";
    stageNameError.style = "color:#90EE90 ";
    stageName.style.border = "1px solid #90EE90";
  }
  // validation of for Artist ID.
  if (artistId.value == "") {
    artistId.style.border = "1px solid red";
    artistIdError.innerHTML = " Artist ID Field Required";
    artistIdError.style = "color:#FF7F7F";
    artistId.focus();
  } else if (!artistId.value.match(artistIdformart)) {
    artistId.style.border = "1px solid red";
    artistIdError.innerHTML = " Artist ID Format entered  is wrong";
    artistIdError.style = "color:#FF7F7F";
    artistId.focus();
  } else {
    artistIdError.innerHTML = "Field correctly filled ";
    artistIdError.style = "color:#90EE90 ";
    artistId.style.border = "1px solid #90EE90";
  }
  // validation of for telephoneContact  contact.
  if (telephoneContact.value == "") {
    phoneNumberError.innerHTML = "Phone number Field Required";
    phoneNumberError.style = "color:#FF7F7F";
    telephoneContact.style.border = "1px solid red";
    telephoneContact.focus();
  } else if (!telephoneContact.value.match(phoneFormat)) {
    phoneNumberError.innerHTML = "Phone number Format Entered is Wrong";
    phoneNumberError.style = "color:#FF7F7F";
    telephoneContact.style.border = "1px solid red";
    telephoneContact.focus();
  } else {
    phoneNumberError.innerHTML = "Field correctly filled ";
    phoneNumberError.style = "color:#90EE90 ";
    telephoneContact.style.border = "1px solid #90EE90";
  }

  // validation of of Artist Email input

  if (artistEmail.value == "") {
    emailError.innerHTML = "Artist Email Field Required ";
    emailError.style = "color:#FF7F7F";
    artistEmail.style.border = "1px solid red";
    artistEmail.focus();
  } else if (!artistEmail.value.match(emailFormat)) {
    emailError.innerHTML = "Email Format entered is Wrong";
    emailError.style = "color:#FF7F7F";
    artistEmail.style.border = "1px solid red";
    artistEmail.focus();
  } else {
    emailError.innerHTML = "Field correctly filled ";
    emailError.style = "color:#90EE90 ";
    artistEmail.style.border = "1px solid #90EE90";
  }
  // validation of of Artist Date of Birth.
  if (artistDob.checked == false && artistDob.value == "") {
    artistDobError.innerHTML = "Date of Birth Field Required";
    artistDobError.style = "color:#FF7F7F";
    artistDob.style.border = "1px solid red";
    artistDob.focus();
  } else {
    artistDobError.innerHTML = "Field correctly filled ";
    artistDobError.style = "color:#90EE90 ";
    artistDob.style.border = "1px solid #90EE90";
  }

  // validation of of Artist Based District.
  if (districtBasedIn.value == "") {
    districtBasedInError.innerHTML = "Artist Based District Field Required";
    districtBasedInError.style = "color:#FF7F7F";
    districtBasedIn.style.border = "1px solid red";
    districtBasedIn.focus();
  } else if (!(districtBasedIn.value.length > 1)) {
    districtBasedIn.style.border = "1px solid red";
    districtBasedInError.innerHTML =
      "Based District is supposed to be more than one letter";
    districtBasedInError.style = "color:#FF7F7F ";
    districtBasedIn.focus();
  } else if (!districtBasedIn.value.match(noNumber)) {
    districtBasedInError.innerHTML =
      "Based District  should not  contain numbers";
    districtBasedInError.style = "color:#FF7F7F ";
    districtBasedIn.style.border = "1px solid red";
    districtBasedIn.focus();
  } else if (!districtBasedIn.value.match(capitalize)) {
    districtBasedInError.innerHTML =
      " Based District should start with a capital letter";
    districtBasedInError.style = "color:#FF7F7F ";
    districtBasedIn.style.border = "1px solid red";
    districtBasedIn.focus();
  } else {
    districtBasedInError.innerHTML = " Field correctly filled ";
    districtBasedInError.style = "color:#90EE90 ";
    districtBasedIn.style.border = "1px solid #90EE90";
  }
  // validation of of the NationalID NIN
  if (nationalIdNumber.value == "") {
    artistNinError.innerHTML = "National ID NIN  Field  Required";
    artistNinError.style = "color:#FF7F7F";
    nationalIdNumber.style.border = "1px solid red";
    nationalIdNumber.focus();
  } else if (!nationalIdNumber.value.match(nationalIDFormat)) {
    artistNinError.innerHTML = "National ID NIN  Format Wrong";
    artistNinError.style = "color:#FF7F7F";
    nationalIdNumber.style.border = "1px solid red";
    nationalIdNumber.focus();
  } else {
    artistNinError.innerHTML = "Field correctly filled ";
    artistNinError.style = "color:#90EE90 ";
    nationalIdNumber.style.border = "1px solid #90EE90";
  }
  // validation of of the date artist started.
  if (dateOfStart.checked == false && dateOfStart.value == "") {
    dateOfStartError.innerHTML = "Date Began Music  Field Required";
    dateOfStartError.style = "color:#FF7F7F";
    dateOfStart.style.border = "1px solid red";
    dateOfStart.focus();
  } else {
    dateOfStartError.innerHTML = "Field correctly filled ";
    dateOfStartError.style = "color:#90EE90 ";
    dateOfStart.style.border = "1px solid #90EE90";
  }
  // validation of of the Artiste location.
  if (location.value == "") {
    locationError.innerHTML = "Artist location Field Required";
    locationError.style = "color:#FF7F7F";
    location.style.border = "1px solid red";
    location.focus();
  } else if (!(location.value.length > 1)) {
    location.style.border = "1px solid red";
    locationError.innerHTML =
      "Artist location  is supposed to be more than one letter";
    locationError.style = "color:#FF7F7F ";
    location.focus();
  } else if (!(location.value.match(noNumber))) {
    locationError.innerHTML = "Artist location   should not  contain numbers";
    locationError.style = "color:#FF7F7F ";
    location.style.border = "1px solid red";
    location.focus();
  } else if (!(location.value.match(capitalize))) {
    locationError.innerHTML =
      " Artist location  should start with a capital letter";
    locationError.style = "color:#FF7F7F ";
    location.style.border = "1px solid red";
    location.focus();
  } else {
    locationError.innerHTML = " Field correctly filled ";
    locationError.style = "color:#90EE90 ";
    location.style.border = "1px solid #90EE90";
  }
  // validation of of the Number of Albums
  if (numberOfAlbums.value == "") {
    numberOfAlbumsError.innerHTML = " Number of Albums Field Required ";
    numberOfAlbumsError.style = "color:#FF7F7F";
    numberOfAlbums.style.border = "1px solid red";
    numberOfAlbums.focus();
  } else if (numberOfAlbums.value < 0) {
    numberOfAlbumsError.innerHTML = " Invalid Number Input ";
    numberOfAlbumsError.style = "color:#FF7F7F";
    numberOfAlbums.style.border = "1px solid red";
    numberOfAlbums.focus();
  } else {
    numberOfAlbumsError.innerHTML = " Field correctly filled ";
    numberOfAlbumsError.style = "color:#90EE90 ";
    numberOfAlbums.style.border = "1px solid #90EE90";
  }
  // validation of of the Number of Songs
  if (numberOfSongs.value == "") {
    numberOfSongsError.innerHTML = "Number of Songs Field Required";
    numberOfSongsError.style = "color:#FF7F7F";
    numberOfSongs.style.border = "1px solid red";
    numberOfSongs.focus();
  } else if (numberOfSongs.value < 0) {
    numberOfSongsError.innerHTML = " Invalid Number Input ";
    numberOfSongsError.style = "color:#FF7F7F";
    numberOfSongs.style.border = "1px solid red";
    numberOfSongs.focus();
  } else {
    numberOfSongsError.innerHTML = " Field correctly filled ";
    numberOfSongsError.style = "color:#90EE90 ";
    numberOfSongs.style.border = "1px solid #90EE90";
  }
  // validation of of Artist Genre .
  if (genre.value == "") {
    genreError.innerHTML = "Artist Genre Field Required";
    genreError.style = "color:#FF7F7F";
    genre.style.border = "1px solid red";
    genre.focus();
  } else if (!(genre.value.length > 1)) {
    genre.style.border = "1px solid red";
    genreError.innerHTML =
      "Artist Genre  is supposed to be more than one letter";
    genreError.style = "color:#FF7F7F ";
    genre.focus();
  } else if (!genre.value.match(capitalize)) {
    genreError.innerHTML = " Artist Genre  should start with a capital letter";
    genreError.style = "color:#FF7F7F ";
    genre.style.border = "1px solid red";
    genre.focus();
  } else if (!genre.value.match(alphaNumeric)) {
    genre.style.border = "1px solid red";
    genreError.innerHTML = " Artist Genre Format should be Alphanumeric";
    genreError.style = "color:#FF7F7F";
    genre.focus();
  } else {
    genreError.innerHTML = "Field correctly filled";
    genreError.style = "color:#90EE90 ";
    genre.style.border = "1px solid #90EE90";
  }
  // validation of of  Artist Gender
  if (male.checked == false && female.checked == false) {
    genderError.innerHTML = "Gender Field Required ";
    genderError.style = "color:#FF7F7F";
  } else {
    genderError.innerHTML = "Field correctly filled";
    genderError.style = "color:#90EE90 ";
  }
  // validation of of Artiste photo upload.
  if (uploadPicture.value == false) {
    artistProfilePictureError.innerHTML = "Artist Photo Field Required";
    artistProfilePictureError.style = "color:#FF7F7F";
    uploadPicture.focus();
  } else {
    artistProfilePictureError.innerHTML = "Field correctly filled";
    artistProfilePictureError.style = "color:#90EE90 ";
  }
};

const artistform = document.getElementById("form-id");
artistform.addEventListener("submit", validate);
artistform.addEventListener("submit", (e) => {
  e.preventDefault();
});
