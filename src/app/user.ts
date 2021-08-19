export interface User {
  id: number;
  nom: string;
  prenom: string;
  datenaissance: Date;


}

export interface Adresse {

  typeadresse: string;
  typevoie: string;
  rue: string;
  numero: number;
  ville: string;
  commentaire: string;
}
