import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true, // 👈 IMPORTANTE
  imports: [],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'] // 👈 con "s"
})
export class Cart {}
