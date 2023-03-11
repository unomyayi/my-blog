const form = document.querySelector('form');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

form.addEventListener('submit', function(event) {
  if (password.value != confirm_password.value) {
    event.preventDefault();
    alert('Пароли не совпадают!');
  }
});