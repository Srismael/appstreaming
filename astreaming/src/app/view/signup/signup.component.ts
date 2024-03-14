import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  nuevoUsuario: Usuario = {
    nombre_usuario: '',
    correo: '',
    contrasenia: '',
    pelicula_vistas: [],
    foto: '',
    listas: []
  };

  constructor(private usuarioService: UsuarioService) { }

  registrarUsuario(): void {
    this.usuarioService.agregarUsuario(this.nuevoUsuario)
      .subscribe(() => {
        console.log('Usuario registrado exitosamente');
        // Puedes agregar aquí redirección a otra página o cualquier otra lógica que desees después de registrar el usuario
      }, error => {
        console.error('Error al registrar usuario:', error);
      });
  }

}
