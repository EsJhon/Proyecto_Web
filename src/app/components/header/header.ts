import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css']  // 👈 importante: plural
})
export class Header {
  banner = 'assets/images/banners/img_001.jpg';

  constructor(private router: Router) {}

  // ✅ Ahora acepta el fragmento ('contacto')
  irA(ruta: string, fragment?: string) {
    this.router.navigate([ruta], { fragment });
  }
}
