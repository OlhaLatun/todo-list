import StorageApi from './utils/StorageApi.js'
import { renderList } from './utils/dom.js'
const storage = new StorageApi()

class TodoList {
   
    getItems(key) {
        return JSON.parse(storage.getItem(key))
    }
    
    setItems(key, items) {
        storage.setItem(key, items)
    }  
    
    
    deleteItem(listKey, id) {
        let filtered = this.getItems(listKey).filter(item => item.id !== id)
        this.updateList('todos', filtered)
    }
       
    toggleItemStatus(listKey, id) {
        let updated = this.getItems(listKey)
                          .map(item => item.id === id ? { ...item, completed: !item.completed } : item)
     
        this.updateList('todos', updated)
    }
    
    addNewItem(value) {     
        let item = {
            title: value,
            userId: 1,
            completed: false,
            id: Math.floor(Math.random() * 100 + 100)
        }
    
        let updated = [ ...this.getItems('todos'), item]
        this.updateList('todos', updated)
    }

    updateList(listKey, items) {
        this.setItems(listKey, items)
        renderList(items)
    }
}

const LIST = new TodoList()

export default LIST 