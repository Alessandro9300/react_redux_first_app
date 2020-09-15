import React from 'react';
import ListaContatti from './contactList'


class Header extends React.Component {
  render() {

  return (
      <header>
        <div class='rightHeader'>
          <ul>
            <ListaContatti nomi={['Alessandro', 'Saverio', 'Michel']}/>
          </ul>
          <ul>
            <ListaContatti nomi={['Gertrude', 'Mario', 'Azir']} />
          </ul>
        </div>
        <div class='leftHeader'>
          <p>Padre P.</p>
        </div>

      </header>
    )
  }
}

export default Header
