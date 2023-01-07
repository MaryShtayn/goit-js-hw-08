import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FORM_MESSAGE = 'feedback-form-state';

let formData = {
  email: JSON.parse(localStorage.getItem(FORM_MESSAGE))?.email || '',
  message: JSON.parse(localStorage.getItem(FORM_MESSAGE))?.message || '',
};

updateFormFields();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(FORM_MESSAGE, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();

  const savedData = localStorage.getItem(FORM_MESSAGE);
  console.log(JSON.parse(savedData));

  localStorage.removeItem(FORM_MESSAGE);

  formData = {
    email: '',
    message: '',
  };
}

function updateFormFields() {
  const savedData = localStorage.getItem(FORM_MESSAGE);
  const savedDataParsed = JSON.parse(savedData);

  if (savedData) {
    form.elements.email.value = savedDataParsed.email;
    form.elements.message.value = savedDataParsed.message;
  }
}
