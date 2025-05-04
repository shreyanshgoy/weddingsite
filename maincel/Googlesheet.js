const scriptURL = 'https://script.google.com/macros/s/AKfycbxGy0YO_plIleOem8LALmyOMtOCVhplM6Jlpv1ZFDlqp3Qk9byV3HAVdvm1Z-usIos_eQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})