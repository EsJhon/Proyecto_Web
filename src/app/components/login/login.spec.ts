import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login'; // <-- Asegúrate que la ruta sea correcta
import { FormsModule } from '@angular/forms'; // Solo si usas ngModel

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent], // <-- Aquí va el componente
      imports: [FormsModule] // <-- Solo si usas ngModel o formularios
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
