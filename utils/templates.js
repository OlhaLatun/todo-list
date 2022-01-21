function renderLi(item) {
    let style = item.completed ? 'checkbox checkbox--done' : 'checkbox'
    return `
    <li id='${item.id}' class='item-container__list__item'>
    <img src='assets/checkbox.png' alt='checkbox' class='${style}'>
        ${item.title} 
        <img src='assets/bin.png' alt='trash-icon' class='trash-icon'>
        <div id=${item.id} class='details' hidden>
        <ul>
            ${Object.entries(item).map(elem => {
                return `<li> ${elem[0]}: ${elem[1]} </li>`
            }).join('') }
        </ul>
    </div>
    </li>`
}

export { renderLi } 