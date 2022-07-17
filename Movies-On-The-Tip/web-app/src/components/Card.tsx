import { useEffect, useState } from "react";
import styled from "styled-components";
import iMovies from "../models/iMovies";
import { addMovie, getMovies, removeMovie } from "../services/favourites";
import Alert from "./Alert";
import Details from "./Details";

type Props = {
  movie: iMovies,
  openMovie:Function
  isFav:string
  setMoviesFav?:Function
};

const Card = ({ movie,openMovie,isFav, setMoviesFav }: Props) => {
  console.log("received");
  const [movies, setMovies] = useState<iMovies[]>([] as iMovies[]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const m = await getMovies();
        setMovies(m);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [setMovies]);

  const AddToFav = async () => {
    let added = false;
    movies.forEach((m) => {
      if (m.title === movie.title) {
        added = true;
        alert("Already Added");
      }
    });
    if (added == false) {
    
      const update = await addMovie(movie);
      setMovies([...movies, update]);
      alert("Added to Favourites");
    }
  };
  const removeFrmFav = async () => {
    let present = false;
    movies.map((m) => {
      if (m.title === movie.title) {
        present = true;
      }
    });
    
    if (present) {
      await removeMovie(movie);
      setMoviesFav && setMoviesFav((prevMovies:iMovies[]) => prevMovies.filter(_movie => _movie.title !== movie.title));
    }
  };

  

  return (
    <>
      <Wrapper
        className="mx-3 my-2"
        >
        <img src={`/img/${movie.poster}`} alt=""
        onClick={() => {
          openMovie(movie);
        }}
        
        />
        <h5>{`${movie.title}`}</h5>

        {isFav === 'true' ? (
          <div>
            <p onClick={removeFrmFav}>Remove from favourites </p>
            <img src="broken-heart-ico.svg" alt="" />
          </div>
        ) : (
          <div>
            <p onClick={AddToFav}>Add to favourites </p>
            <img src="heart-ico.svg" alt="" />
          </div>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 350px;
  width: 220px;
  background-color: #d4efef;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px 0px;
  border-radius: 10px;
  img {
    height: 240px;
    width: 220px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  h5 {
    position: absolute;
    width: 200px;
    margin-top: 5px;
    margin-left: 8px;
    margin-bottom: -10px;
  }
  div {
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    margin-top: 0;
    position: relative;
    top: 80px;
  }
  div p {
    margin: 0;
  }
  div img {
    margin-left: 8px;
    height: 20px;
    width: 20px;
  }
  div:hover {
    font-weight: bolder;
    cursor: pointer;
  }
  & :hover{
    cursor: pointer;
  }
`;

export default Card;
