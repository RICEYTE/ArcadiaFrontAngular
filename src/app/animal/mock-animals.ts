import { Animal } from "./animal";

export const ANIMALS:Animal[]=[

    {
        id: 1,
        name: "Léo",
        race: "Lion",
        picture: "assets/images/animaux/category/lion.jpg",
        description: "On ne présente plus le Lion, roi de la savane africaine. A l’âge adulte, le lion peut peser jusqu’à 250 kilos. Sa principale activité est de … se reposer (de 18 à 20h par jour). Le reste du temps il le consacre à défendre son territoire, se nourrir et se reproduire, une vraie vie de Pacha.",
        etat: "En forme",
        created: new Date()
    },
    {
        id: 2,
        name: "theo",
        race: "Tigre blanc",
        picture: "assets/images/animaux/category/tigre_blanc.jpg",
        description: `Non la couleur de son pelage et ses yeux bleus ne sont pas entièrement naturels, et si les 1ers tigres blancs auraient été observés déjà au 16° sc, il s’agit en réalité d’un tigre du Bengale possédant une anomalie génétique appelée leucistisme.
        C’est une particularité génétique due à un gène récessif, qui donne une couleur blanche au pelage.
        La majorité des tigres blancs captifs sont les descendants de Mohan, un tigre du Bengale sauvage capturé dans les années 1950 et recueilli par le maharadjah de Rewa.`,
        etat: "En forme",
        created: new Date()
    },
    {
        id: 3,
        name: "Choupy",
        race: "Loup arctique",
        picture: "assets/images/animaux/category/loup_arctique.jpg",
        description: `Comme l’indique son nom il vit dans la région arctique (Nord de l’hémisphère). Les Inuits le surnomme amaruk ou amorok.
        Il vit dans des conditions extrèmes où lété très court et les températures maximales atteignent 10°. En automne et en hiver il se déplace seul ou en petit groupes d’individus.
        
        Ses proies sont variées allant de petits mammifères lemmings, lièvres arctiques ou aussi des oiseaux. Il chasse en meute pour des proies plus importantes tel que caribou et boeuf musqué.
        
        La femelle met bas jusqu’à 5 petits après une gestation de neuf semaines. Elle creuse elle-même sa tannière. Les louvetaux sont les premières victimes des conditions extrèmes.
        `,
        etat: "En forme",
        created: new Date()
    }
];


export const ANIMALS_Birds:Animal[]=[

    {
        id: 1,
        name: "Léo",
        race: "Lion",
        picture: "assets/images/animaux/category/chouette.jpg",
        description: "On ne présente plus le Lion, roi de la savane africaine. A l’âge adulte, le lion peut peser jusqu’à 250 kilos. Sa principale activité est de … se reposer (de 18 à 20h par jour). Le reste du temps il le consacre à défendre son territoire, se nourrir et se reproduire, une vraie vie de Pacha.",
        etat: "En forme",
        created: new Date()
    }
];