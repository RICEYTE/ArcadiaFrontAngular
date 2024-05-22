export class Animal {
    id: number | undefined;
    name: string | undefined;
    race: string | undefined;
    description: string | undefined;
    picture: string | undefined;
    etat: String | undefined;
    created: Date | undefined;
  
    constructor(
        nom: string = 'Entrer un nom...',
        race: string = `Entrer uen race d'anniaml`,
        picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
        description: string = "Entrer une description...",
        etat: string = 'Normal',
        created: Date = new Date()
    ) {
        this.name = nom;
        this.race = race;
        this.picture = picture;
        this.description = description;
        this.etat = etat;
        this.created = created;
    }
}