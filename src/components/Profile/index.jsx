import "./profile.css";

function Profile() {
  return (
    <div className="full-profile">
      <img src={require("../../images/Headshot.jpg")} alt="Jacob's Headshot" />
      <div className="profile-content">
        <h2>Jacob Machlis</h2>
        <p>
          Jacob Machlis is a full stack programmer. He specializes in JavaScript and Typescript
          and he often uses React for Front-End Development. He is also proficient in back-end
          technologies and languages such as Python, Node, and Express.js, as well as databasing software such as PostgresQL.  He can speak
          conversational Japanese and lived in Japan for over 3 years. He very much enjoys Japanese culture and is eager to return to Japan on a long term basis.
        </p>
      </div>
    </div>
  );
}

export default Profile;
