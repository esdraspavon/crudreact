import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <form className="col-8">
        <legend className="text-center">Crear Nuevo Post</legend>
        <div className="form-group">
          <label>Titulo del post: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Titulo del post"
          />
        </div>
        <div className="form-group">
          <label>Contenido: </label>
          <textarea className="form-control" placeholder="Contenido" />
        </div>
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </form>
    );
  }
}

export default Form;
