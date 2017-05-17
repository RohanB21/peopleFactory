const personForm = document.querySelector('form')

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')
  const personName = form.personName.value
  const overall = document.createElement('ul')
  
  const nameVar = document.createElement('li')
  nameVar.textContent = personName

  overall.appendChild(nameVar)
  details.appendChild(overall)
 
  form.reset()
}
personForm.addEventListener('submit', handleSubmit)