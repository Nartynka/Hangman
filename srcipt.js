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
  console.log("wypisz haslo " + password2);
  //return password2;
}

window.onload = divs;
//console.log("global" + password2);

function divs() {
  //console.log("divs" + password2);
  //create 35 letter div
  wypisz_haslo();
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
  letters.forEach((letters) => letters.addEventListener("click", sprawdz, false));
}
let count = 0;
let countn = 0;
let tab = [...password2];
//console.log("global" + password2);
// console.log(password2);
// console.log(tab[5]);
function sprawdz() {
  // const tab2 = [...password];
  //console.log(tab);
  //console.log("sprawdz" + password2);
  for (let i = 0; i < password.length; i++) {
    if (password.charAt(i) == this.innerHTML) {
      count++;
      tab.splice(i, 0, this.innerHTML);
      this.classList.add("correct");
      this.removeEventListener("click", sprawdz);
      console.log(tab);
      //password2[i] = this.innerHTML;
      document.querySelector(".password").innerHTML = tab.join(""); //password2.join('');//tab.join("");
      console.log(password2);
      if (count == password.length) end(1);
    }
  }
  const img = document.querySelector(".hangman_img");
  if (!this.classList.contains("correct")) {
    this.classList.add("incorrect");
    this.removeEventListener("click", sprawdz);
    countn++;
    img.src = "img/s" + countn + ".jpg";
    if (countn == 9) end(0);
  }
  console.log("incorrect: " + countn);
  console.log("correct: " + count);
}
const loose = document.querySelector(".end");
const looseP = document.querySelector(".end_p");
const looseBtn = document.querySelector(".end_btn");
looseBtn.addEventListener("click", function() {
    location.reload();
  },
  false
);

function end(wl) {
  loose.style.display = "flex";
  if (wl == 1) {
    console.log("WYGRAŁEŚ, BRAWO!");
    looseP.innerHTML = "Wygrałeś, gratki!";
  } else {
    console.log("Przegrałeś, Spróbuj ponownie");
    looseP.innerHTML = "Przykro mi, przegrałeś";
  }
}