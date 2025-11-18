import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
  Productos = [
    { 
      id: 1, 
      nombre: 'Pastel de Chocolate', 
      precio: 'S/ 85.00', 
      imagen: 'https://www.verybestbaking.com/sites/g/files/jgfbjl326/files/srh_recipes/6ac66e5882a6c7672cec34554a5a3a2d.jpg' 
    },
    { 
      id: 2, 
      nombre: 'Cupcake de Vainilla', 
      precio: 'S/ 12.00', 
      imagen: 'https://origin.cronosmedia.glr.pe/large/2020/10/26/lg_5f9721983619341ea427baf5.jpg' 
    },
    { 
      id: 3, 
      nombre: 'Galletas de Avena', 
      precio: 'S/ 25.00', 
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2fdUGykzCtB3I9uRv2kUT7rVFyblpQHflQw&s' 
    },
    { 
      id: 4, 
      nombre: 'Tarta de Frutas', 
      precio: 'S/ 65.00', 
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbKeu6XEIWZInLWUJCsur69Ogk8zmy2hkjQ&s' 
    }
  ];
}