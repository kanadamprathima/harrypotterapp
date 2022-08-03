import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <blood>{props.blood}</blood>
      <Link to={`/character/${props.id}`}>
        <img src={props.img} alt="pic" />
      </Link>
      <p>HouseId: {props.houseId}</p>
      <p>BORN IN: {props.born}</p>
      <h3>Housename:{props.house}</h3>
      <Link to={`/character/${props.id}`}>
        <button>READ MORE</button>
      </Link>
    </div>
  );
};
export default CharacterCard;
