import StorageApi from './todoList/assets/Utils/StorageApi.js'
import LIST from './TodoList.js'
import { renderList } from './todoList/assets/Utils/dom.js'

const storage = new StorageApi()
const URL = 'https://jsonplaceholder.typicode.com/todos'

window.addEventListener('load', () => {
    if (!storage.getItem('todos').length) {
        renderList(storage.getItem('todos'))
    } else {
        fetch(URL)
        .then(res => res.json())
        .then(todos =>  {
            let filtered = todos.filter(item => item.userId === 1)
            LIST.setItems(filtered)
            renderList(filtered)
        })
        .catch(err => console.log(err))
    }   
})




