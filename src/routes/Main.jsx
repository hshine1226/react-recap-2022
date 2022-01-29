import { Link } from "react-router-dom";
import CoinTracker from "../components/CoinTracker";
import Todos from "../components/Todos";
function Main() {
  return (
    <div>
      <Todos></Todos>
      <CoinTracker></CoinTracker>
      <Link to={"/movie"}>
        <h1>Go to Movie App</h1>
      </Link>
    </div>
  );
}
export default Main;
