import { useEffect, useState } from 'react';
import './Movies.css';
import { getMovies } from '../../utilities/movies-api';
import { Link } from 'react-router-dom';
import PopUp from './Popup';
import { motion } from 'framer-motion';

export default function Movies({ list, setList, setTrending }) {
  const [rands, setRand] = useState(Math.floor(Math.random() * 20));
  const [description, setD] = useState('');
  const [movi, setMovi] = useState('');
  const [movies, setMovies] = useState({});
  const [popUp, setPopUp] = useState({});
  const [digit, setDigit] = useState(0);
  useEffect(() => {
    async function getMo() {
      const movis = await getMovies();
      setMovies({
        ...movies,
        a: movis.a,
        b: movis.b,
        c: movis.c,
        d: movis.d,
        e: movis.e,
        f: movis.f,
        g: movis.g,
      });
      setMovi(movis.a[rands]);
      setD(movis.a[rands].overview.slice(0, 150));
      setDigit(1);
    }
    getMo();

  },[])

  useEffect(() => {
    setTrending(movies.a);
  }, [movies]);

  useEffect(() => {
    if ((movies.a === undefined||movies.b === undefined||movies.c === undefined) && digit === 1) {
      window.location.reload();
    }
  }, []);



  return (
    <div className="App">
      <PopUp popUp={popUp} list={list} setList={setList}/>

      <div
        className="movieBanner"
        style={{
          backgroundImage: `url("https://www.themoviedb.org/t/p/original${movi.backdrop_path}")`,
        }}
      >
        <div className="bannertext">
          <h1 className="bah1">{movi.title}</h1>
          <div className="btnDiv">
            <button
              onClick={() => {
                setPopUp({ ...movi });
                document.querySelector('.popup').style.display = 'flex';
              }}
            >
              ADD LIST
            </button>
            <Link to="/list">
              <button>MY LIST</button>
            </Link>
          </div>
          <p>{description}...</p>
        </div>
        <div className="gradient" />
      </div>
      <h2 className="h2">Trending</h2>
      <div className="firstScroll">
        <div className="first">
          {movies.a ? (
            movies.a.map((movie, i) => {
              return (
                <motion.div
                  transition={{ delay: 0.2 * (i + 3) }}
                  initial={{ opacity: 0, delay: 0.1 * i }}
                  animate={{ opacity: 1, delay: 0.1 * i }}
                  exit={{ opacity: 0, delay: 0.1 * i }}
                  key={i}
                  onClick={() => {
                    setPopUp({ ...movie });
                    document.querySelector('.popup').style.display = 'flex';
  
                  }}
                  className="movie"
                  style={{
                    backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.poster_path}")`,
                  }}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
      <h2 className="h2">Top Rated</h2>
      <div className="secondScroll">
        <div className="second">
          {movies.b ? (
            movies.b.map((movie, i) => {
              return (
                movie.backdrop_path && (
                  <motion.div
                    transition={{ delay: 0.2 * (i + 3) }}
                    initial={{ opacity: 0, delay: 0.1 * i }}
                    animate={{ opacity: 1, delay: 0.1 * i }}
                    exit={{ opacity: 0, delay: 0.1 * i }}
                    key={i}
                    onClick={() => {
                      setPopUp({ ...movie });
                      document.querySelector('.popup').style.display = 'flex';
    
                    }}
                    className="movie1"
                    style={{
                      backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`,
                     
                    }}
                  />
                )
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
      <h2 className="h2">Now Playing</h2>
      <div className="secondScroll">
        <div className="second">
          {movies.c ? (
            movies.c.map((movie, i) => {
              return (
                movie.backdrop_path && (
                  <motion.div
                    transition={{ delay: 0.2 * (i + 3) }}
                    initial={{ opacity: 0, delay: 0.1 * i }}
                    animate={{ opacity: 1, delay: 0.1 * i }}
                    exit={{ opacity: 0, delay: 0.1 * i }}
                    key={i}
                    onClick={() => {
                      setPopUp({ ...movie });
                      document.querySelector('.popup').style.display = 'flex';
    
                    }}
                    className="movie1"
                    style={{
                      backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`,
                    }}
                  />
                )
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
      <h2 className="h2">Sci-fi Movies</h2>
      <div className="secondScroll">
        <div className="second">
          {movies.d ? (
            movies.d.map((movie, i) => {
              return (
                movie.backdrop_path && (
                  <motion.div
                    transition={{ delay: 0.2 * (i + 3) }}
                    initial={{ opacity: 0, delay: 0.1 * i }}
                    animate={{ opacity: 1, delay: 0.1 * i }}
                    exit={{ opacity: 0, delay: 0.1 * i }}
                    key={i}
                    onClick={() => {
                      setPopUp({ ...movie });
                      document.querySelector('.popup').style.display = 'flex';

    
                    }}
                    className="movie1"
                    style={{
                      backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`,
                    }}
                  />
                )
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
      <h2 className="h2">Crime and Horror</h2>
      <div className="secondScroll">
        <div className="second">
          {movies.e ? (
            movies.e.map((movie, i) => {
              return (
                movie.backdrop_path && (
                  <motion.div
                    transition={{ delay: 0.3 * i }}
                    initial={{ opacity: 0, delay: 0.1 * i }}
                    animate={{ opacity: 1, delay: 0.1 * i }}
                    exit={{ opacity: 0, delay: 0.1 * i }}
                    key={i}
                    onClick={() => {
                      setPopUp({ ...movie });
                      document.querySelector('.popup').style.display = 'flex';

    
                    }}
                    className="movie1"
                    style={{
                      backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`,
                    }}
                  />
                )
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
      <h2 className="h2">Action and Adventure</h2>
      <div className="secondScroll">
        <div className="second">
          {movies.f ? (
            movies.f.map((movie, i) => {
              return (
                movie.backdrop_path && (
                  <motion.div
                    transition={{ delay: 0.3 * i }}
                    initial={{ opacity: 0, delay: 0.1 * i }}
                    animate={{ opacity: 1, delay: 0.1 * i }}
                    exit={{ opacity: 0, delay: 0.1 * i }}
                    key={i}
                    onClick={() => {
                      setPopUp({ ...movie });
                      document.querySelector('.popup').style.display = 'flex';

    
                    }}
                    className="movie1"
                    style={{
                      backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`,
                    }}
                  />
                )
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
      <h2 className="h2">Family and Fantasy</h2>
      <div className="secondScroll">
        <div className="second">
          {movies.g ? (
            movies.g.map((movie, i) => {
              return (
                movie.backdrop_path && (
                  <motion.div
                    transition={{ delay: 0.3 * i }}
                    initial={{ opacity: 0, delay: 0.1 * i }}
                    animate={{ opacity: 1, delay: 0.1 * i }}
                    exit={{ opacity: 0, delay: 0.1 * i }}
                    key={i}
                    onClick={() => {
                      setPopUp({ ...movie });
                      document.querySelector('.popup').style.display = 'flex';

    
                    }}
                    className="movie1"
                    style={{
                      backgroundImage: `url("https://www.themoviedb.org/t/p/original${movie.backdrop_path}")`,
                    }}
                  />
                )
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
