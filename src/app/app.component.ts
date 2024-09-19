import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SearchListComponent } from './search/search-list/search-list.component';
import { FooterComponent } from './footer/footer.component';
import { ProductService } from './services/product.service';
import { Products } from './models/product.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SearchListComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce';
  filterList: Products[] = [];
  constructor(private router: Router, public productService: ProductService) {
  }
  searchProduct(event: any) {
    let search: string = event.target.value;
    if (search != '' && search?.length > 1) {
      this.productService.staticData.subscribe(itemList => {
        this.filterList = itemList.filter(item => item.device?.includes(search)).slice(0, 9);
      })
    }
    else {
      this.filterList = [];
    }
  }
  search(value: string) {
    this.filterList = [];
    this.router.navigate([`search/${value}`]);
  }
}
