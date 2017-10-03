import React, {Component} from 'react';
import PropTypes from 'prop-types';
import $R_Tasks from '../../resources/tasksResource'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'


const options = [
  { key: 'm', text: 'Design', value: 'design' },
  { key: 'f', text: 'Development', value: 'development' },
]

const companies = [
  { key: 'dsb', text: 'Dark Square Bishop', value: '1' },
]

class NewTask extends Component {
  constructor(props){
    super(props);

    this.state = {
      name:'',
      request_type: '',
      description: '',
      company_id: ''
    }

    this.handleChange = (e, target) => {
      this.setState( {[target.name]: target.value} )
    }

    this.submit = () => {
      var state = Object.assign({}, this.state)
      props.actions.dispatchAction('create', {task: this.state})
    }

  }

  componentWillUpdate(nextProps, nextState) {
    if ( this.props.tasks.length != nextProps.tasks.length ) {
      alert('task created!')
      this.props.history.push('/')
    }
  }

  render(){
    const { value } = this.state
    return (
      <div className="NewTask">
        <h1>New Task</h1>
        <Form>
          <Form.Field control={Select} name='company_id' label='Company' options={companies} placeholder='Company' onChange={this.handleChange} />
          <Form.Field control={Input} name='name' label='Name' placeholder='Name' onChange={this.handleChange} />
          <Form.Field control={Select} name='request_type' label='Type' options={options} placeholder='Type' onChange={this.handleChange} />
          <Form.Field control={TextArea} name='description' label='Description' placeholder='Task description' onChange={this.handleChange} />
          <Form.Field control={Button} onClick={this.submit} >Submit</Form.Field>
        </Form>
      </div>
    )
  }

}


NewTask.propTypes = {

}

const mapStateToProps = (state, ownProps) => { 
  return {
    tasks: state.tasks
  }
};


const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({dispatchAction: $R_Tasks.dispatchAction}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);