import React, { Fragment } from 'react';
import {v4 as uuid} from "uuid"; 
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';
//import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Take out trash',
        completed: false
      },

      {
        id: uuid(),
        title: 'Dinner with Sandra',
        completed: true
      },

      {
        id: uuid(),
        title: 'Meeting with a client',
        completed: false
      }
    ]
  }

    //toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  //Delete Todo
  delTodo = (id) => {
    this.delTodo = (id) => {
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }
  }

  //Add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  render() {
      return (
        <Router>
          <div className="App">
            <div className='container'>
              <Header />
              <Route exact path="/" render={props => (
                <React.Fragment>
                 <AddTodo addTodo={this.addTodo} />
                 <Todos delTodo={this.delTodo} todos={this.state.todos} markComplete={ this.markComplete }
                 />
                 </React.Fragment>
              )} />

              <Route path='/about' component={About} />
            </div>
          </div>
        </Router>
      );
  }
}

export default App;
