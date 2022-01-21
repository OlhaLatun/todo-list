export default class StorageApi {

    getItem(key) {
        return localStorage.getItem(key)
    }

    setItem(key, items) {
        return localStorage.setItem(key, JSON.stringify(items))
    }
}