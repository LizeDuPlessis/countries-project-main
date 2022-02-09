import "./index.css";
import { useState, useEffect } from "react";
import CountryItems from "./Components/CountryItems";
import Header from "./Components/Header";

function App() {
  const url_all = "https://restcountries.com/v3.1/all";

  const [countries, setCountries] = useState([]);
  const [userSubmitSearch, setUserSubmitSearch] = useState("");
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    try {
      const getNewCountries = async () => {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${userSubmitSearch}`
        );
        const data = await res.json();
        setCountries(data);
      };
      getNewCountries();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    try {
      const getCountries = async () => {
        const res = await fetch(url_all);
        const data = await res.json();
        setCountries(data);
      };
      getCountries();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <h2>{userSubmitSearch}</h2>
        <form role="search" onSubmit={handleSubmitSearch}>
          <label htmlFor="search" className="visually-hidden">
            Search:
            <input
              title="search for a country"
              aria-label="Enter your search term"
              id="search"
              name="search"
              type="search"
              placeholder="Search country here..."
              onChange={(e) => setUserSubmitSearch(e.target.value)}
              required
            />
          </label>

          <button type="submit">Submit</button>
        </form>

        <main>
          <div>
            {countries.length > 0 ? (
              countries.map((country) => (
                <CountryItems
                  key={country.id}
                  country={country}
                  handleShowMore={handleShowMore}
                  showMore={showMore}
                />
              ))
            ) : (
              <h1 className="errMsg" role="status">
                Not Found!
              </h1>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
