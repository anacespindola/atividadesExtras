class Lutador{
    constructor(nome, category, forca, defesa){
        this.nome = nome;
        this.category = category;
        this.forca = forca;
        this.defesa = defesa;
        this.vitorias = 0;
    }
}


class Arena{
    static contadorDeBatalhas = 0;

    static batalha(lutador1, lutador2){
        if(lutador1.forca > lutador2.defesa){
            this.contadorDeBatalhas++
            lutador1.vitorias++

            console.log("mensagem: " + `${lutador1.nome}` + " venceu " + `${lutador2.nome}`)
             console.log("vitoriasGanhador: " + `${lutador1.vitorias}`)
            console.log("numeroDaBatalha: " +  `${this.contadorDeBatalhas}`);
        } else{
            this.contadorDeBatalhas++
            lutador2.vitorias++

            console.log("mensagem:" + `${lutador2.nome}` + "venceu" + `${lutador1.nome}`)
            console.log("vitoriasGanhador: " + `${lutador2.vitorias}`)
            console.log("numeroDaBatalha: " + `${this.contadorDeBatalhas}`);
        }
    }
}


const aguinaldo = new Lutador("aguinaldo", "peso pena", 29, 5);
const josefino = new Lutador ("josefino", "peso pena", 39, 55);

Arena.batalha(aguinaldo, josefino);