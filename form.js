const scriptURL = 'https://script.google.com/macros/s/AKfycbwWC0G3_qna886NuoBDXVKSyUEQ2qqxk9AYXyufuvtbfTEk3xZ22xeVxSs9tHN4Oszc/exec'
  const form = document.forms['yuliusrestu-contact-form']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })