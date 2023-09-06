import logo from './logo.svg';
import './App.css';
import Row from './Components/Row';
import request from './Components/Request';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';

function App ()
{
  return (
    <div className="App">
      < Navbar />
      <Banner/>
      <Row title="Netflix Originals" fetchURL={ request.fetchNetflixOriginals } isLargeRow={ true} />
      <Row title="Trending Movies" fetchURL={request.fetchTrending} />
      <Row title="Top Rated" fetchURL={request.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={request.fetchCommedyMovies} />
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
     <Row title="Romance Movies" fetchURL={request.fetchRomanMovies} />
     <Row title="Documentaries Movies" fetchURL = {request.fetchDocumentaries} /> 
    </div>
  );
}
export default App;
