let darkBtn=document.querySelector("#dark");
let answerBtn=document.querySelector("#myAnswer")
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
    infoWrapper.innerHTML=""
    for (let radio of radios) {
		if (radio.checked) {
            let points=[];
            points.push(+radio.value);
            let score=points.flat(1);
            let sum = 0;
            for (let i=0; i< score.length; i++){
                sum += +score[i];
            }; 
            infoWrapper.append(score);
            console.log(score);
		};
	};
});

    
    