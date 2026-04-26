let generatePassword=document.getElementById("btn");
console.log(generatePassword);

let addPassword1=document.getElementById("box1");

let addPassword2=document.getElementById("box2");

let lengthInput=document.getElementById("length");

let heading=document.getElementsByTagName("h1");

let symbolToggle = document.getElementById("symbols-toggle");

let numberToggle=document.getElementById("number-toggle");
let letters = [
    'A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];
let numbers=[
    '0','1','2','3','4','5','6','7','8','9'
];

let symbols = ['*','&','$','#','!','?','<','>','+'];
function start_generate(){
    addPassword1.textContent=generate_password();
    addPassword2.textContent=generate_password();
}
function generate_password(){
    let password="";
    let length = lengthInput.value;
    let characters = [...letters];
    if(symbolToggle.checked){
        characters=characters.concat(symbols);
    }
    if(numberToggle.checked){
        characters=characters.concat(numbers);
    }
    for(let i=0;i<length;i++){
        let x=Math.floor(Math.random()*characters.length);
        password +=characters[x];
    }
    return password;
}
generatePassword.addEventListener("click", () => {
    start_generate();
    changeHeadingColor();
});


function changeHeadingColor(){
    heading[1].style.color="#ECFDF5";
}

addPassword1.addEventListener("click", () => {
    copyText(addPassword1);
});

addPassword2.addEventListener("click",()=>{
    copyText(addPassword2);
})
function copyText(element){
    let text=element.textContent;
    navigator.clipboard.writeText(text);
    alert("Copied!");
}
