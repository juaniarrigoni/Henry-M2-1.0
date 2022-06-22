import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addMovieFavorite, getMovies } from "../../actions";
import "./Buscador.css";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.movies?.map((m) => (
            <div key={m.midbID}>
              <Link to={`/movie/${m.imdbId}`}>
                <li>{m.Title}</li>
                <button
                  onClick={this.props.addMovieFavorite({
                    m,
                  })}
                >
                  FAV
                </button>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { movies: state.moviesLoaded };
};
export default connect(mapStateToProps, { getMovies, addMovieFavorite })(
  Buscador
);
