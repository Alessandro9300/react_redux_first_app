import React from 'react';
import Header from './header'
import {Body, Titolo, SecondBody} from './body'
import Aside from './aside'
import Footer from './footer'
import attractions from '../risorse/array'




class Main extends React.Component {
  render(){
    return (
      <div class='body'>
        <Header/>
        <Aside attrazione={attractions}/>
        <Titolo intestazione='I mie articoli' sottoTitolo='Test Props' />
        <Body/>
        <SecondBody/>
        <Footer/>
      </div>
    )
  }
}

export default Main
