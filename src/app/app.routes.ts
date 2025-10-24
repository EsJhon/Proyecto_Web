import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { Cart } from './components/cart/cart';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'products', component: Products },
    { path: 'about', component: About },
    { path: 'cart', component: Cart },
    { path: 'contact', component: Contact },
];
