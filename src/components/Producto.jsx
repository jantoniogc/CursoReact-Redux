import React from 'react';
import { useHistory } from 'react-router-dom';

//Redux
import { useDispatch } from 'react-redux';
import { eliminarProductoAction, obtnerProductoEditarAction } from '../actions/productosActions';
import Swal from 'sweetalert2';

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();
  const history = useHistory(); // habilitar history para redirección

  //Confirmar si deseo eliminar
  const confirmaEliminarProducto = (id) => {
    //pregunta usuario
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Quiere borrar el producto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borralo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        //pasarlo al action
        dispatch(eliminarProductoAction(id));
      }
    })
  }

  //función que redirige de forma programada
  const redireccionarEdicion = (producto) => {
    dispatch(obtnerProductoEditarAction(producto));
    history.push(`/productos/editar/${producto.id}`);
  }

  return (
    <tr>
      <td>{nombre}</td>
      <td><span className="font-weight-bold">${precio}</span></td>
      <td className="acciones">
        <button
          type="button"
          onClick={ () => redireccionarEdicion(producto)}
          className="btn btn-primary mr-2">
          Editar</button>
        <button type="button" className="btn btn-danger"
          onClick={() => confirmaEliminarProducto(id)}>Eliminar</button>
      </td>
    </tr>
  );
}

export default Producto;