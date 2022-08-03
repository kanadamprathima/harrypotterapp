import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const [student, setStudent] = useState("");
  const params = useParams();
  const getStudentDetails = async () => {
    const response = await axios.get(
      `https://hp-assessment-api.herokuapp.com/hp/character/${params.id}`
    );
    console.log(response);
    setStudent(response.data);
  };

  useEffect(() => {
    getStudentDetails();
  }, []);

  return (
    <div>
      {student ? (
        <div>
          <h1>{student.name}</h1>
          <img src={student.imgUrl} alt="pic" />
          <p>BORN in: {student.born}</p>
          <p>HouseID: {student.houseId}</p>
          <p>HOUSENAME: {student.house.name}</p>
          <p>QUOTE: {student.quote}</p>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};
export default DetailsPage;
