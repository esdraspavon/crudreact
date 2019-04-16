import React, { Component } from "react";
import { Link } from "react-router-dom";
class Post extends Component {
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
          <button
            onClick={() => this.props.deletePost(id)}
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
