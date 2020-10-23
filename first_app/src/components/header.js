import React from 'react';
import ListaContatti from './contactList'


// class Header extends React.Component {
//   render() {
//
//     return (
//         <header>
//           <nav>
//            <div class="nav-wrapper">
//              <a href="#!" class="brand-logo center">Logo</a>
//              <ul class="left hide-on-med-and-down">
//                <ListaContatti nomi={['Alessandro', 'Saverio', 'Michel']}/>
//              </ul>
//            </div>
//           </nav>
//         </header>
//       )
//   }
// }

function Header(){
  return (
      <header>
        <nav>
         <div class="nav-wrapper">
           <a href="#!" class="brand-logo center">Logo</a>
           <ul class="left hide-on-med-and-down">
             <ListaContatti nomi={['Alessandro', 'Saverio', 'Michael']}/>
           </ul>
         </div>
        </nav>
      </header>
    )
}

export default Header


// <div class='rightHeader'>
//   <ul>
//
//   </ul>
//   <ul>
//     <ListaContatti nomi={['Gertrude', 'Mario', 'Azir']} />
//   </ul>
// </div>
// <div class='leftHeader'>
//   <p>Padre P.</p>
// </div>
