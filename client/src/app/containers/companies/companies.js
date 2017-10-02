import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

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
    var companies = this.props.companies.map( company => {
      return (<p key={company.id}>{company.name}</p>)
    })

    return (
      <div className="companies">
        <h1>Companies</h1>
        {companies}
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

export default connect(mapStateToProps, mapDispatchToProps)(Companies);