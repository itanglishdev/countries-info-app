import { Link } from "react-router-dom";
import MainPage from "./MainPage";

function BackButton() {
  return (
    <div className="back-button">
      <Link to='/' >
      <p>New nation</p>
      </Link>
    </div>
    );
}

export default BackButton;