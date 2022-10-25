let darkBtn=document.querySelector("#dark");
let answerBtn=document.querySelector("#myAnswer")
let radios = document.querySelectorAll('input[type="radio"]');
let infoWrapper=document.querySelector("#infoWrapper")


clicks=0;
darkBtn.addEventListener("click", ()=>{
    if (clicks===0){
        darkBtn.innerText="Lightmode";
        document.body.style.backgroundImage= "url('darkwingduck.jpeg')";
        document.body.style.backgroundRepeat="no-repeat";
        document.body.style.backgroundSize="120%";
        document.body.style.color= "red";
        clicks++;
    }
    else if (clicks===1){
        darkBtn.innerText="Darkmode"
        document.body.style.backgroundImage=""
        document.body.style.backgroundColor= "white";
        document.body.style.color= "black";
        clicks--;
    }
});

answerBtn.addEventListener("click",()=>{
    infoWrapper.innerHTML=""
    let points=[];
    let sum = 0;
    for (let radio of radios) {
        if (radio.checked) {
            points.push(+radio.value)
		};
	};
    points.forEach(i => {
        sum += i
    });
    if (points.length<10){
        alert("Svara på alla frågor")
    }
    else if
    (sum <5){infoWrapper.style.color= "red";}
    else if 
    (sum>5&& sum<7.5){infoWrapper.style.color="orange"}
        else
        {infoWrapper.style.color="green"};
    infoWrapper.append("Du fick: "+ sum+" poäng!");
    console.log(points);
});


	
	


	
	






    
    