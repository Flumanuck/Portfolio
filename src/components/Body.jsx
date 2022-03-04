import sites from "../db/sites";

function Body() {
  return (
    <div className="main-body">
      <ul className="site-links">
        <li>
          <a href="#site-a"> Site A </a>
        </li>
        <li>
          <a href="#site-b"> Site B </a>
        </li>
        <li>
          <a href="#site-c"> Site C </a>
        </li>
        <li>
          <a href="#site-d"> Site D </a>
        </li>
      </ul>
      <div className="site-space">
        <img src={require("../images/Prototype.png")} alt="filler" />
        <h2>Site Name Here</h2>
        <p className="site-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          reiciendis cupiditate recusandae aliquid exercitationem architecto
          neque ipsa sapiente in laborum blanditiis quas, cum sed ducimus
          pariatur ut minus quis autem.
        </p>
      </div>
    </div>
  );
}

export default Body;
