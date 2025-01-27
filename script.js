let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");

let noAns = document.querySelector(".noANS");
let yesAns = document.querySelector(".yesANS");

let noVdo = document.getElementById("noVdo");
let yesVdo = document.getElementById("yesVdo");

noBtn.addEventListener("click", () => {
  noAns.classList.remove("hidden");
  noVdo.play();

  yesBtn.classList.toggle('hidden');
  noBtn.classList.toggle('hidden');
});

yesBtn.addEventListener("click", () => {
  //playing the current video
  yesAns.classList.remove("hidden");
  yesVdo.play();


  yesBtn.classList.toggle('hidden');
  noBtn.classList.toggle('hidden');
});
