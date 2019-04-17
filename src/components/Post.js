import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
class Post extends Component {
  confirmDelete = () => {
    const { id } = this.props.data;
    Swal.fire({
      title: "Estás seguro?",
      text: "Esta acción no se puede deshacer!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar!",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.value) {
        this.props.deletePost(id);
        Swal.fire("Eliminado!", "El post ha sido eliminado.", "success");
      }
    });
  };

  render() {
    const { id, title } = this.props.data;
    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>
          <Link to={`/posts/${id}`} className="btn btn-primary">
            Ver
          </Link>
          <Link to={`/editar/${id}`} className="btn btn-warning">
            Editar
          </Link>
          <button
            onClick={this.confirmDelete}
            type="button"
            className="btn btn-danger"
          >
            Borrar
          </button>
        </td>
      </tr>
    );
  }
}

export default Post;
