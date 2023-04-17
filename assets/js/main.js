function criaCalculadora(){
   return {
      //atributos em cima
      display: document.querySelector('.display'),


      //metodos ficam embaixo
      inicia(){
      this.cliqueBotoes();
      this.pressionarTeclas();
      },
      pressionarTeclas(){
         this.display.addEventListener('keyup',(e)=>{
            if(e.keyCode === 13){
               this.realizaConta();
            }
         });
      },
      apagarUm(){
         this.display.value = this.display.value.slice(0, -1); 
      },    
      realizaConta(){
         let conta = this.display.value;
         try{
          conta=eval(conta);
            
               if(!conta){
                  alert('conta invalida');
                  return;
               }
               this.display.value = String(conta);
            }catch(err){
            alert('conta invalida')
            return;
         }
      },


      clearDisplay(){
         this.display.value = '';
      },
      cliqueBotoes(){
        document.addEventListener('click',(e)=>{
            const el = e.target;

            if(el.classList.contains('btn-num')){
               this.btnParaDisplay(el.innerText);
            }
            
            if(el.classList.contains('btn-clear')){
               this.clearDisplay();
            }
            if(el.classList.contains('btn-del')){
               this.apagarUm();
            }
            if(el.classList.contains('btn-eq')){
               this.realizaConta();
            }
         });
      },

      btnParaDisplay(valor){
         this.display.value += valor;
      }
   }
}
const calculadora = criaCalculadora();
calculadora.inicia();
const tecla = document.addEventListener('keyup',(e)=>{
   return e
})