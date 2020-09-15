
import React from 'react';


class ListaContatti extends  React.Component {
  render() {
    return this.props.nomi.map(nome => <li> <a href="#">{nome}</a> </li>)

  }
}

export default ListaContatti
