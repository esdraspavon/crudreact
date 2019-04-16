import React, { Component } from "react";

class Form extends Component {
  //crear los refs
  titleRef = React.createRef();
  contentRef = React.createRef();

  createPost = e => {
    e.preventDefault();
    //leer los refs
    const post = {
      title: this.titleRef.current.value,
      body: this.contentRef.current.value,
      userId: 1
    };
    //enviar por props o peticion de axios
    this.props.createPost(post);
  };

  render() {
    return (
      <form onSubmit={this.createPost} className="col-8">
        <legend className="text-center">Crear Nuevo Post</legend>
        <div className="form-group">
          <label>Titulo del post: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Titulo del post"
            ref={this.titleRef}
          />
        </div>
        <div className="form-group">
          <label>Contenido: </label>
          <textarea
            className="form-control"
            placeholder="Contenido"
            ref={this.contentRef}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
      </form>
    );
  }
}

export default Form;
