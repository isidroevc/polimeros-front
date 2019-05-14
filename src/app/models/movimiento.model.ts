import { Producto } from './producto.model';

export class Movimiento {
    id: number;
    idProducto:number;
    cantidad: number;
    tipo: string;
    fechaHora: string;
    producto: Producto;
}