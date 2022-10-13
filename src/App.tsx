import Header from "./components/Header";
import WeatherInfo from "./components/WeatherInfo";
import Search from './components/Search';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Spinner from "./components/Spinner";
import Api from "./apiType";
import BgImage from "./components/BgImage";

function App() {
  const [city, setCity] = useState('london');
  const [weather, setWeather] = useState<Api>();
  const [isLoading, setIsLoading] = useState(true);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const getWeatherFromApi = async() => 
    {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);

      if (res.status === 404)
      {
        toast.error('Couldn\'t get the weather');
      }
      else
      {
        const data = await res.json();

        setWeather(data);
      }
      setIsLoading(false);
    }

    getWeatherFromApi();
  }, [city]);

  if (isLoading)
  {
    return <Spinner />
  }

  return (
    <>
      <BgImage type={weather?.weather[0].description} />
      <a className="attribute" href='https://freepik.com' target='_blank' rel="noreferrer">Background images from freepik.com</a>
      <div className="container">
        <Header setDisplay={setDisplay} display={display} weather={weather} />
        {display && <Search setCity={setCity} setDisplay={setDisplay} setIsLoading={setIsLoading} />}
        <WeatherInfo weather={weather} />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
