let generatePassword=document.getElementById("btn");
console.log(generatePassword);

let addPassword1=document.getElementById("box1");

let addPassword2=document.getElementById("box2");

let heading=document.getElementsByTagName("h1");
console.log(heading)

const characters =[
    'A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','*','&','$','#','!','?','<','>','+'
]
function start_generate(){
    addPassword1.textContent=generate_password();
    addPassword2.textContent=generate_password();
}
function generate_password(){
    let password="";
    for(let i=0;i<15;i++){
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
