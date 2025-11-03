import { Component } from '@angular/core';
import { Header } from '../header/header'; 
import { Footer } from '../footer/footer'; 

@Component({
  selector: 'app-cart',
  imports: [Header, Footer],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

}
