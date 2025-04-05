class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    caminar() {
        console.log(`${this.nombre} está caminando.`);
    }
}

const persona1 = new Persona("Jersson");
persona1.caminar();