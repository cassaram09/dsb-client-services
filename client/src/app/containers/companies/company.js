import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link, Route, withRouter } from 'react-router-dom'


 const Company = ({ match }) => {
  return (
  <div>
    <h3>{match.params.id}</h3>
  </div>
  )
}

export default withRouter(Company);