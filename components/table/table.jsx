import React from 'react';
import states from './state_info';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.fetch = this.fetch.bind(this);
  }

  fetch (url) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    return JSON.parse(xhr.responseText);
  }

  getInfo () {
    if (this.props.params.topic === "world") {
      return this.fetch('https://restcountries.eu/rest/v1/all');
    } else {
      return states;
    }
  }

  render() {
    const version = this.props.params.version;
    const topic = this.props.params.topic;

    return (
      <div>
        <ul className='index'>
          {this.getInfo().map( (info, idx) => (
              <li className='index-item' key={idx}>
                <p>{ version === "v2" && topic === "national" ? info.capital : info.name }</p>
              </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Table;
