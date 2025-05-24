import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { LibroService } from './libro.service';
import { Libro } from './libro.model';

@Component({
  selector: 'app-libro',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  libros: Libro[] = [];
  libroForm = new FormGroup({
    id: new FormControl(0),
    titulo: new FormControl(''),
    isbn: new FormControl(''),
    anio: new FormControl(0),
    sinopsis: new FormControl(''),
    genero: new FormControl('')
  });
  editMode = false;

  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    this.loadLibros();
  }

  loadLibros() {
    this.libros = this.libroService.getLibros();
  }

  onSubmit() {
    const libro: any = this.libroForm.value;
    if (this.editMode) {
      this.libroService.updateLibro(libro);
    } else {
      this.libroService.addLibro(libro);
    }
    this.resetForm();
    this.loadLibros();
  }

  onEdit(libro: Libro) {
    this.editMode = true;
    this.libroForm.setValue(libro);
  }

  onDelete(id: number) {
    this.libroService.deleteLibro(id);
    this.loadLibros();
  }

  resetForm() {
    this.editMode = false;
    this.libroForm.reset({ id: 0, titulo: '', isbn: '', anio: 0, sinopsis: '', genero: '' });
  }
}
