import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-products',
  standalone: true, // ← importante para standalone
  imports: [Header, Footer],
  templateUrl: './products.html',
  styleUrls: ['./products.css'] // ← corregido (era "styleUrl")
})
export class Products { }
