import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LibroComponent } from './libro/libro.component';
import { PrestamoComponent } from './prestamo/prestamo.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'usuarios', component: UsuarioComponent},
    {path: 'libros', component: LibroComponent},
    {path: 'prestamos', component: PrestamoComponent},
];
