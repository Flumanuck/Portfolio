import { useState } from "react";
import sites from "../db/sites";

function Body() {
  const [selectedSite, setSelectedSite] = useState(sites[0]);

  const handleClick = (event) => {
    const selectedName = event.target.innerText;
    const newSelectedSite = sites.filter((site) => {
      return site.name === selectedName;
    });
    setSelectedSite(newSelectedSite[0]);
  };

  return (
    <div className="main-body">
      <ul className="site-links">
        {sites.map((site) => {
          return (
            <li key={site.id}>
              <button onClick={handleClick}>{site.name}</button>
            </li>
          );
        })}
      </ul>
      <div className="site-space">
        <a
          className="site-img"
          href={selectedSite.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={selectedSite.image} alt={selectedSite.alt} />
        </a>
        <h2>{selectedSite.name}</h2>
        <div className="site-description">
          <p>{selectedSite.description}</p>
          <p>
            <a href={selectedSite.github}>Github</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
