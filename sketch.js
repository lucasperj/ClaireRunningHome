function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40)
  somDoJogo.loop();
  somInicio.play();
  cena1 = new Cena1();
  jogo = new Jogo()
  telaInicial = new TelaInicial(); 
  jogo.setup();
  cenas = {
    jogo,
    telaInicial,
    cena1
  }
  botaoGerenciador = new BotaoGerenciador('->',width/2,height/2,  'jogo','botao-tela-inicial');
  }

function keyPressed(){
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}

