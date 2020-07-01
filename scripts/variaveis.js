let imagemCenario;
let imagemCenarioT;
let imagemCenarioA;
let imagemTelaInicial;
let imagemPersonagem; 
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemFim;
let imagemVida;


let fonteTI;

let jogo;
let fita 
let cenaAtual = 'telaInicial';
let cenas;
let telaInicial;
let botaoGerenciador;
let vida

let cenarioA;
let cenario;
let cenarioT;
let somDoPulo;
let somDoJogo;
let somDoFim;
let somInicio;
let somCollide;
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;
let pontuacao;

const matrizInimigo = [
[0,0],
[147,0],
[294,0],
[441,0],
[588,0],
[735,0],
]
const matrizPersonagem = [
      [0,0],
      [220,0],
      [440,0],
      [660,0],
      [0,295],
      [220,295],
      [440,295],
      [660,295],
      [0,590],
      [220,590],
      [440,590],
      [660,590],
      [0,885],
      [220,885],
      [440,885],
      [660,885],
    ]
const  matrizInimigoGrande  =  [
  [ 0 ,0 ] ,
  [ 400 ,0 ] ,
  [ 800 ,0 ] ,
  [ 1200 ,0 ] ,
  [ 1600 ,0 ] ,
  [ 0 ,400 ] ,
  [ 400 ,400 ] ,
  [ 800 ,400 ] ,
  [ 1200 ,400 ] ,
  [ 1600 ,400 ] ,
  [ 0 ,800 ] ,
  [ 400 ,800 ] ,
  [ 800 ,800 ] ,
  [ 1200 ,800 ] ,
  [ 1600 ,800 ] ,
  [ 0 ,1200 ] ,
  [ 400 ,1200 ] ,
  [ 800 ,1200 ] ,
  [ 1200 ,1200 ] ,
  [ 1600 ,1200 ] , 
  [ 0 ,1600 ] ,
  [ 400 ,1600 ] ,
  [ 800 ,1600 ] ,
  [ 1200 ,1600 ] ,
  [ 1600 ,1600 ] ,
  [ 0 ,2000 ] ,
  [ 400 ,2000 ] ,
  [ 800 ,2000 ] ,
]
const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]


const inimigos = []