import React from 'react';
import ReactDom from 'react-dom';




// const firstH1 = React.createElement('ul',
// {className: 'titolo'}
// , nomi.map(nome => (React.createElement('li', null, nome))));
//
//
// const header = React.createElement('header',
// {
//   class: 'myHeader',
//   id: 'head'
// }
// , firstH1)

//
// const header = <header>
//     <ul>
//       {nomi.map(nome => <li>{nome}</li>)}
//     </ul>
//   </header>

class Header extends React.Component {
  render() {
    const nomi = [
      'Alessandro',
      'Marco',
      'Sempronio'
    ]

  return (
    <header>
      <div class='rightHeader'>
        <ul>
          {nomi.map(nome => <li> {nome}</li>)}
        </ul>
      </div>
      <div class='leftHeader'>
        <p>Padre P.</p>
      </div>

    </header>
  )
  }
}




ReactDom.render(<Header/>, document.getElementById('root'));
