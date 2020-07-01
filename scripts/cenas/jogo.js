class Jogo {
  constructor() {
    this.indice = 0;
    
    this.mapa = fita.mapa
  }

  setup() {
    cenarioT = new Cenario(imagemCenarioT, 4);
    cenario = new Cenario(imagemCenario, 5);
    pontuacao = new Pontuacao()
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)
    
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 50, 88, 110, 142, 220, 295);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, 80, 78, 73, 86, 147, 172, 100);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 220, 100, 75, 200, 150, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 60, 200, 200, 400, 400, 15);


    inimigos.push(inimigo)
    inimigos.push(inimigoGrande)
    inimigos.push(inimigoVoador)
  }

  keyPressed(key) {
    if (key === ' ') {
      personagem.pula()
      somDoPulo.play()
    }
    if (key == 'Enter') {
      cenaAtual = 'telaInicial';
      this.restartGame();
      loop();
    }
  }
  
  
  restartGame() {
    window.location.reload();
  }

  draw() {
    cenarioT.exibe();
    cenarioT.move();
    cenario.exibe();
    cenario.move();
    
    vida.draw()
    pontuacao.exibe()
    pontuacao.adicionarPonto()

    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice]
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;
    
    inimigo.exibe()
    inimigo.move()


    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece()
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      somCollide.setVolume(15.0)
      somCollide.play();
      personagem.ficaInvencivel()
      if(vida.vidas === 0){
        
        somDoJogo.stop();
        somDoFim.play();
        
        image(imagemFim, width / 2 - 200, height / 3)
        setTimeout(() => {}, 100);
        noLoop();
        textAlign(CENTER);
        text('Press Enter do play again', width/2, height/5*2.7);
      }
  }
  }
}