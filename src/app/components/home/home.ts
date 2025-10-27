import { Component } from '@angular/core';
import { Header } from '../header/header'; 
import { Footer } from '../footer/footer'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Footer], 
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  public banner = 'assets/images/banners/img_001.jpg';
}
