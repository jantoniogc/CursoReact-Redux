import {
  AGREGAR_PRODUCTOS,
  AGREGAR_PRODUCTOS_EXITO,
  AGREGAR_PRODUCTOS_ERROR,
  DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITO,
  DESCARGA_PRODUCTOS_ERROR,
  PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINAR_EXITO,
  PRODUCTO_ELIMINAR_ERROR

} from '../types';

// Cada reducer tiene su propio state

const initialState = {
  productos: [],
  error: undefined,
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case DESCARGA_PRODUCTOS:
    case AGREGAR_PRODUCTOS:
      return {
        ...state,
        loading: action.payload,
      }
    case AGREGAR_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload]
      }
    case PRODUCTO_ELIMINAR_ERROR:
    case DESCARGA_PRODUCTOS_ERROR:
    case AGREGAR_PRODUCTOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case DESCARGA_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        productos: action.payload
      }
    case PRODUCTO_ELIMINAR:
      return {
        ...state,
        loading: true,
        error: false,
        productoEliminar: action.payload
      }
    case PRODUCTO_ELIMINAR_EXITO:
      return {
        ...state,
        productos: state.productos.filter(producto => producto.id !== action.payload),
        loading: false,
        error: false,
      }

    default:
      return state;
  }
}