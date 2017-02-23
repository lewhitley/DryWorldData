import React from 'react';
import JSONRequest from 'jsonrequest';

const states = [{
    "name": "Alabama",
    "capital": "Montgomery"
  },{
    "name": "Alaska",
    "capital": "Juneau"
  },{
    "name": "Arizona",
    "capital": "Phoenix"
  },{
    "name": "Arkansas",
    "capital": "Little Rock"
  },{
    "name": "California",
    "capital": "Sacramento"
  },{
    "name": "Colorado",
    "capital": "Denver"
  },{
    "name": "Connecticut",
    "capital": "Hartford"
  },{
    "name": "Delaware",
    "capital": "Dover"
  },{
    "name": "Florida",
    "capital": "Tallahassee"
  },{
    "name": "Georgia",
    "capital": "Atlanta"
  },{
    "name": "Hawaii",
    "capital": "Honolulu"
  },{
    "name": "Idaho",
    "capital": "Boise"
  },{
    "name": "Illinois",
    "capital": "Springfield"
  },{
    "name": "Indiana",
    "capital": "Indianapolis"
  },{
    "name": "Iowa",
    "capital": "Des Moines"
  },{
    "name": "Kansas",
    "capital": "Topeka"
  },{
    "name": "Kentucky",
    "capital": "Frankfort"
  },{
    "name": "Louisiana",
    "capital": "Baton Rouge"
  },{
    "name": "Maine",
    "capital": "Augusta"
  },{
    "name": "Maryland",
    "capital": "Annapolis"
  },{
    "name": "Massachusetts",
    "capital": "Boston"
  },{
    "name": "Michigan",
    "capital": "Lansing"
  },{
    "name": "Minnesota",
    "capital": "Saint Paul"
  },{
    "name": "Mississippi",
    "capital": "Jackson"
  },{
    "name": "Missouri",
    "capital": "Jefferson City"
  },{
    "name": "Montana",
    "capital": "Helana"
  },{
    "name": "Nebraska",
    "capital": "Lincoln"
  },{
    "name": "Nevada",
    "capital": "Carson City"
  },{
    "name": "New Hampshire",
    "capital": "Concord"
  },{
    "name": "New Jersey",
    "capital": "Trenton"
  },{
    "name": "New Mexico",
    "capital": "Santa Fe"
  },{
    "name": "New York",
    "capital": "Albany"
  },{
    "name": "North Carolina",
    "capital": "Raleigh"
  },{
    "name": "North Dakota",
    "capital": "Bismarck"
  },{
    "name": "Ohio",
    "capital": "Columbus"
  },{
    "name": "Oklahoma",
    "capital": "Oklahoma City"
  },{
    "name": "Oregon",
    "capital": "Salem"
  },{
    "name": "Pennsylvania",
    "capital": "Harrisburg"
  },{
    "name": "Rhode Island",
    "capital": "Providence"
  },{
    "name": "South Carolina",
    "capital": "Columbia"
  },{
    "name": "South Dakota",
    "capital": "Pierre"
  },{
    "name": "Tennessee",
    "capital": "Nashville"
  },{
    "name": "Texas",
    "capital": "Austin"
  },{
    "name": "Utah",
    "capital": "Salt Lake City"
  },{
    "name": "Vermont",
    "capital": "Montpelier"
  },{
    "name": "Virginia",
    "capital": "Richmond"
  },{
    "name": "Washington",
    "capital": "Olympia"
  },{
    "name": "West Virginia",
    "capital": "Charleston"
  },{
    "name": "Wisconsin",
    "capital": "Madison"
  },{
    "name": "Wyoming",
    "capital": "Cheyenne"
  }
];

class Table extends React.Component {
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
    if (this.props.topic === "world") {
      return this.fetch('https://restcountries.eu/rest/v1/all');
    } else {
      if (this.props.version === "v1") {
        return states;
      } else {
        return states;
      }
    }
  }

  render() {
    return (
      <div>
        <ul className='index'>
          {this.getInfo().map( (info, idx) => (
              <li className='index-item' key={idx}>
                <p>{ this.props.version === "v2" && this.props.topic === "national" ? info.capital : info.name }</p>
              </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Table;
