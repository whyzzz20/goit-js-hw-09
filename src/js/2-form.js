//Посилання на форму
const formRef = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

//Значення інпутів з Locale Storage, якщо немає - пусті рядки.
const userInputs = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

formRef.elements.email.value = userInputs.email || '';
formRef.elements.message.value = userInputs.message || '';
//Прослуховування форми і зберігання в Locale Storage
formRef.addEventListener('input', formChange);

function formChange(e) {
  e.preventDefault();

  userInputs[e.target.name] = e.target.value.trim();

  localStorage.setItem(LOCAL_KEY, JSON.stringify(userInputs));
}

//Прослуховування кнопки і очищення Locale Storage
formRef.addEventListener('submit', formSubmit);

function formSubmit(e) {
  e.preventDefault();

  if (
    formRef.elements.email.value === '' ||
    formRef.elements.message.value === ''
  ) {
    alert('Заповність всі поля');
    return;
  }

  console.log(userInputs);

  formRef.elements.email.value = '';
  formRef.elements.message.value = '';

  localStorage.removeItem(LOCAL_KEY);
}
