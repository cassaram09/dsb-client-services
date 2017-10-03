import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom'
import { Card, Button, Icon } from 'semantic-ui-react'

import $R_Companies from '../../resources/companiesResource'

class Company extends Component {
  constructor(props){
    super(props); 

    this.newTask = () => {
      props.history.push('/tasks/new');
    }
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
          <p><a href={this.company.website}>Website</a></p>
          <Button content='New Task' icon='plus' labelPosition='right' onClick={this.newTask} />

          <Card.Group>
            <Card fluid>
              <h2>Tasks</h2>
              { this.company.tasks.map( t => <p>{t.name}</p>)}
            </Card>
            <Card fluid>
              <h2>Projects</h2>
               <p>some stuff</p>
            </Card>
            <Card fluid>
              <h2>Invoices</h2>
              <p>some stuff</p>
            </Card>
            
          </Card.Group>
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