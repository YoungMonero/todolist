const titleValue = document.getElementById('titlelist')
const descriptValue = document.getElementById('Detaillist')
const addButton = document.getElementById('addlist')
const container = document.getElementById('divlist')
// const returnHead = document.getElementById('listheading')
// const paragraph = document.getElementById('listadded')

addButton.addEventListener('click', () => {
const titlelist = titleValue.value.trim()
const detail = descriptValue.value.trim()
if (titlelist === '' && detail === '') {
    alert ('Please feel both the task and discription')
    return
}

let heading = document.createElement('li')
heading.className = 'heading'
heading.textContent = titlelist
heading.style.fontSize = '1.1rem'
heading.style.fontWeight = '700'
heading.style.color = '#1ab2c0'

let paragraph = document.createElement('p')
paragraph.className = 'pharagraph'
paragraph.textContent = detail


container.append(heading)
container.append(paragraph)

titleValue.value = ''
descriptValue.value = ''
})