const submitbutton = document.getElementById('submit')
const firstinput = document.getElementById('space')
const tasklist = document.getElementById('list')

submitbutton.addEventListener('click', () => {
  const listitem = document.createElement('li')
  listitem.innerHTML = firstinput.value
  tasklist.append(listitem)
  firstinput.value = ''
  listitem.addEventListener('click', () => {
    listitem.style.textDecoration = 'line-through'
  })
})
