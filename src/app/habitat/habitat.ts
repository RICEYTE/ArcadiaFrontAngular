import { Animal } from "../animal/animal";

export class Habitat {
    id: number | undefined;
    name: string | undefined;
    description: string | undefined;
    picture: string | undefined;
    animals: Animal[] | undefined;
  
    constructor(
        id: number,
        nom: string = 'Entrer un nom...',
        description: string = "Entrer une description de l'enclos....",
        picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
        animals:  Animal[] = []
    ) {

        this.id = id;
        this.name = nom;
        this.description = description;
        this.picture = picture;
        this.animals = [];
    }
}