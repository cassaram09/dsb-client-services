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
    this.props.actions.dispatchAction('get', {company: {id: this.props.match.params.id}});
  }

  componentWillUpdate(nextProps, nextState){
    if ( nextProps.companies.length > 0 ) {
      this.company = nextProps.companies.find( company => {
        return (this.props.match.params.id == company.id)
      })

      // if no company is found, then the resource doesn't exist or they're not 
      // authorized to view it. Redirect to home page. 
      if (!this.company) {
        this.props.history.push('/');
      }
    }
  }

  render(){
    if (this.company && this.company.authorized){
      return (
        <div className="company">
          <h1>{this.company.name}</h1>

          
        </div>
      )
     } else {
      return (
        <div className="company">
          
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