import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

class Todos extends React.Component  {
    
    render() {
        return this.props.todos.map( (todo) => (
            <TodoItem delTodo={this.props.delTodo} key={ todo.id } todo={todo} markComplete={this.props.markComplete} />
        ) );
      }
}
//proptypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos;
