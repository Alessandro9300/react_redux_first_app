import React from 'react';
import ReactDom from 'react-dom';



const nomi = [
  'Alessandro',
  'Marco',
  'Sempronio'
]


class ListaContatti extends  React.Component {
  render() {
    return nomi.map(nome => <li> {nome}</li>)
  }
}


class Header extends React.Component {
  render() {

  return (
    <header>
      <div class='rightHeader'>
        <ul>
          <ListaContatti/>
        </ul>
      </div>
      <div class='leftHeader'>
        <p>Padre P.</p>
      </div>

    </header>
  )
  }
}

class Articolo extends React.Component{
  render(){
    return (
      <div class='articolo'>
        <h1>Sono un articolo!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    )
  }
}


class Body extends React.Component{
  render(){
    return (
      <main>
        <Articolo/>
        <Articolo/>
        <Articolo/>
        <Articolo/>

      </main>
    )
  }
}

class Main extends React.Component {
  render(){
    return (
      <div class='body'>
        <Header/>
        <Body/>
      </div>
    )
  }
}



ReactDom.render(<Main/>, document.getElementById('root'));
