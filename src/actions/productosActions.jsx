import {
  AGREGAR_PRODUCTOS,
  AGREGAR_PRODUCTOS_EXITO,
  AGREGAR_PRODUCTOS_ERROR,
  DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR,
  PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINAR_EXITO,
  PRODUCTO_ELIMINAR_ERROR,
  PRODUCTO_EDITAR,
  EDITAR_PRODUCTO,
  EDITAR_PRODUCTO_EXITO,
  EDITAR_PRODUCTO_ERROR
} from '../types/index';

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

//Función que descarga los productos de la base de datos

export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos());
    try {
      const respuesta = await clienteAxios.get('/productos');
      dispatch(descargarProductosExito(respuesta.data));

    } catch (error) {
      dispatch(descargaProductoError(error.message))
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: error.message
      })
    }
  }
}
const descargarProductos = () => ({
  type: DESCARGA_PRODUCTOS,
  payload: true
});

const descargarProductosExito = (productos) => ({
  type: DESCARGA_PRODUCTOS_EXITO,
  payload: productos
});

const descargaProductoError = (error) => ({
  type: DESCARGA_PRODUCTOS_ERROR,
  payload: error
})

export function eliminarProductoAction(id) {
  return async (dispatch) => {
    dispatch(eliminarProducto(id));
    try {
      await clienteAxios.delete(`/productos/${id}`)
      dispatch(eliminarProductoExito(id));
      Swal.fire(
        'Borrrado!',
        'El producto ha sido Elimnado.',
        'success'
      )

    } catch (error) {
      dispatch(eliminarProductoError(error.message))
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: error.message
      })
    }
  }
}

const eliminarProducto = (id) => ({
  type: PRODUCTO_ELIMINAR,
  payload: id
});

const eliminarProductoExito = (id) => ({
  type: PRODUCTO_ELIMINAR_EXITO,
  payload: id
});

const eliminarProductoError = (error) => ({
  type: PRODUCTO_ELIMINAR_ERROR,
  payload: error
})


const obtenerProductoEditar = (producto) => ({
  type: PRODUCTO_EDITAR,
  payload: producto
});


export function obtnerProductoEditarAction(producto) {
  return (dispatch) => {
    dispatch(obtenerProductoEditar(producto));
  }
}

const editarProducto = (producto) => ({
  type: EDITAR_PRODUCTO,
  payload: producto
});

const editarProductoExito = (producto) => ({
  type: EDITAR_PRODUCTO_EXITO,
  payload: producto
});

const editarProductoError = (error) => ({
  type: EDITAR_PRODUCTO_ERROR,
  payload: error
})

export function editarProductoAction(producto) {
  return async (dispatch) => {
    dispatch(editarProducto(producto));
    try {
      const resultado = await clienteAxios.put(`/productos/${producto.id}`, producto)
      dispatch(editarProductoExito(resultado.data));
      Swal.fire(
        'Actualizado!',
        'El producto ha sido Actualizado.',
        'success'
      )

    } catch (error) {
      dispatch(editarProductoError(error.message))
      Swal.fire({
        icon: 'error',
        title: 'Hubo un error',
        text: error.message
      })
    }
  }
}


