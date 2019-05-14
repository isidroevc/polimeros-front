
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './components/producto/agregar-producto/agregar-producto.component';
import { ListarProductoComponent } from './components/producto/listar-producto/listar-producto.component';
import { EliminarProductoComponent } from './components/producto/eliminar-producto/eliminar-producto.component';
import { RegistrarEntradaComponent } from './components/producto/registrar-entrada/registrar-entrada.component';
import { RegistrarSalidaComponent } from './components/producto/registrar-salida/registrar-salida.component';
import { ListarMovimientosComponent } from './components/producto/listar-movimientos/listar-movimientos.component';
const APP_ROUTES: Routes = [
    { path: 'Producto/agregarProducto', component: AgregarProductoComponent },
    { path: 'Producto/modificarProducto/:id', component: AgregarProductoComponent },
    { path: 'Producto/listarProductos', component: ListarProductoComponent },
    { path: 'Producto/eliminarProducto/:id', component: EliminarProductoComponent },
    { path: 'Producto/registrarEntrada/:id', component: RegistrarEntradaComponent },
    { path: 'Producto/registrarSalida/:id', component: RegistrarSalidaComponent },
    { path: 'Producto/listarMovimientos', component: ListarMovimientosComponent }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
