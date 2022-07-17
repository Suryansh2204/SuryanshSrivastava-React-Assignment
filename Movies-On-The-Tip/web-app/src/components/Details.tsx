import { useState } from "react";
import styled from "styled-components";
import iMovies from "../models/iMovies";
import DetailsNav from "./DetailsNav";

type Props = { movie: iMovies, closeMovie:Function };
const Details = ({ movie,closeMovie }: Props) => {
  const [preview, setPreview] = useState(true);
  function display() {
    return (
      <ImgDisp className="preview" onClick={() => setPreview(true)}>
        <img src={`/img/${movie.poster}`} alt="" />
      </ImgDisp>
    );
  }
  function avgRating() {
    let sum = 0;
    for (let x = 0; x < movie.ratings.length; x++) {
      sum += movie.ratings[x];
    }
    return (Math.round((sum / movie.ratings.length) * 10) / 10).toFixed(1);
  }
  return (
    <>
    <DetailsNav closeMovie={closeMovie}/>
      {preview ? (
        <Wrapper>
          <Poster onClick={() => setPreview(false)}>
            <img src={`/img/${movie.poster}`} alt="" />
            <div>Preview</div>
          </Poster>
          <Info>
            <table>
              <tr>
                <th colSpan={3}>
                  <h2>{movie.title}</h2>
                  <hr />
                </th>
              </tr>
              <tr>
                <td id="td1">Imdb Rating</td>

                <td>{movie.imdbRating}</td>
              </tr>
              <tr>
                <td>Content Rating</td>

                <td>{movie.contentRating}</td>
              </tr>
              <tr>
                <td>Average Rating</td>
                <td>{avgRating()}</td>
              </tr>
              <tr>
                <td>Duration</td>

                <td>{movie.duration}</td>
              </tr>
              <tr>
                <td>Genres</td>

                <td>{movie.genres}</td>
              </tr>
              <tr>
                <td>Actors</td>

                <td>{movie.actors}</td>
              </tr>
              <tr>
                <td>Release Date</td>

                <td>{movie.releaseDate}</td>
              </tr>
              <tr>
                <td>Story line</td>

                <td>{movie.storyline}</td>
              </tr>
            </table>
          </Info>
        </Wrapper>
      ) : (
        display()
      )}
    </>
  );
};

const ImgDisp = styled.div`
  height: 90vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  .preview {
    font-size: large;
    visibility: hidden;

    img {
      z-index: 2;
      position: fixed;
      height: 500px;
      width: 400px;
      align-self: center;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
`;
const Poster = styled.div`
  margin: 15px;
  img {
    height: 400px;
    width: 300px;
  }
  &:hover {
    cursor: pointer;
    div {
      z-index: 1;
    }
  }
  div {
    height: 400px;
    position: relative;
    bottom: 400px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: large;
    color: rgba(255, 255, 255, 0.7);
    z-index: -1;
  }
  div:active {
    .preview {
      visibility: visible;
    }
  }
`;
const Info = styled.div`
  margin: 15px;

  table {
    width: 100%;
  }
  #td1 {
    width: 30%;
  }
`;

export default Details;
