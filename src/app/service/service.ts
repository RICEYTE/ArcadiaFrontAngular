
export class Service {
    id: number | undefined;
    name: string | undefined;
    description: string | undefined;
  
    constructor(
        id: number,
        nom: string = 'Entrer un nom...',
        description: string = "Entrer une description de l'enclos....",
           ) {

        this.id = id;
        this.name = nom;
        this.description = description;

    }
}