import { ANIMALS, ANIMALS_Birds } from "../animal/mock-animals";
import { Habitat } from "./habitat";

export const HABITATS:Habitat[]=[

    {
        id: 1,
        name: "Mammifères carnivores​",
        description: "D'une superficie de 1000 mètres carrés, l'enclos des {{ this.name }}.",
        picture: "assets/images/animaux/category/puma.jpg",
        animals: ANIMALS
  
    },
    {
        id: 2,
        name: "Oiseaux prédateurs nocturnes",
        description: "D'une superficie de 1000 mètres carrés, l'enclos des {{ this.name }}.",
        picture: "assets/images/animaux/category/chouette.jpg",
        animals: ANIMALS_Birds
    }
];