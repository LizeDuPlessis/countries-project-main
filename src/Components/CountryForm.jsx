import React from "react";
import CountryItems from "./CountryItems";
import { useState, useEffect } from "react";

function CountryForm() {
  const url_all = "https://restcountries.com/v3.1/all";

  const [countries, setCountries] = useState([]);
  const [userSubmitSearch, setUserSubmitSearch] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    const getNewCountries = async () => {
      setError(false);
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${userSubmitSearch}`
        );
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
      // setError(true);
    };

    getNewCountries();
  };

  useEffect(() => {
    const getCountries = async () => {
      setError(false);
      setIsLoading(true);

      try {
        const res = await fetch(url_all);
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        setError(true);
      }
      // setError(true);
      setIsLoading(false);
    };
    getCountries();
  }, []);

  console.log(error, "error");
  return (
    <div>
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
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              countries &&
              countries.map((country) => (
                <CountryItems
                  key={country.id}
                  country={country}
                  handleShowMore={handleShowMore}
                  showMore={showMore}
                />
              ))
            )}
            {error && <h1>Something went wrong!</h1>}
          </div>
        </main>
      </div>
    </div>
  );
}

export default CountryForm;
