import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Products } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ScrollNearEndDirective } from '../../Directives/app-scroll-near-end.directive';
import { DropDownModel } from '../../models/dropDown.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollNearEndDirective, FormsModule],
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.scss'
})
export class SearchListComponent implements OnInit {
  pageNumber: number = 1;
  pageSize: number = 10
  FilteredproductList: Products[] = [];
  sortPropertyName: string = 'id';
  isDescendingOrder: boolean = false;
  brandList: DropDownModel[] = [];
  colorList: DropDownModel[] = [];
  capacityList: DropDownModel[] = [];
  categoryList: DropDownModel[] = [];
  inStockList: DropDownModel[] = [];
  sortByList: DropDownModel[] = [];
  constructor(private activeRoute: ActivatedRoute, public productService: ProductService) {
    this.brandList = [{ value: "All", text: "All" }, { value: "Apple", text: "Apple" }, { value: "UAG", text: "UAG" }];
    this.colorList = [{ value: "All", text: "All" }, { value: "Blue", text: "Blue" }, { value: "Black", text: "Black" }, { value: "Purple", text: "Purple" }];
    this.capacityList = [{ value: "All", text: "All" }, { value: "128", text: "128" }, { value: "256", text: "256" }, { value: "512", text: "512" }];
    this.categoryList = [{ value: "All", text: "All" }, { value: "Smartphone", text: "Smartphone" }, { value: "Accessory", text: "Accessory" }];
    this.inStockList = [{ value: "All", text: "All" }, { value: "Yes", text: "Yes" }, { value: "No", text: "No" }];
    this.sortByList = [{ value: "id", text: "Dafault" }, { value: "releaseDate", text: "Newest" }, { value: "highestPrice", text: "Highest Price" }, { value: "lowestPrice", text: "Lowest Price" }];
  }
  ngOnInit() {
    this.productService.form.search = this.activeRoute.snapshot.paramMap.get('search') ?? '';
    this.searchProduct();
  }
  searchProduct() {
    this.productService.staticData.subscribe(itemList => {
      if (this.productService.form.search && this.productService.form.search != '' && this.productService.form.search?.length > 1) {
        this.productService.numberOfSearchResult = itemList.filter(item => item.device?.includes(this.productService.form.search)).length;
        this.FilteredproductList = this.FilteredproductList.concat(this.result(itemList, this.productService.form.search, (this.pageNumber - 1) * this.pageSize, this.pageNumber * this.pageSize, this.sortPropertyName, this.isDescendingOrder));
      }
    }).unsubscribe();
  }
  result(products: Products[], search: string, start: number, end: number, propertyName: string, isDescendingOrder: boolean) {
    let result = products.sort((a: any, b: any) => {
      if (a[propertyName] < b[propertyName]) {
        return isDescendingOrder ? 1 : -1;
      }
      if (a[propertyName] > b[propertyName]) {
        return isDescendingOrder ? -1 : 1;
      }
      return 0;
    })
      .filter(item => item.device?.includes(search))
      .slice(start, end);
    return result;
  }
  viewMore() {
    if(this.FilteredproductList.length !== this.productService.numberOfSearchResult) {
      this.pageNumber += 1;
      this.searchProduct();
    }
  }
  applyFilter() {
    this.FilteredproductList =[];
    this.pageNumber = 1;
    this.pageSize = 10;
    // sorting
    if (this.productService.form.sortBy == 'highestPrice') {
      this.sortPropertyName = 'price';
      this.isDescendingOrder = true;
    } else if (this.productService.form.sortBy == 'lowestPrice') {
      this.sortPropertyName = 'price';
      this.isDescendingOrder = false;
    } else if (this.productService.form.sortBy == 'id') {
      this.sortPropertyName = this.productService.form.sortBy;
      this.isDescendingOrder = false;
    } 
    else if (this.productService.form.sortBy == 'releaseDate'){
      this.sortPropertyName = this.productService.form.sortBy;
      this.isDescendingOrder = true;
    }
    this.searchProduct();
  }
  clearFilters() {
    this.productService.form = {
      search: "",
      brand: "All",
      color: "All",
      capacity: "All",
      category: "All",
      inStock: "All",
      sortBy: "id"
    };
    this.pageNumber = 1;
    this.pageSize = 10;
    this.sortPropertyName = this.productService.form.sortBy;
    this.isDescendingOrder = false;
    this.searchProduct();
  }
}
