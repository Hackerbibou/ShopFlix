const axios = require('axios');


function indexMovie(req, res) {
  
  const data = {
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
  };
  const options1 = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsInN1YiI6IjY0OWEwZGI0ZmVkNTk3MDEyY2ViNWVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r23OhEtDFB5Bv1JyLo6qvMQTWtQ3fB9Lng7nAHNITkk'
    }
  };
  const options2 = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsInN1YiI6IjY0OWEwZGI0ZmVkNTk3MDEyY2ViNWVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r23OhEtDFB5Bv1JyLo6qvMQTWtQ3fB9Lng7nAHNITkk'
    }
  };
  const options3 = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsInN1YiI6IjY0OWEwZGI0ZmVkNTk3MDEyY2ViNWVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r23OhEtDFB5Bv1JyLo6qvMQTWtQ3fB9Lng7nAHNITkk'
    }
  };
  const options4 = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsInN1YiI6IjY0OWEwZGI0ZmVkNTk3MDEyY2ViNWVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r23OhEtDFB5Bv1JyLo6qvMQTWtQ3fB9Lng7nAHNITkk'
    }
  };
  const options5 = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27%2C80',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsInN1YiI6IjY0OWEwZGI0ZmVkNTk3MDEyY2ViNWVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r23OhEtDFB5Bv1JyLo6qvMQTWtQ3fB9Lng7nAHNITkk'
    }
  };
  const options6 = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28%2C12',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsInN1YiI6IjY0OWEwZGI0ZmVkNTk3MDEyY2ViNWVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r23OhEtDFB5Bv1JyLo6qvMQTWtQ3fB9Lng7nAHNITkk'
    }
  };
  const options7 = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&certification_country=US&certification.lte=PG&with_genres=PG%2c16%2C10751%2C14&include_adult=false&sort_by=popularity.desc',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsInN1YiI6IjY0OWEwZGI0ZmVkNTk3MDEyY2ViNWVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r23OhEtDFB5Bv1JyLo6qvMQTWtQ3fB9Lng7nAHNITkk'
    }
  };

    
    
  axios
  .request(options1)
    .then((rizz) => rizz.data)
    .then((john) => {
      data.a = [...john.results];
    })
    .catch(error=>console.log(error))
    axios
  .request(options2)
    .then((rizz) => rizz.data)
    .then((john) => {
      data.b = [...john.results];
    })
    .catch(error=>console.log(error))
    axios
  .request(options3)
    .then((rizz) => rizz.data)
    .then((john) => {
      data.c = [...john.results];
    })
    .catch(error=>console.log(error))
    axios
  .request(options4)
    .then((rizz) => rizz.data)
    .then((john) => {
      data.d = [...john.results];
    })
    .catch(error=>console.log(error))
    axios
    .request(options5)
    .then((rizz) => rizz.data)
    .then((john) => {
      data.e = [...john.results];
    })
    .catch(error=>console.log(error))
    axios
  .request(options6)
    .then((rizz) => rizz.data)
    .then((john) => {
      data.f = [...john.results];
    })
    .catch(error=>console.log(error))
    axios
    .request(options7)
    .then((rizz) => rizz.data)
    .then((john) => {
      data.g = [...john.results];
      res.json(data)

    })
    .catch((err) => console.error('error:' + err));
}

function searchApi(req, res){

  const options = {
    method: 'GET',
    url : `https://api.themoviedb.org/3/search/movie?query=${req.params.movie}&include_adult=false&language=en-US&page=1`,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsInN1YiI6IjY0OWEwZGI0ZmVkNTk3MDEyY2ViNWVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r23OhEtDFB5Bv1JyLo6qvMQTWtQ3fB9Lng7nAHNITkk',
    },
  };

  axios.request(options)
  .then((rizz)=>rizz.data)
  .then((searchApi)=>{

    res.status(200).json(searchApi)

  })
  .catch(error=>console.log(error))
}

function trendingPages(req, res){
 
  const options = {
    method: 'GET',
    url : `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${req.params.page}&sort_by=popularity.desc`,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsInN1YiI6IjY0OWEwZGI0ZmVkNTk3MDEyY2ViNWVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r23OhEtDFB5Bv1JyLo6qvMQTWtQ3fB9Lng7nAHNITkk',
    },
  };
  axios.request(options)
  .then((rizz)=>rizz.data)
  .then((Api)=>{

    res.status(200).json(Api)

  })
  .catch(error=>console.log(error))
}

function kidsPages(req, res){
  
  const options = {
    method: 'GET',
    url : `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&certification_country=US&certification.lte=PG&with_genres=PG%2c16%2C10751%2C14&include_adult=false&sort_by=popularity.desc&page=${req.params.page}`,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsInN1YiI6IjY0OWEwZGI0ZmVkNTk3MDEyY2ViNWVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r23OhEtDFB5Bv1JyLo6qvMQTWtQ3fB9Lng7nAHNITkk',
    },
  };
  axios
  .request(options)
  .then((rizz)=>rizz.data)
  .then((Api)=>{

    res.status(200).json(Api)

  })
  .catch(error=>console.log(error))
}

function upcomingPages(req, res){
  const options = {
    method: 'GET',
    url : `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${req.params.page}`,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTVmOWQzZjFlODc0ZmJlYTYwNzg0OTRhNTExYTZkNCIsInN1YiI6IjY0OWEwZGI0ZmVkNTk3MDEyY2ViNWVjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r23OhEtDFB5Bv1JyLo6qvMQTWtQ3fB9Lng7nAHNITkk',
    },
  };
  axios
  .request(options)
  .then((rizz)=>rizz.data)
  .then((Api)=>{

    res.status(200).json(Api)

  })
  .catch(error=>console.log(error))
}

module.exports = {
  indexMovie,
  searchApi,
  trendingPages,
  upcomingPages,
  kidsPages,
};
