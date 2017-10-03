import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Switch, Link, Route, withRouter } from 'react-router-dom'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'


import Company from './company'

import $R_Companies from '../../resources/companiesResource'

class Companies extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.actions.dispatchAction('query');
  }

  render(){
    var companies = {
      rows: []
    }

    this.props.companies.map( company => {
      companies.rows.push( 
        <Table.Row>
          <Table.Cell><Link to={`/companies/${company.id}`}>{company.name}</Link></Table.Cell>
          <Table.Cell><a href={company.website}>{company.website}</a></Table.Cell>
          <Table.Cell>{company.tasks.length}</Table.Cell>
        </Table.Row>
      ) 
    })

    return (
      <div className="companies">
        <h1>Companies</h1>

        <p>Select a company to view more information.</p>

        <Table celled>

          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Company</Table.HeaderCell>
              <Table.HeaderCell>Website</Table.HeaderCell>
              <Table.HeaderCell>Tasks</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {companies.rows.map( row => row )}
          </Table.Body>

        </Table>

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