var container = document.querySelector("div")
var appendButton = document.getElementById("AppendButton")
var saveButton = document.getElementById("SaveButton")
appendButton.addEventListener("click", createItem)
saveButton.addEventListener("click", save)

function save() {
    var string = "{"
    for (let i = 1; i < container.childNodes.length; i++) {
        string += container.childNodes[i].childNodes[0].value + " : " + container.childNodes[i].childNodes[1].value + ', '
    }
    string += "}"
    document.body.append(string)

}

function createItem() {
    var item = document.createElement("div")
    item.style.display = "flex"
    container.append(item)

    var nameInputField = document.createElement("input")
    var numberInputField = document.createElement("input")

    var upButton = document.createElement("button")
    upButton.innerHTML = "↑"
    upButtonInitialize(upButton)

    var downButton = document.createElement("button")
    downButton.innerHTML = "↓"
    downButtonInitialize(downButton)
    var deleteButton = document.createElement("button")
    deleteButton.innerHTML = "X"
    deleteButtonInitialize(deleteButton)

    item.append(nameInputField)
    item.append(numberInputField)
    item.append(upButton)
    item.append(downButton)
    item.append(deleteButton)
}

function upButtonInitialize(upButton) {
    upButton.addEventListener("click", upItem)

}
function downButtonInitialize(downButton) {
    downButton.addEventListener("click", downItem)

}
function deleteButtonInitialize(deletButton) {
    deletButton.addEventListener("click", deleteItem)

}
function upItem() {
    if (this.parentNode != container.childNodes[1]) {
        container.insertBefore(this.parentNode, this.parentNode.previousSibling)
    }
}
function downItem() {
    if (this.parentNode != container.lastChild) {
        container.insertBefore(this.parentNode.nextSibling, this.parentNode)
    }
}

function deleteItem() {
    this.parentNode.remove()
}