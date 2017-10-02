import React, {Component} from 'react';
import PropTypes from 'prop-types';

import $R_Companies from '../../resources/companiesResource'

class Companies extends Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
    
  }

  render(){
    return (
      <div className="companies">
        <h1>Companies</h1>
      </div>
    )
  }

}

Companies.propTypes = {

}

export default Companies;