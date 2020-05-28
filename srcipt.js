let password = "gofer"; //password
password = password.toUpperCase();
var password2 = ""; //dashed password
const letter = document.getElementsByClassName("letters_item");
const alfabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ";
const container = document.querySelector(".letters");

function wypisz_haslo() {
  for (let i = 0; i < password.length; i++) {
    //change password to dashed pasword
    if (password.charAt(i) == " ") password2 += " ";
    else password2 += "-";
  }
  document.querySelector(".password").innerHTML = password2;
  console.log(password2);
}

window.onload = divs;

function divs() {
  wypisz_haslo();

  //create 35 letter div
  for (let i = 0; i < 35; i++) {
    const letter = document.createElement("div");
    letter.setAttribute("class", "letters_item");
    letter.innerHTML = alfabet.charAt(i);
    container.appendChild(letter);
  }
  for (let i=0; i < 35; i++) {
    letter[i].addEventListener('click', sprawdz, false);
  }
}


function sprawdz(){
  for (let i = 0; i < password.length; i++) {
    if (password.charAt(i) == this.innerHTML) {
    password2 = password2.replace(password2.charAt(i), this.innerHTML);
    console.log(password2);
    this.classList.add("correct");
    this.removeEventListener('click', sprawdz);
    document.querySelector(".password").innerHTML = password2;
      if(password2==password){
        console.log("WYGRAŁEŚ, BRAWO!");
      }
  } 
  else if(password.charAt(i) != this.innerHTML){
    this.classList.add("incorrect");
    this.removeEventListener('click', sprawdz);
  }
}
}