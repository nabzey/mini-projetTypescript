
export abstract class Produit{
  private libelle : string;
  private poids : number;

  constructor(libelle:string, poids :number){
    this.libelle = libelle;
    this.poids = poids;
  }
  getLibelle():string{
   return this.libelle;
  }
  setLibelle(libelle:string):void{
    this.libelle = libelle
  }

  getPoids():number{
    return this.poids
  }

  setPoids(poids:number):void{
    if(poids > 0){
    this.poids = poids
    }else {
      throw new Error ('le poids est :')
    }
  
  }

  abstract info():void;
}