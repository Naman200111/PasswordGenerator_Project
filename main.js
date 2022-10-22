const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const Letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const Special_Characters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let gen_btn = document.querySelector(".button1")
let pass_btn1 = document.querySelector("#button1")
let pass_btn2 = document.querySelector("#button2")

pass_btn1.addEventListener("click", function(){
    document.execCommand("copy")
})
pass_btn2.addEventListener("click", function(){
    document.execCommand("copy")
})

gen_btn.addEventListener("click", function(){
    let pass_len = document.querySelector(".select").value;
    if(pass_len == 0) 
        return
    
    let num_ch = document.querySelector(".number").checked;
    let lett_ch = document.querySelector(".letters").checked;
    let char_ch = document.querySelector(".special_char").checked;
        
    let characters = [];
    if(num_ch)
        characters = characters.concat(numbers)
    if(lett_ch)
        characters = characters.concat(Letters)
    if(char_ch)
        characters = characters.concat(Special_Characters)
    const len = characters.length
    if(len === 0)
        return

    let password1 = "";
    let password2 = ""; 

    for(let i=0; i<pass_len; i++) {
        password1 += characters[Math.floor(Math.random() * len)]
        password2 += characters[Math.floor(Math.random() * len)]
    }
    pass_btn1.innerText = password1
    pass_btn2.innerText = password2
})

let reset = document.getElementById("reset");
reset.addEventListener("click", function() {
    pass_btn1.innerText = "Password1"
    pass_btn2.innerText = "Password2"
    document.querySelector(".number").checked = false;
    document.querySelector(".letters").checked = false;
    document.querySelector(".special_char").checked = false;
    document.querySelector(".select").value = 0
})