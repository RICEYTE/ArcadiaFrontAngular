export class Animal {
    id: number | undefined;
    name: string | undefined;
    picture: string | undefined;
    etat: String | undefined;
    created: Date | undefined;
  
    constructor(
        nom: string = 'Entrer un nom...',
        picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
        etat: string = 'Normal',
        created: Date = new Date()
    ) {
        this.name = nom;
        this.picture = picture;
        this.etat = etat;
        this.created = created;
    }
}