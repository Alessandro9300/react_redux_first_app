import React from 'react';
import Header from './header'
import {Body, Articolo, Titolo} from './body'




class Main extends React.Component {
  render(){
    return (
      <div class='body'>
        <Header/>
        <Titolo intestazione='I mie articoli' sottoTitolo='Test Props' />
        <Body/>
      </div>
    )
  }
}

export default Main
