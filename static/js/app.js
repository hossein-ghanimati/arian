let $ = document
let modal = $.querySelector('.modal')
let todoInput = $.querySelector('#todo_input')

let todoContainersBox =  $.querySelectorAll('.status')
let [noStatusContainer, notStartedContainer, inprogressContainer, completedContainer] = todoContainersBox;

let todosList = getLocal('todosList') ?? []
uppdateDom(todosList)

let todoData;

function getLocal(key) {
    return JSON.parse(localStorage.getItem(key));
}
function setLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function showModal() {
    modal.style.top = '50%'
    todoInput.value = ''
    todoInput.focus();
}

function hideModal(){
    modal.style.top = '-50%'
}


function submit() {

    todoData = {
        
        value : todoInput.value,
        status : 'no_status'
    }

    todosList.push(todoData)
    setLocal('todosList', todosList)

    uppdateDom(todosList)
    hideModal()
}


function generateElem(data, id) {
    
    let elem = $.createElement('p')
    let value = $.createElement('span')
    value.innerText = data.value
    let removeBtn = document.createElement('span')
    removeBtn.innerText = 'x'
    removeBtn.addEventListener('click', e => {
        let itemValue = e.target.parentElement.children[0].innerText
        
        let itemIndex = todosList.findIndex(item => {
            return item.value == itemValue
        })
        todosList.splice(itemIndex, 1)
        setLocal('todosList', todosList)
        e.target.parentElement.remove();
        
    })
    elem.append(value, removeBtn)
    elem.draggable = true
    elem.id = id

    elem.addEventListener('dragstart', event => {
        event.dataTransfer.setData('dataID', event.target.id)
        console.log((event.target.id));
    })

    return elem
}


function uppdateDom(list) {
    todoContainersBox.forEach(container => {
        container.innerHTML = ''
    })
    let idCounter = 0;
    list.forEach(item => {
        idCounter++
        let element = generateElem(item, idCounter)
        
        switch (item.status) {
            case 'no_status':
                element.style.backgroundColor = '#ccc'
                noStatusContainer.append(element)
                break;

            case 'not_started':
                element.style.backgroundColor = '#ff7171'
                notStartedContainer.appendChild(element)
                break;

            case 'inprogress':
                element.style.backgroundColor = '#90eafa'
                inprogressContainer.appendChild(element)
                break;

            case 'completed':
                element.style.backgroundColor = '#67f786'
                completedContainer.appendChild(element)
                break;

        
            default:
                break;
        }
    });
    

}





function dragOverHandler (event) {
    event.preventDefault()
}

function dropHandler(event) {
    let id = event.dataTransfer.getData('dataID')
    event.target.append($.getElementById(id))

    let itemValue = $.getElementById(id).children[0].innerText
    let itemIndex = todosList.findIndex(item => {
        
        return item.value.trim() == itemValue.trim()
    })
    

    todosList[itemIndex].status = event.target.id
    setLocal('todosList', todosList)
    uppdateDom(todosList)
}


$.body.addEventListener('keydown', e => {
    e.stopPropagation()
      
    switch (e.keyCode) {
        


        case 27:
            hideModal()
            break;


        case 13:
            submit()
            break;


        


    
        default:
            break;
    }
})