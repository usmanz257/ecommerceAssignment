export class Filter {
    search:string;
    category:string;
    brand:string;
    color:string;
    capacity:string;
    inStock:string;
    sortBy:string;
    constructor(){
        this.search = '';
        this.category='';
        this.brand='';
        this.color='';
        this.capacity='';
        this.inStock='';
        this.sortBy='';
    }
}