import { Component } from '@angular/core';
import { Header } from '../header/header'; 
import { Footer } from '../footer/footer'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, Footer], 
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  public banner = 'assets/images/banners/img_001.jpg';

  constructor(private router: Router) {}

  // 🔹 Método original para navegar
  irA(ruta: string) {
    this.router.navigate([ruta]);
  }

  // 🔹 Nuevo método para posicionarse en un id específico
  irAId(id: string) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
