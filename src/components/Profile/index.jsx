import "./profile.css";

function Profile() {
  return (
    <div className="full-profile">
      <img src={require("../../images/Headshot.jpg")} alt="Jacob's Headshot" />
      <div className="profile-content">
        <h2>Jacob Machlis</h2>
        <p>
          Jacob Machlis is a programmer who studied at the Columbia University
          Web Development Bootcamp and at the General Assembly Python
          Programming Bootcamp,. He specializes in HTML, CSS, JavaScript, and
          React for Front-End Development. He is also proficient in back-end
          development using Python, Flask, and AWS services. He can speak
          conversation Japanese and lived in Japan for over 3 years. He is
          hoping to return very soon.
        </p>
      </div>
    </div>
  );
}

export default Profile;
