import { useState } from "react";
import sites from "../db/sites";

function Body() {
  const [selectedSite, setSelectedSite] = useState(sites[0]);

  const handleClick = (e) => {
    const selectedName = e.target.innerText;
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
          <img src={selectedSite.image} alt="filler" />
        </a>
        <h2>{selectedSite.name}</h2>
        <div className="site-description">
          <p>{selectedSite.description}</p>
          <p>
            Github: <a href={selectedSite.github}>{selectedSite.github}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
