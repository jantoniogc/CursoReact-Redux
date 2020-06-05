import {
  MOSTRAR_ALERTA,
  OCULTAR_ALERTA
} from '../types';


export function mostrarAlertaAction(alerta) {
  return async (dispatch) => {
    dispatch(mostaraAlerta(alerta))
  }
}

const mostaraAlerta = (alerta) => ({
  type: MOSTRAR_ALERTA,
  payload: alerta
})

export function ocultarAlertaAction() {
  return async (dispatch) => {
    dispatch(ocultarAlerta())
  }
}

const ocultarAlerta = () => ({
  type: OCULTAR_ALERTA
})