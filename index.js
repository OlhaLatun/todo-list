import LIST from './TodoList.js'
import { renderList } from './utils/dom.js'

const URL = 'https://jsonplaceholder.typicode.com/todos'

window.addEventListener('load', () => {
    if (LIST.getItems('todos')) {
        renderList(LIST.getItems('todos'))
    } else {
        fetch(URL)
        .then(res => res.json())
        .then(todos =>  {
            let filtered = todos.filter(item => item.userId === 1)
            LIST.setItems('todos', filtered)
            renderList(filtered)
        })
        .catch(err => console.log(err))
    }   
})




