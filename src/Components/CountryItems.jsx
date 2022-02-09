import React from "react";
import Card from "./Card";

function CountryItems({ country, handleShowMore, showMore }) {
  return (
    <Card>
      <h1>{country.name.common}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum labore
        quam natus laboriosam aut fugiat illum error at reiciendis vel
        repellendus ipsam quas, nisi et itaque tempora nihil? Officiis, quaerat.
      </p>
      <img src={country.flags.png} alt="flag of country" />
      <div>
        <button className="showmore-btn" onClick={handleShowMore}>
          show more
        </button>

        {showMore && (
          <div className="moreinfo">
            <h3>Population: </h3>
            {country.population}
            <h3>Timezone:</h3> {country.timezones}
            <h3>Coat of Arms</h3>{" "}
            <img src={country.coatOfArms.png} alt="coat of arms" />
          </div>
        )}
      </div>
    </Card>
  );
}

export default CountryItems;
