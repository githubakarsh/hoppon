import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";

export const Profile = () => {
  const userDetails = useSelector((state) => state.userAuthDetails);
  const { userAuthDetails } = userDetails;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={userAuthDetails.picture} />
        <Card.Body>
          <Card.Title>Personal details</Card.Title>
          <Card.Text>
            <div>
              Name : <>{userAuthDetails.name}</>
            </div>
            <div>
              Email : <>{userAuthDetails.email}</>
            </div>
            <div>
              Id : <>{userAuthDetails.id}</>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <div></div>
    </div>
  );
};
