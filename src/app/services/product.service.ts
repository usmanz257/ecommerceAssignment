import { Injectable } from '@angular/core';
import { Products } from '../models/product.model';
import { Observable } from 'rxjs';
import { Filter } from '../models/filter.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    form: Filter = new Filter();
    numberOfSearchResult: number = 0;
    staticData: Observable<Products[]> = new Observable<Products[]>(ele =>
        ele.next([{
            "id": 1,
            "category": "Smartphone",
            "brand": "Apple",
            "vandor": "apple store",
            "device": "iphone 16 pro max",
            "color": "white",
            "capacity": 64,
            "stock": "yes",
            "price": 1100,
            "releaseDate": "11/09/2024"
        },
        {
            "id": 2,
            "category": "Smartphone",
            "brand": "Apple",
            "vandor": "apple store",
            "device": "iphone 16 pro",
            "color": "white",
            "capacity": 64,
            "stock": "yes",
            "price": 1020,
            "releaseDate": "11/09/2024"
        },
        {
            "id": 3,
            "category": "Smartphone",
            "brand": "Apple",
            "vandor": "apple store",
            "device": "iphone 15 pro max",
            "color": "white",
            "capacity": 256,
            "stock": "yes",
            "price": 1000,
            "releaseDate": "11/09/2023"
        },
        {
            "id": 4,
            "category": "Smartphone",
            "brand": "Apple",
            "vandor": "apple store",
            "device": "iphone 15 pro",
            "color": "white",
            "capacity": 256,
            "stock": "yes",
            "price": 950,
            "releaseDate": "11/09/2023"
        },
        {
            "id": 5,
            "category": "Smartphone",
            "brand": "Apple",
            "vandor": "apple store",
            "device": "iphone 14 pro max",
            "color": "white",
            "capacity": 128,
            "stock": "yes",
            "price": 900,
            "releaseDate": "11/09/2022"
        },
        {
            "id": 6,
            "category": "Smartphone",
            "brand": "Apple",
            "vandor": "apple store",
            "device": "iphone 14 pro",
            "color": "white",
            "capacity": 128,
            "stock": "yes",
            "price": 975,
            "releaseDate": "11/09/2022"
        },
        {
            "id": 7,
            "category": "Smartphone",
            "brand": "Apple",
            "vandor": "apple store",
            "device": "iphone 13 pro max",
            "color": "white",
            "capacity": 512,
            "stock": "yes",
            "price": 850,
            "releaseDate": "11/09/2021"
        },
        {
            "id": 8,
            "category": "Smartphone",
            "brand": "Apple",
            "vandor": "apple store",
            "device": "iphone 13 pro",
            "color": "white",
            "capacity": 512,
            "stock": "yes",
            "price": 800,
            "releaseDate": "11/09/2021"
        },
        {
            "id": 9,
            "category": "Smartphone",
            "brand": "Apple",
            "vandor": "apple store",
            "device": "iphone 12 pro max",
            "color": "white",
            "capacity": 256,
            "stock": "yes",
            "price": 800,
            "releaseDate": "11/09/2020"
        },
        {
            "id": 10,
            "category": "Smartphone",
            "brand": "Apple",
            "vandor": "apple store",
            "device": "iphone 12 pro max",
            "color": "white",
            "capacity": 256,
            "stock": "no",
            "price": 750,
            "releaseDate": "11/09/2020"
        },
        {
            "id": 11,
            "category": "Smartphone",
            "brand": "Apple",
            "vandor": "apple store",
            "device": "iphone 11 pro max",
            "color": "white",
            "capacity": 256,
            "stock": "yes",
            "price": 700,
            "releaseDate": "11/09/2019"
        },
        {
            "id": 12,
            "category": "Smartphone",
            "brand": "Apple",
            "vandor": "apple store",
            "device": "iphone 11 pro max",
            "color": "white",
            "capacity": 256,
            "stock": "no",
            "price": 650,
            "releaseDate": "11/09/2019"
        },
        {
            "id": 13,
            "category": "Smartphone",
            "brand": "Apple",
            "vandor": "apple store",
            "device": "iphone x pro max",
            "color": "white",
            "capacity": 128,
            "stock": "yes",
            "price": 625,
            "releaseDate": "11/09/2018"
        },
        {
            "id": 14,
            "category": "Smartphone",
            "brand": "Apple",
            "vandor": "apple store",
            "device": "iphone 8 pro max",
            "color": "white",
            "capacity": 128,
            "stock": "no",
            "price": 600,
            "releaseDate": "11/09/2018"
        },
        {
            "id": 15,
            "category": "Smartphone",
            "brand": "Apple",
            "vandor": "apple store",
            "device": "iphone 8 max",
            "color": "white",
            "capacity": 256,
            "stock": "yes",
            "price": 575,
            "releaseDate": "11/09/2018"
        },
        {
            "id": 16,
            "category": "Smartphone",
            "brand": "Apple",
            "vandor": "apple store",
            "device": "iphone 7 max",
            "color": "white",
            "capacity": 256,
            "stock": "yes",
            "price": 550,
            "releaseDate": "11/09/2017"
        },
        {
            "id": 17,
            "category": "Smartphone",
            "brand": "Apple",
            "vandor": "apple store",
            "device": "iphone 6 max",
            "color": "white",
            "capacity": 256,
            "stock": "no",
            "price": 500,
            "releaseDate": "11/09/2016"
        },
        {
            "id": 18,
            "category": "Smartphone",
            "brand": "Apple",
            "vandor": "apple store",
            "device": "iphone 5 max",
            "color": "white",
            "capacity": 256,
            "stock": "no",
            "price": 450,
            "releaseDate": "11/09/2015"
        },
        {
            "id": 19,
            "category": "Smartphone",
            "brand": "Samsung",
            "vandor": "samsung store",
            "device": "samsung s24 ultra",
            "color": "white",
            "capacity": 256,
            "stock": "yes",
            "price": 1100,
            "releaseDate": "11/08/2023"
        },
        {
            "id": 20,
            "category": "Smartphone",
            "brand": "Samsung",
            "vandor": "samsung store",
            "device": "samsung s23 ultra",
            "color": "white",
            "capacity": 256,
            "stock": "yes",
            "price": 1075,
            "releaseDate": "11/08/2022"
        },
        {
            "id": 21,
            "category": "Smartphone",
            "brand": "Samsung",
            "vandor": "samsung store",
            "device": "samsung s22 ultra",
            "color": "white",
            "capacity": 256,
            "stock": "yes",
            "price": 1050,
            "releaseDate": "11/08/2021"
        },
        {
            "id": 22,
            "category": "Smartphone",
            "brand": "Samsung",
            "vandor": "samsung store",
            "device": "samsung s21 ultra",
            "color": "white",
            "capacity": 256,
            "stock": "yes",
            "price": 1025,
            "releaseDate": "11/08/2022"
        },
        {
            "id": 23,
            "category": "Smartphone",
            "brand": "Samsung",
            "vandor": "samsung store",
            "device": "samsung s20 ultra",
            "color": "white",
            "capacity": 256,
            "stock": "yes",
            "price": 1000,
            "releaseDate": "11/08/2021"
        },
        {
            "id": 24,
            "category": "Smartphone",
            "brand": "Samsung",
            "vandor": "samsung store",
            "device": "samsung s10 max",
            "color": "white",
            "capacity": 256,
            "stock": "yes",
            "price": 975,
            "releaseDate": "11/08/2020"
        },
        {
            "id": 25,
            "category": "Smartphone",
            "brand": "Samsung",
            "vandor": "samsung store",
            "device": "samsung s9",
            "color": "white",
            "capacity": 256,
            "stock": "yes",
            "price": 950,
            "releaseDate": "11/08/2019"
        },
        {
            "id": 26,
            "category": "Smartphone",
            "brand": "Samsung",
            "vandor": "samsung store",
            "device": "samsung s8",
            "color": "white",
            "capacity": 256,
            "stock": "yes",
            "price": 925,
            "releaseDate": "11/08/2018"
        }
        ])
    );
    constructor() {
        this.form = {
            search: "",
            brand: "All",
            color: "All",
            capacity: "All",
            category: "All",
            inStock: "All",
            sortBy: "id"
        };
    }
}
