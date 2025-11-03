import { Component } from '@angular/core';
import { Header } from '../header/header'; 
import { Footer } from '../footer/footer';
@Component({
  selector: 'app-payment',
  imports: [Header, Footer], 
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment {

}
