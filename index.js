import LIST from './TodoList.js'
import { renderList } from './utils/dom.js'

const URL = 'https://jsonplaceholder.typicode.com/todos'
const LIST_KEY = 'todos'

window.addEventListener('load', () => {
    if (LIST.getItems(LIST_KEY)) {
        renderList(LIST.getItems(LIST_KEY))
    } else {
        fetch(URL)
        .then(res => res.json())
        .then(todos =>  {
            let filtered = todos.filter(item => item.userId === 1)
            LIST.setItems(LIST_KEY, filtered)
            renderList(filtered)
        })
        .catch(err => console.log(err))
    }   
})




