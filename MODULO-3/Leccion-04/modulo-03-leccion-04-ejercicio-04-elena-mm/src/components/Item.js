import React from 'react';
// NO olvides importar Prop-types e INSTALARLO!
import PropTypes from 'prop-types';

class Item extends React.Component {
    render() {
      return (
        <div className="item">
          <h5 className="quantity">{ this.props.quantity }</h5>
          <div>
            <h5>{ this.props.name }</h5>
            <h6 className="text-muted">{ this.props.description }</h6>
          </div>
          <div className="badge badge-info">{ this.props.category }</div>
          <h5 className="price">{ this.props.price }€</h5>
        </div>
      );
    }
  }

  /* Establecemos valor de las props por defecto con `defaultProps` */
  Item.defaultProps = {
    description: 'No hay descripción.'
  }

  /* Hacer el nombre y precio obligatorio y que el precio sea de tipo numérico */
  // --> usamos `propTypes`
Item.propTypes = {
  name: PropTypes.any.isRequired,
  price: PropTypes.number.isRequired
}


  export default Item;