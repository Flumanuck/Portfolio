function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        <a href="./index.html" className="name">
          Jacob Machlis
        </a>
      </h1>
      <ul className="contact-links">
        <li>
          <a href="tel:+18455216432">(845) 521-6432 </a>
        </li>
        <li>
          <a href="mailto:machlisj@gmail.com">machlisj@gmail.com</a>
        </li>
        <li>
          <a href="https://github.com/Flumanuck">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jacob-machlis-729695159/">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://docs.google.com/document/d/12yn2fOGpaq6NHm9xh28hhAnDLreJnpht/edit?usp=sharing&ouid=112036088503075494730&rtpof=true&sd=true">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
