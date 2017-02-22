import React from 'react';
import JSONRequest from 'jsonrequest';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getInfo = this.getInfo.bind(this);
    this.fetch = this.fetch.bind(this);
  }

  fetch (url) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send(null);
    return JSON.parse(xhr.responseText);
  }

  getInfo () {
    if (this.props.topic === "world" && this.props.version === "v1" || this.props.version === "v2") {
      return this.fetch('https://restcountries.eu/rest/v1/all');
    } else if (this.props.topic === "national") {
      if (this.props.version === "v1") {
        return this.fetch('https://restcountries.eu/rest/v1/all');
      } else if (this.props.version === "v2") {
        return this.fetch('https://restcountries.eu/rest/v1/all');
      }
    }
  }

  render() {
    return (
      <div>
        <ul className='index'>
          {this.getInfo().map( (info, idx) => (
              <li className='index-item' key={idx}>
                { info.name }
                // { info.description }
              </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
