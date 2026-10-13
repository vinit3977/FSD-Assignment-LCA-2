
function ProfileCard({ name, image, description }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} />

      <h2>{name}</h2>

      <p>{description}</p>
    </div>
  );
}

export default ProfileCard;
