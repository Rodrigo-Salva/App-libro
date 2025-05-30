import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  private usuarios : Usuario[] = [
    {id:1, nombres:"Javier Morales", telefono:"987654321", email: "jmorales@mail.com"},
    {id:2, nombres:"Silvia Gonzáles", telefono:"987694321", email: "sgonzales@mail.com"},
  ];
  private nextId = 3;

  getUsuarios(): Usuario[] {
    return this.usuarios;
  }

  addUsuario(usuario: Omit<Usuario, 'id'>) {
    console.log('addUsuario', usuario);
    this.usuarios.push({ id: this.nextId++, ...usuario });
  }
  updateUsuario(usuario: Usuario) {
    console.log('updateUsuario', usuario);
    const index = this.usuarios.findIndex(usuario => usuario.id === usuario.id);
    if (index > -1) this.usuarios[index] = usuario;
  }
  deleteUsuario(id: number) {
    this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
  }
}
