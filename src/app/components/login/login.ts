import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  usuario: string = '';
  clave: string = '';
  currentImage: string = 'assets/images/imglg/1.png';
  seguirPunteroMouse: boolean = true;
  
  private anchoMitad: number = window.innerWidth / 2;
  private altoMitad: number = window.innerHeight / 2;
  private animationFrameId: number | null = null;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.seguirPunteroMouse) return;

    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    this.animationFrameId = requestAnimationFrame(() => {
      if (event.clientX < this.anchoMitad && event.clientY < this.altoMitad) {
        this.currentImage = 'assets/images/imglg/2.png';
      } else if (event.clientX < this.anchoMitad && event.clientY > this.altoMitad) {
        this.currentImage = 'assets/images/imglg/2.png';
      } else if (event.clientX > this.anchoMitad && event.clientY < this.altoMitad) {
        this.currentImage = 'assets/images/imglg/3.png';
      } else {
        this.currentImage = 'assets/images/imglg/3.png';
      }
    });
  }

  onInputFocus(inputType: string) {
    this.seguirPunteroMouse = false;
    
    if (inputType === 'clave') {
      this.animatePasswordBox('close');
    }
  }

  onInputBlur() {
    this.seguirPunteroMouse = true;
    
    if (this.clave) {
      this.animatePasswordBox('open');
    }
  }

  onUsuarioKeyup() {
    if (this.usuario) {
      this.currentImage = 'assets/images/imglg/4.png';
    }
  }

  private animatePasswordBox(action: 'open' | 'close') {
    const frames = action === 'close' ? [1, 2, 3] : [3, 2, 1];
    let currentFrame = 0;
  
    const animate = () => {
      if (currentFrame < frames.length) {
        // CORRECTO: usar template literal con comillas invertidas
        this.currentImage = `assets/images/imglg/imc/${frames[currentFrame]}.png`;
        currentFrame++;
        setTimeout(animate, 60);
      }
    };
  
    animate();
  }

  onLogin() {
    // Aquí podrías agregar validaciones o redirección con Angular Router
    console.log('Login attempt:', this.usuario);
    alert('Login exitoso (demo)');
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}