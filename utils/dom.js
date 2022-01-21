import { renderLi } from './templates.js'
import LIST from '../TodoList.js'

const form = document.querySelector('#todoForm')
const todoList = document.querySelector('#todoList')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let value = e.target[0].value
    if (value !== '') {
        LIST.addNewItem(value)
    } 
})

function clearList() {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild)
    }
}

function manageList() {
    const LIs = document.querySelectorAll('.item-container__list__item')

    LIs.forEach(li => li.addEventListener('click', (e) => {
        if (e.target.className.includes('checkbox')) {
            e.target.classList.toggle('checkbox--done')
            LIST.toggleItemStatus(+li.id)
        }

        if (e.target.className.includes('trash-icon')) {
            LIST.deleteItem(+li.id)
        }

        if(e.target.tagName === 'LI') {
           showItemDetails(li.id)
        }
       
    }))

}

function showItemDetails(id) {
    const details = document.querySelectorAll('.details')
    details.forEach(elem => { 
        if (elem.id === id) {
            elem.hidden = !elem.hidden
        }
    })
}

function renderList(items) {
    clearList()
    items.forEach(item => {
        todoList.insertAdjacentHTML('beforeend', renderLi(item))
    })
    manageList()    
}

export { renderList }