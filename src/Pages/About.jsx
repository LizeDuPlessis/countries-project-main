import React from "react";

function About() {
  return (
    <div className="about-group">
      <h1>Countries World Wide</h1>
      <p>
        A website with countries to search interesting information about each,
        such as the coat of arms, flag, population, etc.
        <a href="/home"> Countries all over the world</a> Created by
        <strong>
          <a href="https://github.com/LizeDuPlessis/LizeDuPlessis">
            {" "}
            Lize du Plessis
          </a>
        </strong>
      </p>
    </div>
  );
}

export default About;
