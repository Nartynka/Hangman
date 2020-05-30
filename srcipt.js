let password = "gofer"; //password
password = password.toUpperCase();
let password2 = ""; //dashed password
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
  // for (let i=0; i < 35; i++) {
  //   letter[i].addEventListener('click', sprawdz, false);
  // }
  const letters = document.querySelectorAll(".letters_item");
  letters.forEach(letters => letters.addEventListener('click', sprawdz, false));
}
let count = 0;
let countn = 0;
let tab = [...password2];
function sprawdz(){
  // const tab2 = [...password];
  //console.log(tab);
  for (let i = 0; i < password.length; i++) {
    if (password.charAt(i) == this.innerHTML) {
      count++;
      tab.splice(i, 0, this.innerHTML);
      this.classList.add("correct");
      this.removeEventListener('click', sprawdz);
      document.querySelector(".password").innerHTML = tab.join('');
      console.log(tab);
      if(count == password.length) end(1);
    } 
  }
  if(!this.classList.contains("correct")) {
    this.classList.add("incorrect");
    this.removeEventListener('click', sprawdz);
    countn++;
    if(countn == 9) end(0);
  }
  console.log("incorrect: " + countn);
  console.log("correct: "+count);
}
const l = document.querySelector(".end");
const lp = document.querySelector(".end_p");
function end(wl){
  l.setAttribute("display", "block");
  if(wl == 1){
    console.log("WYGRAŁEŚ, BRAWO!");
    lp.innerHTML = "Wygrałeś, gratki!";
  }
  else {
    console.log("Przegrałeś, Spróbuj ponownie");
    lp.innerHTML = "Przykro mi, przegrałeś";
  }
}