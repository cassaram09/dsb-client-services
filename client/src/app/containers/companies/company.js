import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom'

import $R_Companies from '../../resources/companiesResource'

class Company extends Component {
  constructor(props){
    super(props); 
  }

  componentWillMount(){
    if (this.props.companies.length == 0) {
      this.props.actions.dispatchAction('query');
    } else {
      this.company = this.props.companies.find( company => {
        return (this.props.match.params.id == company.id)
      })
    }
  }

  componentWillUpdate(nextProps, nextState){
    if ( nextProps.companies.length > 0 ) {
      this.company = nextProps.companies.find( company => {
        return (this.props.match.params.id == company.id)
      })
    }
  }

  render(){
    if (this.company){
      return (
        <div className="company">
          <h1>{this.company.name}</h1>
        </div>
      )
     } else {
      return (
        <div className="company">
          <h1>Loading...</h1>
        </div>
      )
     }
   
  }

}

Company.propTypes = {

}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({dispatchAction: $R_Companies.dispatchAction}, dispatch)
  }
}

const mapStateToProps = (state, ownProps) => { 
  return {
    companies: state.companies
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Company));