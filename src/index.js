import React from 'react';
import ReactDOM from 'react-dom';

const exampleTodo = [
  {id:0, text:"밥먹기"},
  {id:1, text:"놀기"},
  {id:2, text:"야구하기"},
  {id:3, text:"쇼핑하기"},
  {id:4, text:"공부하기"}
];

class Delete extends React.Component {

  deleteTodo(e) {
    e.target.parentNode.remove();
  }

  render() {    
    return (
      <button onClick={this.deleteTodo}>삭제</button>
    )
  }
}

class Row extends React.Component {
  
  render() {
    return (
      <tr>
        <p>{this.props.todo}</p>
        <Delete/>
      </tr>
    )
  }
}

class List extends React.Component {
  render() {
    const row = [];
    exampleTodo.forEach((todo) => {
      row.push(<Row todo={todo.text} key={todo.id}/>);
    })
    return (
      <table>
        <td>
          {row}
        </td>
      </table>
    )
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFilterTextChange('');
    this.props.onAddTodo(this.props.currentText);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
        value={this.props.currentText}
        onChange={this.handleFilterTextChange}/>
        <button type="submit">추가하기</button>
      </form>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: ''
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.length = exampleTodo.length;
  }

  addTodo(data) {
    this.length++;
    exampleTodo.push({
      id: this.length,
      text: data
    })
  }

  handleFilterTextChange(text) {
    this.setState({
      currentText: text
    })
  }

  render() {
    return (
      <div>
        <Input 
        currentText = {this.state.currentText}
        onFilterTextChange={this.handleFilterTextChange}
        onAddTodo = {this.addTodo}
        />
        <List 
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);