import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {tareas} from './tareas.json';

import FormularioDeTarea from './components/FormularioDeTarea';
class App extends Component {
  constructor() {
    super();
    this.state = {
      tareas
    }
     this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
   tareas: this.state.tareas.filter((e, i) => {
     return i !== index
   })
 });
  }

  handleAddTodo(tarea) {
  this.setState({
    tareas: [...this.state.tareas, tarea]
  })
}
  render() {
const tareas = this.state.tareas.map ((tarea, indice) => {
return (
<div className="col md-4" key={indice}>
  <div className="card mt-4">
  <div className="card-title text-center">
    <h3>{tarea.titulo}</h3>
    <span className= "badge badge-pill badge-danger ml-2">
     {tarea.prioridad}
    </span>
  </div>
  <div className="card-body">
      {tarea.descripcion}
  </div>
  <div className="card-footer">
  <button className="btn btn-danger"
  onClick={this.removeTodo.bind(this, indice)}>
  Eliminar
  </button>
  </div>
</div>
</div>
)
});
    return (
    <div className="App">

    <nav className= "navbar navbar-dark bg-dark">
      <a className="navbar-brand" href= "/">
      Tareas de la Universidad
      <span className= "badge badge-pill badge-light ml-2">
      {this.state.tareas.length}
      </span>
      </a>
    </nav>

     <div className="container">
        <div className="row mt-4">

          <div className= "col-md-4 text-center">
            <img src={logo} className="App-logo" alt="logo" />
        <FormularioDeTarea  onAddTodo= {this.handleAddTodo}></FormularioDeTarea>
     </div>

    <div className= "col-md-8">
    <div className= "row">
    {tareas}
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
