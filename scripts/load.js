function preload(){
  imagemCenario = loadImage('imagens/cenario/back.png');
  imagemCenarioT = loadImage('imagens/cenario/ceu1.png');
  imagemCenarioA = loadImage('imagens/cenario/ceu.jpg');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemPersonagem = loadImage('imagens/personagem/lari.png');
  imagemInimigo = loadImage('imagens/inimigos/coronga.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemFim = loadImage('imagens/assets/game-over.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  fonteTI = loadFont('imagens/assets/fonteTelaInicial.otf')
  fita  = loadJSON('fita/fita.json')
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somDoFim = loadSound('sons/morte.mp3')
  somDoFim2 = loadSound('sons/death.flac')
  somInicio = loadSound('sons/entrada.wav')
  somCollide = loadSound('sons/colisao.wav')
}
