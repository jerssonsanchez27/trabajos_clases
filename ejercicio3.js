class CuentaBancaria {
    constructor (inicial){
        let saldo = inicial;
    
     this.getSaldo = function () {
        return saldo;
     };
 
   

    this.depositar = function (monto){
        if (monto>0) {
            saldo += monto;
            console.log(`se han depositado $${monto}. saldo actual: $${saldo}`);    
            } else {
                console.log("el monto de deposito debe ser positivo");
                };
    }
    this.retirar = fuction(monto){
        if (monto > 0 && monto <= saldo) {
            saldo -= monto;
            console.log(`se han retirado $${monto}. Saldo actual: $${saldo}`);
        } else{
            
        }
    }
  }
}