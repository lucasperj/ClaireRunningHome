class TelaInicial {
  constructor(){
  
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTI);
    textAlign(CENTER);
    textSize(60);
    text('Claire running', width / 2, 190);
    textSize(100)
    text('home', width / 2, 270);
    textSize(25);
    text('Where she should never have left...', width / 2, 290);
  }
  
  _botao(){
    botaoGerenciador.proximaTela='cena1';
    botaoGerenciador.classe='botao-tela-inicial';
    botaoGerenciador.y = height / 7 * 5
    botaoGerenciador.draw();
  }

}