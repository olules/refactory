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
const artistLocation = document.artistRegistrationForm.artistlocation;
const numberOfAlbums = document.artistRegistrationForm.numberofalbums;
const numberOfSongs = document.artistRegistrationForm.numberofsongs;
const genre = document.artistRegistrationForm.genre;
const uploadPicture = document.artistRegistrationForm.uploadpicture;
const password = document.artistRegistrationForm.password;
const role = document.artistRegistrationForm.role;

const male = document.getElementById("smale");
const female = document.getElementById("sfemale");

const firstNameError = (message)=>{
const fname__error = document.getElementById('first__name__error')
fname__error.innerText = message;
};
const lastNameError = (message)=>{
const lname__error = document.getElementById('last__name__error')
lname__error.innerText = message;
};
const stageNameError = (message)=>{
const sname__error = document.getElementById('stage__name__error')
sname__error.innerText = message;
};
const artistIdError = (message)=>{
const artist__id__error = document.getElementById('artist__id__error')
artist__id__error.innerText = message;
};
const telephoneContactError = (message)=>{
const telephone__contact__error = document.getElementById('telephone__contact__error')
telephone__contact__error.innerText = message;
};
const artistEmailError = (message)=>{
const artist__email__error = document.getElementById('artist__email__error')
artist__email__error.innerText = message;
};
const artistDobError = (message)=>{
const artist__dob__error = document.getElementById('artist__dob__error')
artist__dob__error.innerText = message;
};
const districtBasedInError = (message)=>{
const district__based__in__error = document.getElementById('district__based__in__error')
district__based__in__error.innerText = message;
};
const nationalIdNumberError = (message)=>{
const national__id__number__error = document.getElementById('national__id__number__error')
national__id__number__error.innerText = message;
};
const dateOfStartError = (message)=>{
const date__of__start__error = document.getElementById('date__of__start__error')
date__of__start__error.innerText = message;
};
const artistLocationError = (message)=>{
const artistLocation__error = document.getElementById('artistLocation__error')
artistLocation__error.innerText = message;
};
const numberOfAlbumsError = (message)=>{
const number__of__albums__error = document.getElementById('number__of__albums__error')
number__of__albums__error.innerText = message;
};
const numberOfSongsError = (message)=>{
const number__of__songs__error = document.getElementById('number__of__songs__error')
number__of__songs__error.innerText = message;
};
const genreError = (message)=>{
const genre__error = document.getElementById('genre__error')
genre__error.innerText = message;
};
const uploadPictureError = (message)=>{
const upload__picture__error = document.getElementById('upload__picture__error')
upload__picture__error.innerText = message;
};
const passwordError = (message)=>{
const password__error = document.getElementById('password__error')
password__error.innerText = message;
};

const roleError = (message)=>{
const role__error = document.getElementById('role__error')
role__error.innerText = message;
};
const genderError = (message)=>{
const gender__error = document.getElementById('gender__error')
gender__error.innerText = message;};


//event listeners
firstName.addEventListener('blur',firstName__verify,true);
lastName.addEventListener('blur', lastName__verify, true);
stageName.addEventListener('blur', stageName__verify, true);
artistId.addEventListener('blur', artistId__verify, true);
telephoneContact.addEventListener('blur', telephoneContact__verify, true);
artistEmail.addEventListener('blur', artistEmail__verify, true);
artistDob.addEventListener('blur', artistDob__verify, true);
districtBasedIn.addEventListener('blur', districtBasedIn__verify, true);
nationalIdNumber.addEventListener('blur', nationalIdNumber__verify, true);
dateOfStart.addEventListener('blur', dateOfStart__verify, true);
artistLocation.addEventListener('blur', artistLocation__verify, true);
numberOfAlbums.addEventListener('blur', numberOfAlbums__verify, true);
numberOfSongs.addEventListener('blur', numberOfSongs__verify, true);
genre.addEventListener('blur', genre__verify, true);
uploadPicture.addEventListener('blur', uploadPicture__verify, true);
password.addEventListener('blur', password__verify, true);
role.addEventListener('blur', role__verify, true);




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
if(firstName == ''){
  firstName.style.border = '2px solid red';
  firstNameError('Please insert a first name!');
  firstName.focus();
  return false;
}
if(lastName ==''){
  lastName.style.border = '2px solid red';
  lastNameError('Please insert a last name!')
  lastName.focus()
  return false;

}
if(stageName==''){
  stageName.style.border = '2px solid red';
  stageNameError('Please insert a stage name!')
  stageName.focus()
  return false;

}
if(artistId==''){
  artistId.style.border = '2px solid red';
  artistIdError('Please insert artist ID!')
  artistId.focus()
  return false;

}if(telephoneContact==''){
  telephoneContact.style.border = '2px solid red';
  telephoneContactError('Please insert a contact!')
  telephoneContact.focus()
  return false;

}if(artistEmail==''){
  artistEmail.style.border = '2px solid red';
  artistEmailError('Please insert an email!')
  artistEmail.focus()
  return false;

}if(artistDob==''){
  artistDob.style.border = '2px solid red';
  artistDobError('Please insert a date of birth!')
  artistDob.focus()
  return false;

}if(districtBasedIn==''){
  districtBasedIn.style.border = '2px solid red';
  districtBasedInError('Please insert a district!')
  districtBasedIn.focus()
  return false;

}if(nationalIdNumber==''){
  nationalIdNumber.style.border = '2px solid red';
  nationalIdNumberError('Please insert a NIN!')
  nationalIdNumber.focus()
  return false;

}if(dateOfStart==''){
  dateOfStart.style.border = '2px solid red';
  dateOfStartError('Please insert a date of start!')
  dateOfStart.focus()
  return false;

}if(artistLocation==''){
  artistLocation.style.border = '2px solid red';
  artistLocationError('Please insert a artistLocation!')
  artistLocation.focus()
  return false;

}if(numberOfAlbums==''){
  numberOfAlbums.style.border = '2px solid red';
  numberOfAlbumsError('Please insert your number of albums!')
  numberOfAlbums.focus()
  return false;

}if(numberOfSongs==''){
  numberOfSongs.style.border = '2px solid red';
  numberOfSongsError('Please insert number of songs!')
  numberOfSongs.focus()
  return false;

}if(genre==''){
  genre.style.border = '2px solid red';
  genreError('Please insert a genre!')
  genre.focus()
  return false;

}if(uploadPicture==''){
  uploadPicture.style.border = '2px solid red';
  uploadPictureError('Please insert a profile picture!')
  uploadPicture.focus()
  return false;

}if(password==''){
  password.style.border = '2px solid red';
  passwordError('Please insert a password!')
  password.focus()
  return false;

}
if(role==''){
  role.style.border = '2px solid red';
  roleError('Please insert a role!')
 role.focus()
  return false;

};
if (gender ==''){
  gender.style.border = '2px solid red';
  genderError('Please input gender!')
  gender.focus()
  return false;
}
};
firstName__verify =()=>{
  if(!firstName.value.match(capitalize) && firstName.value<3 && !firstName.value.match(noNumber) && !firstName.value.match(alphaNumeric) && firstName !== '' )
  {
    firstName.style.border = '1px solid green';
    firstNameError('')
    return true;
}
else{
    firstName.style.border = '2px solid red';
    firstNameError('Customer Names should be letters only between 2 and 50 characters !')
    firstName.focus();
    return false;
}
}
lastName__verify =()=>{
  if(!lastName.value.match(capitalize) && lastName.value<3 && !lastName.value.match(noNumber) && !lastName.value.match(alphaNumeric) && lastName !== '' ){
    lastName.style.border = '1px solid green';
    lastNameError('')
    return true;
}
  }

const artistform = document.getElementById("form-id");
artistform.addEventListener("submit", validate);
artistform.addEventListener("submit", (e) => {
  e.preventDefault();
});
