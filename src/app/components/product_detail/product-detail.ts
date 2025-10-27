import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetail {
  productId: string | null = null;
  product: any = null;

  // Simulación de base de datos local (puedes cambiarlo luego)
  products = [
    {
      id: '1',
      nombre: 'Mesa de Comedor',
      precio: 147.51,
      stock: 10,
      color: ['Natural', 'Oscuro'],
      categoria: 'Mesa',
      descripcion:
        'La Mesa de Comedor está fabricada en madera de cedro natural, combinando resistencia y belleza.',
      imagen: 'assets/images/productos/producto_01.jpg',
      valoracion: 5,
      reviews: 7
    },
    {
      id: '2',
      nombre: 'Silla de Madera',
      precio: 79.99,
      stock: 25,
      color: ['Natural', 'Nogal'],
      categoria: 'Silla',
      descripcion:
        'Silla artesanal hecha de madera sólida, ideal para comedor o sala.',
      imagen: 'assets/img/silla.jpg',
      valoracion: 4,
      reviews: 3
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener el parámetro 'id' de la URL
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.product = this.products.find(p => p.id === this.productId);
    }
  }
}
