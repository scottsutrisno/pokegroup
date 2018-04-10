let pokeAll =(scooter.all())

scottPoke(function(scooter) {

  console.log(scooter.all())
});


yorviPake(function(yorvin) {

  console.log(yorvin.all())
})





let healthVena = document.querySelector("#healthVenasaur");
let hpump = document.querySelector("#hpump");
let dpeck = document.querySelector("#dpeck");
let ibeam = document.querySelector("#ibeam");
let gknot = document.querySelector("#gknot");
let venaImage = document.querySelector("#venasaurImg");
let hpname = document.querySelector(".hpnumberTop");




let healthPiplup = document.querySelector("#healthPiplup");
let swave = document.querySelector("#swave");
let epower = document.querySelector("#epower");
let gdrain = document.querySelector("#gdrain");
let synth = document.querySelector("#synth");
let pipImage = document.querySelector("#piplupImg")

let healthPrinplup = document.querySelector("#healthPrinplup");
// let swave = document.querySelector("#swave");
// let epower = document.querySelector("#epower");
// let gdrain = document.querySelector("#gdrain");
// let synth = document.querySelector("#synth");





// let healthStar = document.querySelector("#healthStar");
// let moveFive = document.querySelector("#move9");
// let moveSix = document.querySelector("#move10");
// let moveSeven = document.querySelector("#move11");
// let moveEight = document.querySelector("#move12");
let starImage = document.querySelector("#starImg")
let prinImage = document.querySelector("#prinplupImg")
let venaMoves = document.querySelector(".moveContainerTop")
let starMoves = document.querySelector(".moveContainerTop2")
let healthArcanine = document.querySelector("#healthArcanine");
let healthStarmie = document.querySelector("#starmieHP");
let hpNum = document.querySelector(".hpnumberTop");
let hpNum2 = document.querySelector(".hpnumberTop2");
let hpNum3 = document.querySelector(".hpnumberTop3");



hpump.addEventListener("click", hydroP);
function hydroP() {

healthVena.value -= 60;
healthStarmie.value -= 60;
pipImage.classList.add("attack");

setTimeout(resetAnimation, 500);
      function resetAnimation () {
pipImage.classList.remove("attack");
}

if (healthVena.value == 0) {

  setTimeout(death, 1000);
        function death () {
  venaImage.style.opacity = "0";
  starImage.style.opacity = "1";
  // healthVena.style.opacity = "0";
  // healthStarmie.style.opacity = "1";
  hpNum.style.zIndex = "-1";
  hpNum2.style.zIndex = "1";
  venaMoves.style.opacity = "0"; // z index //
  starMoves.style.opacity = "1";

  healthVena.value = 320;
  // healthVena.value = 320;
  // venaMoves.style.zIndex = "-5";


    }
  }

// if (healthVena.value == 0) {
//
//   setTimeout(death, 1000);
//         function death () {
//   venaImage.style.opacity = "0";
//   starImage.style.opacity = "1";
//   healthVena.value = 320;
//   hpname.innerText = "STARMIE HP"
//   venaMoves.style.zIndex = "-5";
//
//     }
//   }

}



dpeck.addEventListener("click", drillPeck);
function drillPeck() {

healthVena.value -= 100;
pipImage.classList.add("attack");

setTimeout(resetAnimation, 500);
      function resetAnimation () {
pipImage.classList.remove("attack");
}

if (healthVena.value == 0) {
  setTimeout(death, 1000);
        function death () {
  venaImage.style.opacity = "0";
  starImage.style.opacity = "1";
  healthVena.style.opacity = "0";
  healthStarmie.style.opacity = "1";
  hpNum.style.zIndex = "-1";
  hpNum2.style.zIndex = "1";
  venaMoves.style.opacity = "0";
  starMoves.style.opacity = "1";
  // change pokemon //
}
}
}







ibeam.addEventListener("click", iceBeam);
function iceBeam() {

healthVena.value -= 75;
pipImage.classList.add("attack");

setTimeout(resetAnimation, 500);
      function resetAnimation () {
pipImage.classList.remove("attack");
}
if (healthVena.value == 0) {
  setTimeout(death, 1000);
        function death () {
  venaImage.style.opacity = "0";
  starImage.style.opacity = "1";
  healthVena.style.opacity = "0";
  healthStarmie.style.opacity = "1";
  hpNum.style.zIndex = "-1";
  hpNum2.style.zIndex = "1";
  venaMoves.style.opacity = "0";
  starMoves.style.opacity = "1";
  // change pokemon //
}
}
}

gknot.addEventListener("click", grassKnot);
function grassKnot() {

healthVena.value -= 15;
pipImage.classList.add("attack");

setTimeout(resetAnimation, 500);
      function resetAnimation () {
pipImage.classList.remove("attack");
}
if (healthVena.value == 0) {
  setTimeout(death, 1000);
        function death () {
  venaImage.style.opacity = "0";
  starImage.style.opacity = "1";
  healthVena.style.opacity = "0";
  healthStarmie.style.opacity = "1";
  hpNum.style.zIndex = "-1";
  hpNum2.style.zIndex = "1";
  venaMoves.style.opacity = "0";
  starMoves.style.opacity = "1";
  // change pokemon //
}
}
}




swave.addEventListener("click", sludgeWave);
function sludgeWave() {

healthPiplup.value -= 80;
venaImage.classList.add("attackTop");

setTimeout(resetAnimation, 500);
      function resetAnimation () {
venaImage.classList.remove("attackTop");
}

if (healthPiplup.value == 0) {
  setTimeout(death, 1000);
        function death () {
  venaImage.style.opacity = "0";
  starImage.style.opacity = "1";
  healthVena.style.opacity = "0";
  healthStarmie.style.opacity = "1";
  hpNum.style.zIndex = "-1";
  hpNum2.style.zIndex = "1";
  venaMoves.style.opacity = "0";
  starMoves.style.opacity = "1";
  // change pokemon //
}
}
}

epower.addEventListener("click", earthPower);
function earthPower() {

healthPiplup.value -= 60;
venaImage.classList.add("attackTop");

setTimeout(resetAnimation, 500);
      function resetAnimation () {
venaImage.classList.remove("attackTop");
}
if (healthPiplup.value == 0) {
  pipImage.style.opacity = "0";
  prinImage.style.opacity = "1";
  // change pokemon //
}

}

gdrain.addEventListener("click", gigaD);
function gigaD() {

healthPiplup.value -= 80;
healthVena.value += 25;
venaImage.classList.add("attackTop");

setTimeout(resetAnimation, 500);
      function resetAnimation () {
venaImage.classList.remove("attackTop");
}
if (healthPiplup.value == 0) {
  pipImage.style.opacity = "0";
  prinImage.style.opacity = "1";
  // change pokemon //
}

}

synth.addEventListener("click", synthesis);
function synthesis() {

healthVena.value += 50;
venaImage.classList.add("attackTop");

setTimeout(resetAnimation, 500);
      function resetAnimation () {
venaImage.classList.remove("attackTop");
}
if (healthPiplup.value == 0) {
  pipImage.style.opacity = "0";
  prinImage.style.opacity = "1";
  // change pokemon //
}

}
