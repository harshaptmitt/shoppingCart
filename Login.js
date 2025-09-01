let form = document.querySelector('form')
console.log(form)

form.onsubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted")

    //!Getting user Data from the user
    let email = document.getElementsByTagName('input')[0].value
    let password = document.getElementsByTagName('input')[1].value
    
    console.log(email)
    console.log(password)

    //? Getting stored data from local storage
    let storedData=localStorage.getItem('userInfo')
    console.log(storedData)

    let regularObj=JSON.parse(storedData)
    console.log(regularObj)

    if(email===regularObj.email && password===regularObj.password){
        alert("Login Successfull")
        window.location.href="./Home.html"
    }
    else{
        alert("Wrong credentials")
    }
}