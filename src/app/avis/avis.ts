export class Avis {
  id: number;
  pseudo: string | undefined;
  commentaire: String | undefined;
  created: Date | undefined;


  constructor(

    id: number = 1,
    pseudo: string = 'Entrer un nom...',
    commentaire: string = "Entrer un commentaire",
    created: Date = new Date,
  ) {

    this.id = id;
    this.pseudo = pseudo;
    this.commentaire = commentaire;
    this.created = created;
  }

}