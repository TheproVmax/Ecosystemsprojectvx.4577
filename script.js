// NIGHT MODE
document.getElementById("nightToggle").onclick = () => {
  document.body.classList.toggle("night");
};

// FOREST SIMULATOR
function runForest(){
  const ctx=document.getElementById("forestChart").getContext("2d");
  new Chart(ctx,{
    type:'line',
    data:{
      labels:[1,2,3,4,5],
      datasets:[
        {label:'Plants',data:[300,350,400,380,420],borderColor:'green'},
        {label:'Herbivores',data:[120,140,150,145,160],borderColor:'gold'},
        {label:'Carnivores',data:[60,65,70,68,75],borderColor:'red'}
      ]
    }
  });
}

// LAKE SIMULATOR
function runLake(){
  const ctx=document.getElementById("lakeChart").getContext("2d");
  new Chart(ctx,{
    type:'line',
    data:{
      labels:[1,2,3,4,5],
      datasets:[
        {label:'Algae',data:[200,230,250,240,260],borderColor:'green'},
        {label:'Small Fish',data:[100,120,130,125,140],borderColor:'blue'},
        {label:'Big Fish',data:[40,45,50,48,55],borderColor:'purple'}
      ]
    }
  });
}

// GAME
let plants=10, herb=5, carn=2;

function updateGame(){
  document.getElementById("gameStatus").textContent =
  `🌱 Plants: ${plants} | 🐇 Herbivores: ${herb} | 🦊 Carnivores: ${carn}`;

  if(plants<=0||herb<=0||carn<=0){
    document.getElementById("gameStatus").textContent +=
    " ❌ Ecosystem Collapsed!";
  }
}

function addPlant(){ plants+=2; herb--; updateGame(); }
function addHerbivore(){ herb+=1; plants--; updateGame(); }
function addCarnivore(){ carn+=1; herb--; updateGame(); }

updateGame();
