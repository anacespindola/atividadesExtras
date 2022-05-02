class Musica {
    constructor(nome, duracao){
        this.nome = nome;
        this.duracao = duracao;

        this.vezesTocadas = 0;
    }
}


class Banda {
    constructor(nome, integrantes){
        this.nome = nome;
        this.integrantes = integrantes;

        this.album = [];
    }
}


const bandinha = new Banda("Mamonas", "robertoCarlos, Charlie Brown");
const biruliruliru = new Musica("biruliruliru", "30 minutos")


 function adicionarMusica(musica, banda){
      banda.album.push(musica);
      return "Música Adicionada"

}

adicionarMusica(biruliruliru, bandinha);
