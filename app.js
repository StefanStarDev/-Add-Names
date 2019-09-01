function addItem() {
    let input = document.querySelector("input")
    let li = document.createElement('li')
    li.textContent = input.value
    let ul = document.getElementById("items")
    ul.appendChild(li)

    let liElements = document.getElementsByTagName("li")

    for (const li of liElements) {
        let deleteLink = document.createElement("span")
        deleteLink.textContent = "[Delete]"
        li.appendChild(deleteLink) 
    }
    let deleteLink = document.createElement("span")
    deleteLink.addEventListener("click", () => {
        deleteLink.ParentNode.removeChild(deleteLink)
    })
}