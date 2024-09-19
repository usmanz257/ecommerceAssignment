export class Products {
    id:number;
    category:string;
    brand:string;
    vandor:string;
    device:string;
    color:string;
    capacity:number;
    stock:string;
    price:number;
    releaseDate:string = '';
    constructor(){
        this.id = 0;
        this.category= '';
        this.brand= '';
        this.vandor= '';
        this.device= '';
        this.color= '';
        this.capacity= 0;
        this.stock= '';
        this.price= 0;
        this.releaseDate= '';
    }
}