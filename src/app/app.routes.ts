
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './components/producto/agregar-producto/agregar-producto.component';
import { ListarProductoComponent } from './components/producto/listar-producto/listar-producto.component';
import { EliminarProductoComponent } from './components/producto/eliminar-producto/eliminar-producto.component';
const APP_ROUTES: Routes = [
    { path: 'Producto/agregarProducto', component: AgregarProductoComponent },
    { path: 'Producto/modificarProducto/:id', component: AgregarProductoComponent },
    { path: 'Producto/listarProductos', component: ListarProductoComponent },
    { path: 'Producto/eliminarProducto/:id', component: EliminarProductoComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
