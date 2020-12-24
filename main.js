function checkPassword(){
    input = document.getElementById("input")

    if (input.value == "kiki4") {
        window.location.href = "./success.html"
    } else {
        newEl = document.createElement("div")
        newEl.innerHTML = '"' + input.value + '" was not the password! Try again!'

        theZone = document.getElementById("bigzone")
        if (theZone.childElementCount == 1) {
            theZone.append(newEl)
        }
        else {
            inputZone = document.getElementById("inputzone")
            theZone.insertBefore(newEl, inputZone.nextElementSibling)
        }
    }
}