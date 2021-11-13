const bandAlbums = document.bandRegistrationForm.albums;
const genre = document.bandRegistrationForm.genre;
const bandSongs = document.bandRegistrationForm.bandnumberofsongs;
const bandIcon = document.bandRegistrationForm.bandicon;
const profilePicture = document.bandRegistrationForm.profilepicture;
const otherBandOwners = document.bandRegistrationForm.otherbandowners;
const bandNumberOfMembers = document.bandRegistrationForm.bandnumberofmembers;
const bandSlogan = document.bandRegistrationForm.bandslogan;
const bandId = document.bandRegistrationForm.bandid;
const bandSponsors = document.bandRegistrationForm.bandsponsors;
const dateOfFormation = document.bandRegistrationForm.dateofformation;
const telephoneContact = document.bandRegistrationForm.telephonecontact;
const twitterHandle = document.bandRegistrationForm.twitterhandle;
const bandName = document.bandRegistrationForm.bandname;
const bandOwner = document.bandRegistrationForm.bandowner;
const bandHome = document.bandRegistrationForm.bandhome;
const bandEmail = document.bandRegistrationForm.bandemail;
const bandCrowns = document.bandRegistrationForm.bandcrowns;

const bandCrownsError = document.getElementById("band__crowns__error");
const bandAlbumsError = document.getElementById("band__albums__error");
const genreError = document.getElementById("genre__error");
const bandSongsError = document.getElementById(
  "band__number__of__songs__error"
);
const bandIconError = document.getElementById("band__icon__error");
const profilePictureError = document.getElementById("profile__picture__error");
const otherBandOwnersError = document.getElementById(
  "other__band__owners__error"
);
const bandNameError = document.getElementById("band__name__error");
const bandSponsorsError = document.getElementById("band__sponsor__error");
const dateOfFormationError = document.getElementById(
  "date__of__formation__error"
);
const telephoneContactError = document.getElementById(
  "telephone__contact__error"
);
const bandOwnerError = document.getElementById("band__owner__error");
const bandHomeError = document.getElementById("band__home__error");
const bandMembersError = document.getElementById(
  "band__Number__of__members__error"
);
const bandSloganError = document.getElementById("band__slogan__error");
const bandIdError = document.getElementById("band__id__error");
const twitterHandleError = document.getElementById("twitter__handle__error");
const bandEmailError = document.getElementById("band__email__error");

// Regexes
const nationalIdFormat = /^[A-Z]{2}\d+[A-Z]{3}/;
const phoneFormat = /^\d{12}$/;
const spacesFormat = /\[\[do\s+("[\w\s]+")\s*\]\]/;
const twitterFormat = /(^|[^@\w])@(\w{1,15})\b/;
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
const noNumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;
const alphaNumeric = /^[a-zA-Z0-9]+$/;
const systemIdFormat = /^[a-z]{3}\d+[a-z]{3}/;

const validate = () => {
  // Validation of the Band Name
  if (bandName.value == "") {
    bandNameError.innerHTML = "Band name required";
    bandNameError.style = "color:#FF7F7F";
    bandName.style.border = "1px solid #FF7F7F";
    bandName.focus();
  } else if (!(bandName.value.length > 1)) {
    bandName.style.border = "1px solid #FF7F7F";
    bandNameError.innerHTML = "Invalid band name";
    bandNameError.style = "color:#FF7F7F ";
    bandName.focus();
  } else if (!bandName.value.match(capitalize)) {
    bandNameError.innerHTML = "Please capitalize first letter";
    bandNameError.style = "color:#FF7F7F ";
    bandName.style.border = "1px solid #FF7F7F";
    bandName.focus();
  } else if (!bandName.value.match(alphaNumeric)) {
    bandName.style.border = "1px solid #FF7F7F";
    bandNameError.innerHTML = "Band name should be alphanumeric";
    bandNameError.style = "color:#FF7F7F";
    bandName.focus();
  } else {
    bandNameError.innerHTML = " Field correctly filled ";
    bandNameError.style = "color:#90EE90 ";
    bandName.style.border = "1px solid #90EE90";
  }

  // Validation of band owner
  if (bandOwner.value == "") {
    bandOwner.style.border = "1px solid #FF7F7F";
    bandOwnerError.innerHTML = " Band owner's name required ";
    bandOwnerError.style = "color:#FF7F7F";
    bandOwner.focus();
  } else if (!(bandOwner.value.length > 1)) {
    bandOwner.style.border = "1px solid #FF7F7F";
    bandOwnerError.innerHTML = "Invalid Band Owner Name";
    bandOwnerError.style = "color:#FF7F7F ";
    bandOwner.focus();
  } else if (!bandOwner.value.match(noNumber)) {
    bandOwnerError.innerHTML = "Band owner's name should not contain numbers";
    bandOwnerError.style = "color:#FF7F7F ";
    bandOwner.style.border = "1px solid #FF7F7F";
    bandOwner.focus();
  } else if (!bandOwner.value.match(capitalize)) {
    bandOwnerError.innerHTML =
      "Band owner's name should start with a capital letter";
    bandOwnerError.style = "color:#FF7F7F ";
    bandOwner.style.border = "1px solid #FF7F7F";
    bandOwner.focus();
  } else {
    bandOwnerError.innerHTML = "Field correctly filled ";
    bandOwnerError.style = "color:#90EE90 ";
    bandOwner.style.border = "1px solid #90EE90";
  }

  // Validation of band home
  if (bandHome.value == "") {
    bandHomeError.innerHTML = " Band Home Required ";
    bandHomeError.style = "color:#FF7F7F";
    bandHome.style.border = "1px solid #FF7F7F";
    bandHome.focus();
  } else if (!(bandHome.value.length > 1)) {
    bandHome.style.border = "1px solid #FF7F7F";
    bandHomeError.innerHTML = "Band Home is should be more than one letter";
    bandHomeError.style = "color:#FF7F7F ";
    bandHome.focus();
  } else if (!bandHome.value.match(capitalize)) {
    bandHomeError.innerHTML = "Band Home should start with a capital letter";
    bandHomeError.style = "color:#FF7F7F ";
    bandHome.style.border = "1px solid #FF7F7F";
    bandHome.focus();
  } else if (!bandHome.value.match(alphaNumeric)) {
    bandHome.style.border = "1px solid #FF7F7F";
    bandHomeError.innerHTML = "Band Home should be Alphanumeric";
    bandHomeError.style = "color:#FF7F7F";
    bandHome.focus();
  } else {
    bandHomeError.innerHTML = "Field correctly filled ";
    bandHomeError.style = "color:#90EE90 ";
    bandHome.style.border = "1px solid #90EE90";
  }

  // Validation of number of band members
  if (bandNumberOfMembers.value == "") {
    bandMembersError.innerHTML = "Number of Band Members Required ";
    bandMembersError.style = "color:#FF7F7F";
    bandNumberOfMembers.style.border = "1px solid #FF7F7F";
    bandNumberOfMembers.focus();
  } else if (bandNumberOfMembers.value < 0) {
    bandMembersError.innerHTML = "Wrong Number Input  ";
    bandMembersError.style = "color:#FF7F7F";
    bandNumberOfMembers.style.border = "1px solid #FF7F7F";
    bandNumberOfMembers.focus();
  } else {
    bandMembersError.innerHTML = "Field correctly filled ";
    bandMembersError.style = "color:#90EE90";
    bandNumberOfMembers.style.border = "1px solid #90EE90";
  }

  // Validation of band slogan

  if (bandSlogan.value == "") {
    bandSloganError.innerHTML = "Band  Slogan Required ";
    bandSloganError.style = "color:#FF7F7F";
    bandSlogan.style.border = "1px solid #FF7F7F";
    bandSlogan.focus();
  } else if (!(bandSlogan.value.length > 1)) {
    bandSlogan.style.border = "1px solid #FF7F7F";
    bandSloganError.innerHTML = "Band  Slogan should be more than one letter";
    bandSloganError.style = "color:#FF7F7F ";
    bandSlogan.focus();
  } else if (!bandSlogan.value.match(capitalize)) {
    bandSloganError.innerHTML =
      "Band  Slogan  should start with a capital letter";
    bandSloganError.style = "color:#FF7F7F ";
    bandSlogan.style.border = "1px solid #FF7F7F";
    bandSlogan.focus();
  } else if (!bandSlogan.value.match(alphaNumeric)) {
    bandSlogan.style.border = "1px solid #FF7F7F";
    bandSloganError.innerHTML = "Band Slogan should be Alphanumeric";
    bandSloganError.style = "color:#FF7F7F";
    bandSlogan.focus();
  } else {
    bandSloganError.innerHTML = "Field correctly filled ";
    bandSloganError.style = "color:#90EE90 ";
    bandSlogan.style.border = "1px solid #90EE90";
  }

  // Validation of band id
  if (bandId.value == "") {
    bandIdError.innerHTML = "Band ID Required ";
    bandIdError.style = "color:#FF7F7F";
    bandId.style.border = "1px solid #FF7F7F";
    bandId.focus();
  } else if (!bandId.value.match(systemIdFormat)) {
    bandId.style.border = "1px solid #FF7F7F";
    bandIdError.innerHTML = "Band  ID Format invalid";
    bandIdError.style = "color:#FF7F7F";
    bandId.focus();
  } else {
    bandIdError.innerHTML = "Field correctly filled ";
    bandIdError.style = "color:#90EE90 ";
    bandId.style.border = "1px solid #90EE90";
  }

  // Validating the  band number of songs
  if (bandSongs.value == "") {
    bandSongsError.innerHTML = "Band number of songs Required ";
    bandSongsError.style = "color:#FF7F7F";
    bandSongs.style.border = "1px solid #FF7F7F";
    bandSongs.focus();
  } else if (bandSongs.value < 0) {
    bandSongsError.innerHTML = "Invalid number";
    bandSongsError.style = "color:#FF7F7F";
    bandSongs.style.border = "1px solid #FF7F7F";
    bandSongs.focus();
  } else {
    bandSongsError.innerHTML = " Field correctly filled ";
    bandSongsError.style = "color:#90EE90";
    bandSongs.style.border = "1px solid #90EE90";
  }
  // Validating the date band was formed.

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

  // Validating the Band Telephone.
  if (telephoneContact.value == "") {
    telephoneContactError.innerHTML = "Telephone Contact Required ";
    telephoneContactError.style = "color: #FF7F7F";
    telephoneContact.style.border = "1px solid #FF7F7F";
    telephoneContact.focus();
  } else if (!telephoneContact.value.match(phoneFormat)) {
    telephoneContactError.innerHTML = "Invalid telephone number";
    telephoneContactError.style = "color:#FF7F7F";
    telephoneContact.style.border = "1px solid #FF7F7F";
    telephoneContact.focus();
  } else {
    telephoneContactError.innerHTML = "Field correctly filled ";
    telephoneContactError.style = "color:#90EE90 ";
    telephoneContact.style.border = "1px solid #90EE90";
  }

  // Validating the twitter handle of bands.
  if (twitterHandle.value == "") {
    twitterHandleError.innerHTML = " Twitter handle Required ";
    twitterHandleError.style = "color:#FF7F7F ";
    twitterHandle.style.border = " 1px solid #FF7F7F ";
    twitterHandle.focus();
  } else if (!twitterHandle.value.match(twitterFormat)) {
    twitterHandleError.innerHTML = "Invalid twitter handle ";
    twitterHandleError.style = "color:#FF7F7F";
    twitterHandle.style.border = "1px solid #FF7F7F";
    twitterHandle.focus();
  } else {
    twitterHandleError.innerHTML = "Field correctly filled ";
    twitterHandleError.style = "color:#90EE90 ";
    twitterHandle.style.border = "1px solid #90EE90";
  }

  // Validating the band email .
  if (bandEmail.value == "") {
    bandEmailError.innerHTML = " Band Email Required ";
    bandEmailError.style = "color:#FF7F7F";
    bandEmail.style.border = "1px solid #FF7F7F ";
    bandEmail.focus();
  } else if (!bandEmail.value.match(emailFormat)) {
    bandEmailError.innerHTML = "Invalid Email";
    bandEmailError.style = "color:#FF7F7F";
    bandEmail.style.border = "1px solid #FF7F7F";
    bandEmail.focus();
  } else {
    bandEmailError.innerHTML = "Field correctly filled ";
    bandEmailError.style = "color:#90EE90 ";
    bandEmail.style.border = "1px solid #90EE90";
  }

  // Validation the Band Crowns .
  if (bandCrowns.value == "") {
    bandCrownsError.innerHTML = "Band Crowns Required ";
    bandCrownsError.style = "color:#FF7F7F";
    bandCrowns.style.border = "1px solid #FF7F7F ";
    bandCrowns.focus();
  } else if (!(bandCrowns.value.length > 1)) {
    bandCrowns.style.border = "1px solid #FF7F7F";
    bandCrownsError.innerHTML = "Band Crowns should to be more than one letter";
    bandCrownsError.style = "color:#FF7F7F ";
    bandCrowns.focus();
  } else if (!bandCrowns.value.match(capitalize)) {
    bandCrownsError.innerHTML =
      "Band Crowns should start with a capital letter";
    bandCrownsError.style = "color:#FF7F7F ";
    bandCrowns.style.border = "1px solid #FF7F7F";
    bandCrowns.focus();
  } else if (!bandCrowns.value.match(alphaNumeric)) {
    bandCrowns.style.border = "1px solid #FF7F7F";
    bandCrownsError.innerHTML = "Band Crowns should be Alphanumeric";
    bandCrownsError.style = "color:#FF7F7F";
    bandCrowns.focus();
  } else {
    bandCrownsError.innerHTML = " Field correctly filled ";
    bandCrownsError.style = "color:#90EE90 ";
    bandCrowns.style.border = "1px solid #90EE90";
  }

  // Validation of number of band albums
  if (bandAlbums.value == "") {
    bandAlbumsError.innerHTML = "Number of band albums required ";
    bandAlbumsError.style = "color:#FF7F7F";
    bandAlbums.style.border = "1px solid #FF7F7F ";
    bandAlbums.focus();
  } else if (bandAlbums.value < 0) {
    bandAlbumsError.innerHTML = "Invalid number";
    bandAlbumsError.style = "color:#FF7F7F";
    bandAlbums.style.border = "1px solid #FF7F7F";
    bandAlbums.focus();
  } else {
    bandAlbumsError.innerHTML = "Field correctly filled ";
    bandAlbumsError.style = "color:#90EE90";
    bandAlbums.style.border = "1px solid #90EE90";
  }

  // Validation of band genre
  if (genre.value == "") {
    genreError.innerHTML = "Genre required ";
    genreError.style = "color:#FF7F7F";
    genre.style.border = "1px solid #FF7F7F";
    genre.focus();
  } else if (!(genre.value.length > 1)) {
    genre.style.border = "1px solid #FF7F7F";
    genreError.innerHTML = "Genre should be more than one letter";
    genreError.style = "color:#FF7F7F ";
    genre.focus();
  } else if (!genre.value.match(capitalize)) {
    genreError.innerHTML = "Genre   should start with a capital letter";
    genreError.style = "color:#FF7F7F ";
    genre.style.border = "1px solid #FF7F7F";
    genre.focus();
  } else if (!genre.value.match(alphaNumeric)) {
    genre.style.border = "1px solid #FF7F7F";
    genreError.innerHTML = "Genre should be Alphanumeric";
    genreError.style = "color:#FF7F7F";
    genre.focus();
  } else {
    genreError.innerHTML = " Field correctly filled ";
    genreError.style = "color:#90EE90 ";
    genre.style.border = "1px solid #90EE90";
  }

  // Validation of band icon
  if (bandIcon.value == "") {
    bandIconError.innerHTML = "Band Icon Required";
    bandIconError.style = "color:#FF7F7F";
    bandIcon.focus();
  } else {
    bandIconError.innerHTML = "Field correctly filled";
    bandIconError.style = "color:#90EE90 ";
  }

  // Validation of band profile photo
  if (profilePicture.value == "") {
    profilePictureError.innerHTML = "Band Photo Required";
    profilePictureError.style = "color:#FF7F7F";
    profilePicture.focus();
  } else {
    profilePictureError.innerHTML = "Field correctly filled";
    profilePictureError.style = "color:#90EE90 ";
  }

  // Validation of band sponsors
  if (bandSponsors.value == "") {
    bandSponsorsError.innerHTML =
      "Band Sponsors Field Required. Type N/A if there are no sponsers";
    bandSponsorsError.style = "color:#FF7F7F";
    bandSponsors.style.border = "1px solid #FF7F7F ";
    BandBandsponsors.focus();
  } else {
    bandSponsorsError.innerHTML = "Field correctly filled ";
    bandSponsorsError.style = "color:#90EE90 ";
    bandSponsors.style.border = "1px solid #90EE90";
  }

  // Validation of more band owners
  if (otherBandOwners.value == "") {
    otherBandOwnersError.innerHTML =
      "Other Band Owners' names Required. Type N/A if there are no N/A";
    otherBandOwnersError.style = "color:#FF7F7F";
    otherBandOwners.style.border = "1px solid #FF7F7F ";
    otherBandOwners.focus();
  } else {
    otherBandOwnersError.innerHTML = " Field correctly filled ";
    otherBandOwnersError.style = "color:#90EE90 ";
    otherBandOwners.style.border = "1px solid #90EE90";
  }
};

const Bandform = document.getElementById("form-id");
Bandform.addEventListener("submit", validate);
Bandform.addEventListener("submit", (e) => {
  e.preventDefault();
});
