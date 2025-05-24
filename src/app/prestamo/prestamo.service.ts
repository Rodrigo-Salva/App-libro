import { Injectable } from '@angular/core';
import { Prestamo } from './prestamo.model';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  private prestamos: Prestamo[] = [];
  private nextId = 1;

  constructor() { }

  getPrestamos(): Prestamo[] {
    return this.prestamos;
  }

  addPrestamo(prestamo: Omit<Prestamo, 'id'>) {
    this.prestamos.push({ id: this.nextId++, ...prestamo });
  }

  updatePrestamo(prestamo: Prestamo) {
    const index = this.prestamos.findIndex(p => p.id === prestamo.id);
    if (index !== -1) {
      this.prestamos[index] = prestamo;
    }
  }

  deletePrestamo(id: number) {
    this.prestamos = this.prestamos.filter(p => p.id !== id);
  }
}
