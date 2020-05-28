import {
  AGREGAR_PRODUCTOS,
  AGREGAR_PRODUCTOS_EXITO,
  AGREGAR_PRODUCTOS_ERROR

} from '../types'

// Cada reducer tiene su propio state

const initialState = {
  productos: [],
  error: undefined,
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTOS:
      return {
        ...state,
        loading: true,
      }
    case AGREGAR_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload]
      }
    case AGREGAR_PRODUCTOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}