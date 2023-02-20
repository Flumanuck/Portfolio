import "./profile.css";

function Profile() {
  return (
    <div className="full-profile">
      <img src={require("../../images/Headshot.jpg")} alt="Jacob's Headshot" />
      <div className="profile-content">
        <h2>Jacob Machlis</h2>
        <p>
          Jacob Machlis is a programmer who studied at the Columbia University
          Programming Boot Camp. He specializes in HTML, CSS, JavaScript, and
          React for Front-End Development. He is also proficient in Japanese and
          lived in Japan for 3 years.
        </p>
      </div>
    </div>
  );
}

export default Profile;
