import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { PrestamoService } from './prestamo.service';
import { Prestamo } from './prestamo.model';

@Component({
  selector: 'app-prestamo',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {
  prestamos: Prestamo[] = [];
  editMode = false;

  prestamoForm = new FormGroup({
    id: new FormControl(0),
    idLibro: new FormControl(0),
    nombrePersona: new FormControl(''),
    fechaPrestamo: new FormControl(''),
    fechaDevolucion: new FormControl('')
  });

  constructor(private prestamoService: PrestamoService) {}

  ngOnInit() {
    this.loadPrestamos();
  }

  loadPrestamos() {
    this.prestamos = this.prestamoService.getPrestamos();
  }

  onSubmit() {
    const prestamo: any = this.prestamoForm.value;
    if (this.editMode) {
      this.prestamoService.updatePrestamo(prestamo);
    } else {
      this.prestamoService.addPrestamo(prestamo);
    }
    this.resetForm();
    this.loadPrestamos();
  }

  onEdit(prestamo: Prestamo) {
    this.editMode = true;
    this.prestamoForm.setValue(prestamo);
  }

  onDelete(id: number) {
    this.prestamoService.deletePrestamo(id);
    this.loadPrestamos();
  }

  resetForm() {
    this.editMode = false;
    this.prestamoForm.reset({
      id: 0,
      idLibro: 0,
      nombrePersona: '',
      fechaPrestamo: '',
      fechaDevolucion: ''
    });
  }
}
