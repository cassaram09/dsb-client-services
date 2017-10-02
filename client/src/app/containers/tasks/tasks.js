import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import $R_Tasks from '../../resources/tasksResource'

class Tasks extends Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
    if (this.props.tasks.length == 0) {
      this.props.actions.dispatchAction('query');
    }
  }

  render(){
    var tasks = this.props.tasks.map( task => {
      return (<p key={task.id}>{task.name}</p>)
    })

    return (
      <div className="tasks">
        <h1>Tasks</h1>
        {tasks}
      </div>
    )
  }

}

Tasks.propTypes = {

}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({dispatchAction: $R_Tasks.dispatchAction}, dispatch)
  }
}

const mapStateToProps = (state, ownProps) => { 
  return {
    tasks: state.tasks
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);