import React from 'react';
import Header from './header'
import {Body, Titolo, SecondBody} from './body'
import Aside from './aside'
import Footer from './footer'
import attractions from '../risorse/array'




class Main extends React.Component {

  state = {
    attrazione: attractions
  }

  removeAttraction = (attraction) => {
    this.setState((state) => ({
      attrazione: state.attrazione.filter(
        (attr) => attr.id !== attraction.id)
    }))
    console.log(this.state.attrazione);
  }

  render(){
    return (
      <div class='body'>
        <Header/>
        <Aside onRemoveAttraction = {this.removeAttraction} attrazione={this.state.attrazione}/>
        <Titolo intestazione='I mie articoli' sottoTitolo='Test Props' />
        <Body/>
        <SecondBody/>
        <Footer variabileACaso='CiaoSonoLaVariabileACaso'/>
      </div>
    )
  }
}

export default Main
