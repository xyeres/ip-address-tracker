import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import ResultBar from "./components/ResultBar/ResultBar";
import buildAPIQuery from "./helpers/buildAPIQuery";
import secrets from './keys.json';

function App() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errResponse, setErrResponse] = useState(null);

  let baseUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${secrets.apikey}&`

  async function fetchGeoData(url) {
    try {
      setErrResponse(null)
      setIsLoading(true)
      let res = await fetch(url)
      let json = await res.json()
      if (json.code === 422) {
        setErrResponse(json.messages)
        setIsLoading(false)
        throw new Error(json.messages)
      }
      setData(json)
      setIsLoading(false)
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  }

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const url = buildAPIQuery(baseUrl, { ipAddress: query })
    fetchGeoData(url)
  }

  useEffect(() => {
    const url = buildAPIQuery(baseUrl, { ipAddress: null })
    fetchGeoData(url)

  }, [baseUrl]);



  return (
    <div className="flex items-center flex-col">
      <Header
        query={query}
        handleQueryChange={handleQueryChange}
        handleSearchSubmit={handleSearchSubmit}
        setQuery={setQuery}
      />
      <ResultBar
        data={data}
        isLoading={isLoading}
        errResponse={errResponse}
      />
      <Map />
    </div>
  );
}

export default App;
