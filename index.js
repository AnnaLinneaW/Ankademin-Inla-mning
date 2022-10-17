let darkBtn=document.querySelector("#dark");
let answerBtn=document.querySelector("#myAnswer")
//let myValue=document.querySelector("[name='quiz']:checked").value;
let radios = document.querySelectorAll('input[type="radio"]');
let infoWrapper=document.querySelector("#infoWrapper")


clicks=0;
darkBtn.addEventListener("click", ()=>{
    if (clicks===0){
        darkBtn.innerText="Lightmode";
        document.body.style.backgroundColor= "black";
        document.body.style.color= "white";
        clicks++;
    }
    else if (clicks===1){
        darkBtn.innerText="Darkmode"
        document.body.style.backgroundColor= "white";
        document.body.style.color= "black";
        clicks--;
    }
});

answerBtn.addEventListener("click",()=>{
    for (let radio of radios) {
		if (radio.checked) {
			infoWrapper.append(radio.value);
		}
	}
})
