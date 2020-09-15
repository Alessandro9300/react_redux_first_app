import React from 'react';

export class Titolo extends React.Component{
  render(){
    return (
      <div class='titolo'>
        <h1> {this.props.intestazione} </h1>
        <h2> {this.props.sottoTitolo} </h2>

      </div>
    )
  }
}

export class Articolo extends React.Component{
  render(){
    return (
      <div class='articolo'>
        <h1>{this.props.nomeArticolo}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    )
  }
}

export class Body extends React.Component{
  render(){
    return (
      <main>
        <Articolo nomeArticolo = 'articolo 1'/>
        <Articolo nomeArticolo = 'articolo 2'/>
        <Articolo nomeArticolo = 'articolo 3'/>
        <Articolo nomeArticolo = 'articolo 4'/>
      </main>
    )
  }
}
