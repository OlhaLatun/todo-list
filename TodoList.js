import StorageApi from './utils/StorageApi.js'
import { renderList } from './utils/dom.js'
const storage = new StorageApi()

class TodoList {
   
    getItems() {
        return JSON.parse(storage.getItem('todos'))
    }
    
    setItems(items) {
        storage.setItem('todos', items)
    }  
    
    
    deleteItem(id) {
        let items = this.getItems()
        let filtered = items.filter(item => item.id !== id)
     
        this.updateList(filtered)
    }
       
    toggleItemStatus(id) {
        let items = this.getItems()
        let updated = items.map(item => item.id === id ? { ...item, completed: !item.completed } : item)
     
        this.updateList(updated)
    }
    
    addNewItem(value) {     
        let item = {
            title: value,
            userId: 1,
            completed: false,
            id: Math.floor(Math.random() * 100 + 100)
        }
    
        let items = this.getItems()
        let updated = [ ...items, item]
    
        this.updateList(updated)
    }

    updateList(items) {
        this.setItems(items)
        renderList(items)
    }
}

const LIST = new TodoList()

export default LIST 