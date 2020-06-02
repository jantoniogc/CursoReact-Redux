import React, { Fragment, useEffect } from 'react';
import Producto from './Producto';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/productosActions';

const Productos = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const cargarProductos = () => {
      dispatch(obtenerProductosAction());
    };
    cargarProductos();
  }, []);

  //Obtenemos el state
  const productos = useSelector(state => state.productos.productos);
  const error = useSelector(state => state.productos.error);
  const cargando = useSelector(state => state.productos.loading);

  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de Productos</h2>
      {cargando ? <p className="text-center">Cargando...</p> : null}
      {error ? <p className="font-weight-bold alert alert-danger text-center">{error}</p> : null}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0 ? 'No hay productos' : (
            productos.map(producto => (
              <Producto
                key={producto.id}
                producto={producto}
              >

              </Producto>
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
}

export default Productos;