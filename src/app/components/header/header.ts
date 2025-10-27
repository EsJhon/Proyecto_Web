import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  banner = 'assets/images/banners/img_001.jpg'; // 👈 define el banner para evitar el error

}
