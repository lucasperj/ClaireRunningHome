class Cena1{
  constructor()
  {
    
  }
  
  draw()
  {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  _imagemDeFundo(){
    image(imagemCenarioA, 0, 0, width, height);
  }
 _texto(){
    textFont(fonteTI);
    stroke(color("#FFF"));
    fill(color('#000'));
    textAlign(CENTER);
    textSize(36);
    text('A nossa jovem Claire  precisa atravessar a floresta!',width/2,2*height/10);
   text(' Preocupada e em busca por sua familia,',width/2,2*height/9+20);
   
   text(' ela nao esperava tantos obstaculos em seu caminho. ',width/2,2*height/9+43);
   
   text(' Ainda bem que ela estava mais que preparada, ',width/2,2*height/9+66);
   
      text(' com mascara no rosto e alcool nas maos,',width/2,2*height/9+89);
      text(' sempre cautelosa para manter a distancia do virus que corria pela',width/2,2*height/9+112);
      text('terra e ar, alem dos terriveis trolls que ajudavam a espalhar,  ',width/2,2*height/9+135);
   text(' ela sabia que ao chegar perto, nao daria certo. ',width/2,2*height/9+158);
   text(' Corria para casa, onde acreditava que iria vos achar,  ',width/2,2*height/9+181);
   text('Ja que la, e onde todos deveriam estar...',width/2,2*height/9+204);
   text('Sera que ela consegue? ',width/2,2*height/9+227);

  }
  
  _botao(){
    botaoGerenciador.proximaTela='jogo';
    botaoGerenciador.classe='botao-tela-inicial';
    botaoGerenciador.y = 7*height/9;
    botaoGerenciador.draw();
  
  
}
} 