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

let points=[];
let sum = 0;
answerBtn.addEventListener("click",()=>{
    infoWrapper.innerHTML=""
    for (let radio of radios) {
        if (radio.checked) {
            points.push(+radio.value)
           /*  for (let i=0; i< points.length; i++){
                sum += points[i]
            }; */
            points.forEach(i => {
                sum += i;
            });
		};
	};
    infoWrapper.append(sum);
    console.log(points);
});


	
	


	
	






    
    