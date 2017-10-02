import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Switch, Link, Route, withRouter } from 'react-router-dom'

import Company from './company'

import $R_Companies from '../../resources/companiesResource'

class Companies extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    if (this.props.companies.length == 0) {
      this.props.actions.dispatchAction('query');
    }
  }

  render(){
    console.log(this.props)
    var companies = this.props.companies.map( company => {
      return (
        <div key={company.id}>
          <Link to={`/companies/${company.id}`}>{company.name}</Link>
        </div>
      )
    })

    return (
      <div className="companies">
        <h1>Companies</h1>
        {companies}
        <Route path={'/companies/:id'} component={Company} />
        <Route exact path={this.props.match.url} render={() => (
          <h3>Please select a topic.</h3>
        )}/>
      </div>
    )
  }

}

Companies.propTypes = {

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Companies));