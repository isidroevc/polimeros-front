import { Proveedor } from  './proveedor.model';

export class Producto {
  id:number;
  idProveedor: number;
  nombre:string;
  cantidadExistencia:number;
  unidadMedida:string;
  puntoReorden:number;
  entradas:number;
  salidas:number;
  proveedor: Proveedor;
  constructor() {
    this.id = 0;
    this.idProveedor = 0;
    this.cantidadExistencia = 0;
    this.puntoReorden = 0;
    this.unidadMedida = "";
    this.entradas = 0;
    this.salidas = 0;
    this.nombre = "";
  }

  validar(): string[] {
    let mensajes = [];
    if(this.id < 1)
      this.id = null;
    if(this.idProveedor < 1) {
      mensajes.push('No se ha escogido un proveedor valido');
    }
    this.nombre = this.nombre.trim();
    if(!this.nombre || this.nombre == '')
      mensajes.push('El nombre no puede estar vacio');

    if(this.cantidadExistencia < 0)
      mensajes.push('No se puede tener existencias negativas');
    if(this.puntoReorden < 0) {
      mensajes.push('No se puede tener punto de reorden negativo');
    }

    this.unidadMedida = this.unidadMedida.trim();

    if(!this.unidadMedida || this.unidadMedida === '')
      mensajes.push('La unidad de medida no puede estar vacia');
    return mensajes;
  }


  static parse(obj: any) {
    let nuevo = new Producto();
    nuevo.id = obj.id;
    nuevo.idProveedor = obj.idProveeodor;
    nuevo.nombre = obj.nombre;
    nuevo.cantidadExistencia = obj.cantidadExistencia;
    nuevo.puntoReorden = obj.cantidadExistencia;
    nuevo.unidadMedida = obj.unidadMedida;
    nuevo.entradas = obj.entradas;
    nuevo.salidas = obj.salidas;
    nuevo.proveedor = obj.proveedor ? obj.proveedor : null;
    return nuevo;
  }


}