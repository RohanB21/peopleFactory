const app = {
personForm: document.querySelector('form'),
}

const renderColor = (hairColor) => {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = hairColor
  colorDiv.style.height = '50px'
  colorDiv.style.width = '100px'
  return colorDiv
}
const renderList = (person) => {
  const list = document.createElement('ul')
  Object.keys(person).map((key) => {
    const li = renderItem(key, person[key])
    list.appendChild(li)
  })
  for (let i=0; i<Object.keys(person).length; i++) {
  let li = renderItem(Object.keys(person)[i], person[Object.keys(person)[i]])
  list.appendChild(li)
  } 
  return list
}
const renderItem = (name, value) => {
  const item = document.createElement('li')
  item.textContent = `${name}: ${value}`
  return item
}


const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const person = {
   hairColor = renderColor(form.hairColor.value).outerHTML,
   personName = form.personName.value,
   age = form.age.value,
   birthplace = form.birthplace.value,

  }
   const colorDiv = renderColor(hairColor)

  const personName = form.personName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthplace.value

 

  const list = renderList(form.elements)
  
  
  details.appendChild(list)

  const overall = document.createElement('ul')
  const nameVar = document.createElement('li')
  const hairVar = document.createElement('li')
  const ageVar = document.createElement('li')
  const birthVar = document.createElement('li')

  nameVar.textContent = 'Name: ' + personName
  ageVar.textContent = 'Age: ' + age
  birthVar.textContent = 'Birth Place: ' + birthplace 
  hairVar.textContent = 'Hair Color: '
  
  hairVar.appendChild(colorDiv)
  overall.appendChild(nameVar)
  overall.appendChild(hairVar)
  overall.appendChild(ageVar)
  overall.appendChild(birthVar)
  details.appendChild(overall)

  
  
  //details.innerHTML = `
    //<ul>
      //<li>Name: ${personName}</li>
      //<li>Hair Color: ${colorDiv.outerHTML}</li>
      //<li>Age: ${age}</li>
      //<li>Birthplace: ${birthplace}</li>
    //</ul>
  //`

}

personForm.addEventListener('submit', handleSubmit)