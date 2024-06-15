//your JS code here. If required.
//your JS code here. If required.
let age=document.getElementById("age");
let name=document.getElementById("name");
let btn=document.getElementById("btn");
btn.addEventListener("click",(e)=>{
	e.preventDefault();
	let Vote=new Promise((resolve,reject)=>{
        if(age.value>=18){
            setTimeout(()=>{resolve("Welcome, "+name.value+ ". You can vote.")},4000)
        }
        else{
            setTimeout(()=>{reject("Oh sorry "+name.value+ ". You aren't old enough.")},4000)
        }
    })
    return Vote.then((value)=>{
        alert(value)
    }).catch((value)=>{
        alert(value)
    })
	
})



