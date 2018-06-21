
import React from 'react';

const options = [
  {nbPerson:'1 Person', price:1400},
  {nbPerson:'2 Persons', price:2800},
  {nbPerson:'3 Persons', price:4200},
  {nbPerson:'4 Persons', price:5200},
  {nbPerson:'5 Persons', price:6200},
  {nbPerson:'6 Persons', price:7200},
];

class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      value: options[0].nbPerson,
      price: options[0].price,
    };
  }

  onChange(e) {
    const elem = options.filter( elem => elem.nbPerson === e.target.value);
    this.setState({
      value: e.target.value,
      price: elem[0].price,
    })
  }
  
  render() {
    return (
      <div className='form-group'>
        {/* <label htmlFor='select2' ></label> */}
        <select value={this.state.value} onChange={this.onChange.bind(this)} className='form-control'>
          {
            options.map(option => {
              return <option className='option' value={option.nbPerson} key={option.nbPerson} >{option.nbPerson}</option>
            })
          }
        </select>
        <div className='select-person-price'>
          {this.state.price} THB
        </div>
      </div>
    )
  }
}

export default SelectBox;