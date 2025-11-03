import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  banner = 'assets/images/banners/img_001.jpg'; // 👈 define el banner para evitar el error
  
  constructor(private router: Router) {}

  irA(ruta: string) {
    this.router.navigate([ruta]);
  }
}
