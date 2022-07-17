import { useCallback, useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import iMovies from "../models/iMovies";
import { getMovies } from "../services/favourites";
import Card from "./Card";
import styled from "styled-components";
import NavScroll from "./NavScroll";
import Details from "./Details";

const Favourites = () => {
  const [movies, setMovies] = useState<iMovies[]>([] as iMovies[]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currMovie, setCurrMovie] = useState<iMovies | null>(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const m = await getMovies();
        setMovies(m);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const Call = useCallback(() => {
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(search));
    if (!filteredMovies.length) return (
        <Found>No Movies Found</Found>
    );

    
    return filteredMovies.map((movie) => {
      return (
        <Card
          key={movie.id}
          movie={movie}
          openMovie={setCurrMovie}
          isFav={"true"}
          setMoviesFav={setMovies}
        />
      );
    
    });
  }, [movies, search, setMovies]);

  return currMovie ? (
    <Details movie={currMovie} closeMovie={setCurrMovie} />
  ) : (
    <>
      <NavScroll search={search} setSearch={setSearch} />
      <Grid>
        {loading && (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {!loading && error && <Alert variant="danger">{error.message}</Alert>}
        {!loading && !error && <>{Call()}</>}
      </Grid>
    </>
  );
};

const NoMovie=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  overflow: hidden;
`;
const Found=styled.div`
  display: flex;
  height: 95vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export default Favourites;
