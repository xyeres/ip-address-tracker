import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import ResultBar from "./components/ResultBar/ResultBar";
import buildAPIQuery from "./helpers/buildAPIQuery";
import secrets from './keys.json';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  let baseUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${secrets.apikey}&`

  async function fetchGeoData(url) {
    try {
      setError(null)
      setIsLoading(true)

      let res = await fetch(url)
      let json = await res.json()
      if (json.code === 422) {
        let error = new Error(json.messages)
        setError(error)
        throw error
      }
      setData(json)
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false)
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
    <>
      <div className="flex items-center flex-col relative mx-6">
        <Header
          query={query}
          handleQueryChange={handleQueryChange}
          handleSearchSubmit={handleSearchSubmit}
          setQuery={setQuery}
        />
        <ResultBar
          data={data}
          isLoading={isLoading}
          error={error}
        />
      </div>
      <Map isLoading={isLoading} data={data} />
    </>
  );
}

export default App;
