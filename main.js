scottieAxiosCalls(function (Scott) {
      console.log(Scott);

    let name4 = document.querySelector("#name-s1")
    let stats4 = document.querySelector("#stats-s1")
    let abilities4 = document.querySelector("#ab-s1")


    name4.innerHTML = Scott.all[0].name
    stats4.innerHTML = "HP: " + Scott.all[0].hp + ", " + "ATK: " + Scott.all[0].attack + ", " + "DEF: " + Scott.all[0].defense
    abilities4.innerHTML = "Abillities: " + "[ " + Scott.all[0].abilities + " ]";




    let name5 = document.querySelector("#name-s2")
    let stats5 = document.querySelector("#stats-s2")
    let abilities5 = document.querySelector("#ab-s2")


    name5.innerHTML = Scott.all[1].name
    stats5.innerHTML = "HP: " + Scott.all[1].hp + ", " + "ATK: " + Scott.all[1].attack + ", " + "DEF: " + Scott.all[1].defense
    abilities5.innerHTML = "Abillities: " + "[ " + Scott.all[1].abilities + " ]";




    let name6 = document.querySelector("#name-s3")
    let stats6 = document.querySelector("#stats-s3")
    let abilities6 = document.querySelector("#ab-s3")

    name6.innerHTML = Scott.all[2].name
    stats6.innerHTML = "HP: " + Scott.all[2].hp + ", " + "ATK: " + Scott.all[2].attack + ", " + "DEF: " + Scott.all[2].defense
    abilities6.innerHTML = "Abillities: " + "[ " + Scott.all[2].abilities + " ]"

  });
  




  yorviAxiosCalls(function (Yorvi) {

      let name1 = document.querySelector("#name-y1")
      let stats1 = document.querySelector("#stats-y1")
      let abilities1 = document.querySelector("#ab-y1")
  
      name1.innerHTML = Yorvi.all[0].name
      stats1.innerHTML = "HP: " + Yorvi.all[0].hp + ", " + "ATK: " + Yorvi.all[0].attack + ", " + "DEF: " + Yorvi.all[0].defense
      abilities1.innerHTML = "Abillities: " + "[ " + Yorvi.all[0].abilities + " ]";
  



      let name2 = document.querySelector("#name-y2")
      let stats2 = document.querySelector("#stats-y2")
      let abilities2 = document.querySelector("#ab-y2")
  
      name2.innerHTML = Yorvi.all[1].name
      stats2.innerHTML = "HP: " + Yorvi.all[1].hp + ", " + "ATK: " + Yorvi.all[1].attack + ", " + "DEF: " + Yorvi.all[1].defense
      abilities2.innerHTML = "Abillities: " + "[ " + Yorvi.all[1].abilities + " ]";
  



      let name3 = document.querySelector("#name-y3")
      let stats3 = document.querySelector("#stats-y3")
      let abilities3 = document.querySelector("#ab-y3")
  
      name3.innerHTML = Yorvi.all[2].name
      stats3.innerHTML = "HP: " + Yorvi.all[2].hp + ", " + "ATK: " + Yorvi.all[2].attack + ", " + "DEF: " + Yorvi.all[2].defense
      abilities3.innerHTML = "Abillities: " + "[ " + Yorvi.all[2].abilities + " ]"
  });
  



// let piplupHpContainer = document.querySelector("#piplupHP");
// let prinplupHpContainer = document.querySelector("#prinplupHP");
// let empoleonHpContainer = document.querySelector("#empoleonHP");
let venasaurHpContainer = document.querySelector("#venasaurHP");
let starmieHpContainer = document.querySelector("#starmieHP");
let arcanineHpContainer = document.querySelector("#arcanineHP");
let healthVena = document.querySelector("#healthVenasaur");

let hpump = document.querySelector("#hpump");
let dpeck = document.querySelector("#dpeck");
let ibeam = document.querySelector("#ibeam");
let gknot = document.querySelector("#gknot");
let venaImage = document.querySelector("#venasaurImg");
let ArcImage = document.querySelector("#ArcanineImg");
let hpname = document.querySelector(".hpnumberTop");


let healthPiplup = document.querySelector("#healthPiplup");
let swave = document.querySelector("#swave");
let epower = document.querySelector("#epower");
let gdrain = document.querySelector("#gdrain");
let synth = document.querySelector("#synth");
let bbreak = document.querySelector("#bbreak");
let surf = document.querySelector("#surf");
let blizz = document.querySelector("#blizz");
let sclaw = document.querySelector("#sclaw");
let psych = document.querySelector("#psych");
let recover = document.querySelector("#recover");
let thunder = document.querySelector("#thundaga");
let hpumpStarmie = document.querySelector("#hpumpStarmie");
let pipImage = document.querySelector("#piplupImg")
let healthPrinplup = document.querySelector("#healthPrinplup");
let starImage = document.querySelector("#starImg")
let prinImage = document.querySelector("#prinplupImg")
let pipMoves = document.querySelector(".moveContainerBottom")
let prinMoves = document.querySelector(".moveContainerBottom2")
let EmpMoves = document.querySelector(".moveContainerBottom3")
let venaMoves = document.querySelector(".moveContainerTop")
let starMoves = document.querySelector(".moveContainerTop2")
let ArcMoves = document.querySelector(".moveContainerTop3")
let healthArcanine = document.querySelector("#healthArcanine");
let healthStarmie = document.querySelector("#healthStarmie");
let hpNum = document.querySelector(".hpnumberTop");
let hpNum2 = document.querySelector(".hpnumberTop2");
let hpNum3 = document.querySelector(".hpnumberTop3");
let hpNumBot = document.querySelector(".hpnumberBot");
let hpNumBot2 = document.querySelector(".hpnumberBot2");
let hpNumBot3 = document.querySelector(".hpnumberBot3");
let hp1 = document.querySelector("piplupHP")
let hp2 = document.querySelector("prinplupHP")
let hp3 = document.querySelector("empoleonHP")




// PIPLUP ATTACKS //


hpump.addEventListener("click", hydroP);
function hydroP() {

healthVena.value -= 60;
healthStarmie.value -= 60;
healthArcanine.value -= 60;
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
  healthVena.style.zIndex = "0";
  healthStarmie.style.zIndex = "5";
  hpNum.style.opacity = "0";
  hpNum2.style.opacity = "1";
  venaMoves.style.zIndex = "-1";
  starMoves.style.zIndex = "2";
  venasaurHpContainer.style.opacity = "0";
  starmieHpContainer.style.opacity = "1";
  healthStarmie.value = 280;



    }
  }


}



dpeck.addEventListener("click", drillPeck);
function drillPeck() {

healthVena.value -= 80;
healthStarmie.value -= 80;
healthArcanine.value -= 80;
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
          healthVena.style.zIndex = "0";
          healthStarmie.style.zIndex = "5";
          hpNum.style.opacity = "0";
          hpNum2.style.opacity = "1";
          venaMoves.style.zIndex = "-1";
          starMoves.style.zIndex = "2";
          venasaurHpContainer.style.opacity = "0";
          starmieHpContainer.style.opacity = "1";
          healthStarmie.value = 280;
  // change pokemon //
}
}
}







ibeam.addEventListener("click", iceBeam);
function iceBeam() {

  healthVena.value -= 80;
  healthStarmie.value -= 80;
  healthArcanine.value -= 80;
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
          healthVena.style.zIndex = "0";
          healthStarmie.style.zIndex = "5";
          hpNum.style.opacity = "0";
          hpNum2.style.opacity = "1";
          venaMoves.style.zIndex = "-1";
          starMoves.style.zIndex = "2";
          venasaurHpContainer.style.opacity = "0";
          starmieHpContainer.style.opacity = "1";
          healthStarmie.value = 280;
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
          healthVena.style.zIndex = "0";
          healthStarmie.style.zIndex = "5";
          hpNum.style.opacity = "0";
          hpNum2.style.opacity = "1";
          venaMoves.style.zIndex = "-1";
          starMoves.style.zIndex = "2";
          venasaurHpContainer.style.opacity = "0";
          starmieHpContainer.style.opacity = "1";
          healthStarmie.value = 280;
}
}
}















// VENASAUR ATTACKS //



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
          pipImage.style.opacity = "0";
          prinImage.style.opacity = "1";
          healthPiplup.style.zIndex = "0";
          healthPrinplup.style.zIndex = "5";
          hpNumBot.style.opacity = "0";
          hpNumBot2.style.opacity = "1";
          pipMoves.style.zIndex = "-1";
          prinMoves.style.zIndex = "2";
          piplupHpContainer.style.opacity = "0";
          prinplupHpContainer.style.opacity = "1";
          healthPrinplup.value = 290;

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
  setTimeout(death, 1000);
        function death () {
          pipImage.style.opacity = "0";
          prinImage.style.opacity = "1";
          healthPiplup.style.zIndex = "0";
          healthPrinplup.style.zIndex = "5";
          hpNumBot.style.opacity = "0";
          hpNumBot2.style.opacity = "1";
          pipMoves.style.zIndex = "-1";
          prinMoves.style.zIndex = "2";
          piplupHpContainer.style.opacity = "0";
          prinplupHpContainer.style.opacity = "1";
          healthPrinplup.value = 290;
}
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
  setTimeout(death, 1000);
        function death () {
          pipImage.style.opacity = "0";
          prinImage.style.opacity = "1";
          healthPiplup.style.zIndex = "0";
          healthPrinplup.style.zIndex = "5";
          hpNumBot.style.opacity = "0";
          hpNumBot2.style.opacity = "1";
          pipMoves.style.zIndex = "-1";
          prinMoves.style.zIndex = "2";
          piplupHpContainer.style.opacity = "0";
          hp1.style.zIndex = "-10";
          prinplupHpContainer.style.opacity = "1";
          healthPrinplup.value = 290;
}
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
  setTimeout(death, 1000);
        function death () {
          pipImage.style.opacity = "0";
          prinImage.style.opacity = "1";
          healthPiplup.style.zIndex = "0";
          healthPrinplup.style.zIndex = "5";
          hpNumBot.style.opacity = "0";
          hpNumBot2.style.opacity = "1";
          pipMoves.style.zIndex = "-1";
          prinMoves.style.zIndex = "2";
          piplupHpContainer.style.opacity = "0";
          prinplupHpContainer.style.opacity = "1";
          healthPrinplup.value = 290;
}
}
}



// PRINPLUP ATTACKS //




blizz.addEventListener("click", blizzard);
function blizzard() {


healthVena.value -= 180;
healthStarmie.value -= 60;
healthArcanine.value -= 60;
prinImage.classList.add("attack");

setTimeout(resetAnimation, 500);
      function resetAnimation () {
prinImage.classList.remove("attack");
}

if (healthPiplup.value == 0) {

  setTimeout(death, 1000);
        function death () {
  venaImage.style.opacity = "0";
  starImage.style.opacity = "1";
  healthVena.style.zIndex = "0";
  healthStarmie.style.zIndex = "5";
  hpNum.style.opacity = "0";
  hpNum2.style.opacity = "1";
  venaMoves.style.zIndex = "-1";
  starMoves.style.zIndex = "2";
  venasaurHpContainer.style.opacity = "0";
  starmieHpContainer.style.opacity = "1";
  healthStarmie.value = 280;



    }
  }


}



surf.addEventListener("click", surfing);
function surfing() {

  healthVena.value -= 90;
  healthStarmie.value -= 60;
  healthArcanine.value -= 90;
  prinImage.classList.add("attack");

  setTimeout(resetAnimation, 500);
        function resetAnimation () {
  prinImage.classList.remove("attack");
  }

  if (healthStarmie.value == 0) {

    setTimeout(death, 1000);
          function death () {
    starImage.style.opacity = "0";
    ArcImage.style.opacity = "1";
    healthStarmie.style.opacity = "0";
    healthArcanine.style.opacity = "1";
    hpNum2.style.opacity = "0";
    hpNum3.style.opacity = "1";
    ArcMoves.style.zIndex = "20";
    starMoves.style.zIndex = "-1";
    starmieHpContainer.style.opacity = "0";
    ArcanineHpContainer.style.opacity = "1";
    healthArcanine.value = 300;

}
}
}








sclaw.addEventListener("click", shadowC);
function shadowC() {

    healthVena.value -= 60;
    healthStarmie.value -= 60;
    healthArcanine.value -= 90;
    prinImage.classList.add("attack");

    setTimeout(resetAnimation, 500);
          function resetAnimation () {
    prinImage.classList.remove("attack");
    }

    if (healthStarmie.value == 0) {

      setTimeout(death, 1000);
            function death () {
      starImage.style.opacity = "0";
      ArcImage.style.opacity = "1";
      healthStarmie.style.opacity = "0";
      healthArcanine.style.opacity = "1";
      hpNum2.style.opacity = "0";
      hpNum3.style.opacity = "1";
      ArcMoves.style.zIndex = "20";
      starMoves.style.zIndex = "-1";
      starmieHpContainer.style.opacity = "0";
      ArcanineHpContainer.style.opacity = "1";
      healthArcanine.value = 300;

}
}
}

bbreak.addEventListener("click", brickBreak);
function brickBreak() {


    healthVena.value -= 30;
    healthStarmie.value -= 60;
    healthArcanine.value -= 90;
    prinImage.classList.add("attack");

    setTimeout(resetAnimation, 500);
          function resetAnimation () {
    prinImage.classList.remove("attack");
    }

    if (healthStarmie.value == 0) {

      setTimeout(death, 1000);
            function death () {
      starImage.style.opacity = "0";
      ArcImage.style.opacity = "1";
      healthStarmie.style.opacity = "0";
      healthArcanine.style.opacity = "1";
      hpNum2.style.opacity = "0";
      hpNum3.style.opacity = "1";
      ArcMoves.style.zIndex = "20";
      starMoves.style.zIndex = "-1";
      starmieHpContainer.style.opacity = "0";
      ArcanineHpContainer.style.opacity = "1";
      healthArcanine.value = 300;

  }
  }
  }
