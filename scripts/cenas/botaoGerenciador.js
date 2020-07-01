class BotaoGerenciador{
  constructor(texto, x, y, proximaTela, classe){
    this.x=x;
    this.y=y;
    this.texto=texto;
    this.proximaTela=proximaTela;
    this.classe=classe;
    this.button=createButton(this.texto);
    this.button.mousePressed(() =>{
      if(this.proximaTela==='telaInicial')
         {
           jogo.setup();
         }
      this._alteraCena()}
      );
    this.button.addClass(this.classe);
  }
  
  
  
  draw()
  {
    this._criabutton();
    this.button.position(this.x,this.y);
    this.button.center('horizontal');
  }
  
  _criabutton()
  {
    if(this.button==null)
    {
      this.button=createButton(this.texto);
    this.button.mousePressed(() =>{
      if(this.proximaTela==='telaInicial')
         {
           jogo.setup();
         }
      this._alteraCena()}
      );
    this.button.addClass(this.classe);
    }
  }
  
  _alteraCena()
  {
    this.button.remove();
    this.button=null;
    cenaAtual=this.proximaTela;
    
  }
}