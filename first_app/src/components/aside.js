import React from 'react';


class Aside extends React.Component {





  render() {
    return (
      <div class='aside'>
        <h2> Best Locations </h2>
        <ul class='ul_aside'>
          {this.props.attrazione.map((attrazione, index) => <li>

              <div class='flex-li'>
                <div class='li_style' style={{backgroundImage:`url(${attrazione.img})`}}>
                </div>
                <div>
                  <p>{index + 1}: {attrazione.name}</p>
                  <p> {attrazione.type} </p>
                </div>
              </div>

              <button onClick = {()=>this.props.onRemoveAttraction(attrazione)} type="button" name="button"></button>

            </li>)}

        </ul>

      </div>
    )
  }
}

export default Aside
