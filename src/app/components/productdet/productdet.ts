import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './productdet.html',
  styleUrls: ['./productdet.css']
})
export class ProductDetail {
  productId: string | null = null;
  product: any = null;

  products = [
    {
      id: '1',
      nombre: 'Mesa de Comedor',
      precio: 147.51,
      stock: 10,
      color: ['Natural', 'Oscuro'],
      categoria: 'Mesa',
      descripcion: 'Mesa de madera de cedro natural, resistente y elegante.',
      imagen: 'assets/images/productos/producto_01.jpg',
      reviews: 7
    },
    {
      id: '2',
      nombre: 'Silla de Madera',
      precio: 79.99,
      stock: 25,
      color: ['Natural', 'Nogal'],
      categoria: 'Silla',
      descripcion: 'Silla artesanal hecha de madera sólida.',
      imagen: 'assets/img/silla.jpg',
      reviews: 3
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.product = this.products.find(p => p.id === this.productId);
    } else {
      this.product = this.products[0]; // Muestra un producto por defecto si no hay id
    }
  }
}
