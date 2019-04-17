import React, { Component } from "react";

class EditPost extends Component {
  //crear los refs
  titleRef = React.createRef();
  contentRef = React.createRef();

  editPost = e => {
    e.preventDefault();
    //leer los refs
    const post = {
      title: this.titleRef.current.value,
      body: this.contentRef.current.value,
      userId: 1,
      id: this.props.post.id
    };
    //enviar por props o peticion de axios
    this.props.editPost(post);
  };

  loadForm = () => {
    if (!this.props.post) return null;
    const { title, body } = this.props.post;
    return (
      <form onSubmit={this.editPost} className="col-8">
        <legend className="text-center">Editar post</legend>
        <div className="form-group">
          <label>Titulo del post: </label>
          <input
            type="text"
            className="form-control"
            defaultValue={title}
            ref={this.titleRef}
          />
        </div>
        <div className="form-group">
          <label>Contenido: </label>
          <textarea
            className="form-control"
            placeholder="Contenido"
            ref={this.contentRef}
            defaultValue={body}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar Cambios
        </button>
      </form>
    );
  };

  render() {
    return <React.Fragment>{this.loadForm()}</React.Fragment>;
  }
}

export default EditPost;
