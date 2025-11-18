import { Routes } from '@angular/router';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { DetalleProductosComponent } from './pages/detalle-productos/detalle-productos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    {
        path: '',
        component: ListaProductosComponent
    },
    {
        path: 'productos/:id',
        component: DetalleProductosComponent
    },
    {
        path: 'servicios',
        component: ServiciosComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];