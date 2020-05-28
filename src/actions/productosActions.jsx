import {
  AGREGAR_PRODUCTOS,
  AGREGAR_PRODUCTOS_EXITO,
  AGREGAR_PRODUCTOS_ERROR

} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// Crear nuevo Pruductos
export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto())
    try {
      // insert 
      await clienteAxios.post('/productos', producto);
      Swal.fire('Correcto', 'El producto se agregó correctamente', 'success');
      dispatch(agregarProductoExito(producto))
    } catch (error) {
      dispatch(agregarProductoError(error.message))
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: error.message
      })
    }
  }
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTOS
})

const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTOS_EXITO,
  payload: producto
})

const agregarProductoError = (error) => ({
  type: AGREGAR_PRODUCTOS_ERROR,
  payload: error
})