import { Routes } from '@angular/router';
import { SearchListComponent } from './search-list.component';
import { BannerComponent } from '../banner/banner.component';

export const routes: Routes = [
    {
        path: '',
        component: BannerComponent,
    },{
        path:'search/:search',
        component: SearchListComponent,
    } 
];
