class persona {
    constructor(nombre) {
    this.#nombre = nombre;
}
caminar(){
    console.log(`${this.#nombre} esta caminando`);
     
   }
}
const persona1 = new Persona ("jersson");
persona1.caminar();