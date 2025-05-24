import { Injectable } from '@angular/core';
import { Libro } from './libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private libros: Libro[] = [
    { id: 1, titulo: "Gallinazos sin plumas",
      isbn: "88788961646146",
      anio: 2006,
      sinopsis: "El antiguo peru",
      genero: "Recuerdos de la vida"
    }
  ];
  private nextId = 2;

  getLibros(): Libro[] {
    return this.libros;
  }

  addLibro(libro: Omit<Libro, 'id'>) {
    this.libros.push({ id: this.nextId++, ...libro });
  }

  updateLibro(libro: Libro) {
    const index = this.libros.findIndex(l => l.id === libro.id);
    if (index > -1) this.libros[index] = libro;
  }

  deleteLibro(id: number) {
    this.libros = this.libros.filter(l => l.id !== id);
  }
}
