const scriptURL = 'https://script.google.com/macros/s/AKfycbwWC0G3_qna886NuoBDXVKSyUEQ2qqxk9AYXyufuvtbfTEk3xZ22xeVxSs9tHN4Oszc/exec'
  const form = document.forms['yuliusrestu-contact-form']
  const btnKirim = document.querySelector('.btn-kirim')
  const btnLoading = document.querySelector('.btn-loading')
  const myAlert = document.querySelector('.my-alert')

  form.addEventListener('submit', e => {
    e.preventDefault()
    btnKirim.classList.toggle('d-none')
    btnLoading.classList.toggle('d-none')
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log('Success!', response)
        btnKirim.classList.toggle('d-none')
        btnLoading.classList.toggle('d-none')
        myAlert.classList.toggle('d-none')
      })
      .catch(error => console.error('Error!', error.message))
  })