import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

  private cajah!: HTMLImageElement;
  private inputUsuario!: HTMLInputElement;
  private inputClave!: HTMLInputElement;
  private seguirPunteroMouse = true;
  private anchoMitad = window.innerWidth / 2;
  private altoMitad = window.innerHeight / 2;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // Seleccionar elementos del DOM
    this.cajah = this.el.nativeElement.querySelector('#cajah');
    this.inputUsuario = this.el.nativeElement.querySelector('#input-usuario');
    this.inputClave = this.el.nativeElement.querySelector('#input-clave');

    // Seguir el puntero del mouse
    document.body.addEventListener('mousemove', this.seguirMouse.bind(this));

    // Configurar eventos de inputs
    this.setupInputs();
  }

  // Función para seguir el mouse y cambiar imagen
  seguirMouse(event: MouseEvent) {
    if (!this.seguirPunteroMouse) return;

    if (event.clientX < this.anchoMitad && event.clientY < this.altoMitad) {
      this.cajah.src = 'assets/images/imglg/imc/2.png';
    } else if (event.clientX < this.anchoMitad && event.clientY > this.altoMitad) {
      this.cajah.src = 'assets/images/imglg/imc/2.png';
    } else if (event.clientX > this.anchoMitad && event.clientY < this.altoMitad) {
      this.cajah.src = 'assets/images/imglg/imc/3.png';
    } else {
      this.cajah.src = 'assets/images/imglg/imc/3.png';
    }
  }

  // Configuración de eventos para los inputs
  setupInputs() {
    // Usuario
    this.inputUsuario.addEventListener('focus', () => this.seguirPunteroMouse = false);
    this.inputUsuario.addEventListener('blur', () => this.seguirPunteroMouse = true);
    this.inputUsuario.addEventListener('keyup', () => {
      this.cajah.src = 'assets/images/imglg/imc/4.png';
    });

    // Clave
    this.inputClave.addEventListener('focus', () => {
      this.seguirPunteroMouse = false;
      let cont = 1;
      const anim = setInterval(() => {
        this.cajah.src = `assets/images/imglg/imc/${cont}.png`;
        if (cont < 3) cont++;
        else clearInterval(anim);
      }, 60);
    });

    this.inputClave.addEventListener('blur', () => {
      this.seguirPunteroMouse = true;
      let cont = 2;
      const anim = setInterval(() => {
        this.cajah.src = `assets/images/imglg/imc/${cont}.png`;
        if (cont > 1) cont--;
        else clearInterval(anim);
      }, 60);
    });
  }

  // Función para manejar login
  onLogin(event: Event) {
    event.preventDefault();
    // Aquí puedes agregar validaciones y redirección con Angular Router
    alert('Login exitoso (demo)');
  }
}
