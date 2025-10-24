import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // 👈 importante: lo convierte en componente standalone
  templateUrl: './header.html',
  styleUrls: ['./header.css'], // 👈 debe ser styleUrls (en plural)
})
export class Header {
  banner = 'assets/images/banners/img_001.jpg'; // 👈 define el banner para evitar el error
}
