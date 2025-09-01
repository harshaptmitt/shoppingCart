let form=document.querySelector('form')
console.log(form)

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log("form submitted")
    let inputTag=document.querySelectorAll('input')
    console.log(inputTag)
    let userData={}
    inputTag.forEach((item)=>{
        // console.log(item.name+":"+item.value)
        if(item.type==="radio"){
            if(item.checked){
                userData[item.name]=item.value
            }
    
        }
        else{
                userData[item.name]=item.value
            }
        
    })
    // console.log(userData)
    
    // let jsonObj=JSON.stringify(userData)
    // console.log(jsonObj)
    // localStorage.setItem("userInfo",jsonObj)

    localStorage.setItem("userInfo",JSON.stringify(userData))
    alert("User Register Successful")
    window.location.href="./Login.html"
})