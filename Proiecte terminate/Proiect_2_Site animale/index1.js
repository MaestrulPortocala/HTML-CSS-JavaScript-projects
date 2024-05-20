const btn1EL = document.querySelector(".btn1");
const btn2EL = document.querySelector(".btn2");
const btn3EL = document.querySelector(".btn3");
const btn4EL = document.querySelector(".btn4");
const audio1EL = document.createElement("audio");
const audio2EL = document.createElement("audio");
const audio3EL = document.createElement("audio");
const audio4EL = document.createElement("audio");
audio1EL.src="audio/bird.wav";
audio2EL.src="audio/cat.wav";
audio3EL.src="audio/cow.wav";
audio4EL.src="audio/dog.wav";
btn1EL.appendChild(audio1EL);
btn2EL.appendChild(audio2EL);
btn3EL.appendChild(audio3EL);
btn4EL.appendChild(audio4EL);
btn1EL.addEventListener("click", ()=>{
        audio1EL.play();
    }
)
btn2EL.addEventListener("click", ()=>{
    audio2EL.play();
}
)
btn3EL.addEventListener("click", ()=>{
    audio3EL.play();
}
)
btn4EL.addEventListener("click", ()=>{
    audio4EL.play();
}
)