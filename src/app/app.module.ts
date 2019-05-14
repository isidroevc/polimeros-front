import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {APP_ROUTING} from './app.routes';
import { AppComponent } from './app.component';
import { AgregarProductoComponent } from './components/producto/agregar-producto/agregar-producto.component';
import { MenuComponent } from './components/compartidos/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ProveedorService } from './providers/proveedor/proveedor.service';
import { ProductoService } from './providers/producto/producto.service';
import { ListarProductoComponent } from './components/producto/listar-producto/listar-producto.component';
import { EliminarProductoComponent } from './components/producto/eliminar-producto/eliminar-producto.component';
import { RegistrarEntradaComponent } from './components/producto/registrar-entrada/registrar-entrada.component';
import { RegistrarSalidaComponent } from './components/producto/registrar-salida/registrar-salida.component';
import { ListarMovimientosComponent } from './components/producto/listar-movimientos/listar-movimientos.component';



@NgModule({
  declarations: [
    AppComponent,
    AgregarProductoComponent,
    MenuComponent,
    ListarProductoComponent,
    EliminarProductoComponent,
    RegistrarEntradaComponent,
    RegistrarSalidaComponent,
    ListarMovimientosComponent
  ],

  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProveedorService,
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
