import profilePic from "./assets/profile.jpg"

function Card(){
    return(
        <div className="card">
            <img className="card-img" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Leshan</h2>
            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing </p>
        </div>
    );
}

export default Card