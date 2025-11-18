import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-productos.component.html',
  styleUrl: './detalle-productos.component.css'
})
export class DetalleProductosComponent {
id!: number;
producto: any;

productos = [
  { id: 1, nombre: 'Pastel de Chocolate', precio: 20, descripcion: 'Delicioso pastel de chocolate con cobertura de ganache.', imagen: 'https://www.verybestbaking.com/sites/g/files/jgfbjl326/files/srh_recipes/6ac66e5882a6c7672cec34554a5a3a2d.jpg' },
  { id: 2, nombre: 'Cupcake de Vainilla', precio: 5, descripcion: 'Esponjosos cupcakes de vainilla con glaseado de crema.', imagen: 'assets/cupcake_vainilla.https://origin.cronosmedia.glr.pe/large/2020/10/26/lg_5f9721983619341ea427baf5.jpg' },
  { id: 3, nombre: 'Galletas de Avena', precio: 10, descripcion: 'Crujientes galletas de avena con pasas y nueces.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2fdUGykzCtB3I9uRv2kUT7rVFyblpQHflQw&s' },
  { id: 4, nombre: 'Tarta de Frutas', precio: 15, descripcion: 'Tarta fresca con una variedad de frutas de temporada.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbKeu6XEIWZInLWUJCsur69Ogk8zmy2hkjQ&s' }
];

constructor (private route: ActivatedRoute, private router: Router) {}
ngOnInit(): void {
  this.id=Number(this.route.snapshot.paramMap.get('id'));
  this.producto = this.productos.find(p => p.id === this.id);
}
volver(): void {
  this.router.navigate(['/']);
}
}
