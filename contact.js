var userName = document.getElementsByName("userName")[0]
var email = document.getElementsByName("email")[0]
var password = document.getElementsByName("password")[0]
var errorName = document.getElementById("errorName")


userName.addEventListener("input", function (e) {

    if (e.target.value.length <= 3) {
        userName.style.border = "3px solid red"
        userName.style.borderRadius = "5px"

        errorName.innerHTML = "enter name greater than 3 character"
        errorName.style.color = "red"
        errorName.style.display = "block"
    } else {
        errorName.style.display = "none"
        userName.style.border = "3px solid green"
        userName.style.borderRadius = "5px"


    }
})
email.addEventListener("input", function (e) {
    if (e.target.value.includes(".com") == true && e.target.value.includes("@") == true) {
        errorEmail.style.display = "none"
        email.style.border = "3px solid green"
        userName.style.borderRadius = "5px"
        console.log("wrong")
    } else {
        email.style.border = "3px solid red"
        userName.style.borderRadius = "5px"

        errorEmail.innerHTML = "please enter email include @ &.com"
        errorEmail.style.color = "red"
        errorEmail.style.display = "block"
        console.log("right")

    }

})
password.addEventListener("input", function (e) {
    if (e.target.value.length <= 3) {
        password.style.border = "3px solid red"
        password.style.borderRadius = "5px"

        errorPassword.innerHTML = "enter name greater than 3 character"
        errorPassword.style.color = "red"
        errorPassword.style.display = "block"
    } else {
        errorPassword.style.display = "none"
        password.style.border = "3px solid green"
        password.style.borderRadius = "5px"
    }

})


// ======================= gender


// ====================================== 

var submit = document.getElementById('submit')
var errorGender = document.getElementById('errorGender')

submit.addEventListener("click", function (e) {
   
    if (userName.value == "") {
        e.preventDefault()
        userName.style.border = "3px solid red"
        userName.style.borderRadius = "5px"

        errorName.innerHTML = "enter name greater than 3 character"
        errorName.style.color = "red"
        errorName.style.display = "block"
    }
    if (email.value == "") {
        e.preventDefault()
        email.style.border = "3px solid red"
        userName.style.borderRadius = "5px"

        errorEmail.innerHTML = "please enter email include @ &.com"
        errorEmail.style.color = "red"
        errorEmail.style.display = "block"
        console.log("right")
    }
        

})

// ==========================================================================================================

