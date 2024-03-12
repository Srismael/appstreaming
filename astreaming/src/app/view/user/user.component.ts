import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usuarios?: Usuario[];
  usuarioSeleccionado?: Usuario;

  nuevoUsuario: Usuario = {
    nombre_usuario: '',
    correo: '',
    contrasenia: '',
    pelicula_vistas: [],
    foto: '',
    listas: []
  };

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.getUsuarios()
      .subscribe(usuarios => this.usuarios = usuarios);
  }

  agregarUsuario(): void {
    this.usuarioService.agregarUsuario(this.nuevoUsuario)
      .subscribe(() => {
        this.obtenerUsuarios();
        this.nuevoUsuario = {
          nombre_usuario: '',
          correo: '',
          contrasenia: '',
          pelicula_vistas: [],
          foto: '',
          listas: []
        };
      });
  }

  eliminarUsuario(usuarioId: string): void {
    this.usuarioService.eliminarUsuario(usuarioId)
      .subscribe(() => {
        if (this.usuarios) {
          this.usuarios = this.usuarios.filter(usuario => usuario._id !== usuarioId);
        }
      });
  }

  editarUsuario(usuario: Usuario): void {
    this.usuarioSeleccionado = usuario;
  }

  actualizarUsuario(): void {
    if (this.usuarioSeleccionado?._id) {
      this.usuarioService.actualizarUsuario(this.usuarioSeleccionado._id, this.usuarioSeleccionado)
        .subscribe(() => {
          this.obtenerUsuarios();
          this.usuarioSeleccionado = undefined; // Limpiar el usuario seleccionado después de actualizar
        });
    }
  }

  mostrarUsuario(usuarioId: string): void {
    this.usuarioService.getUsuario(usuarioId)
      .subscribe(usuario => {
        this.usuarioSeleccionado = usuario;
      });
  }
}