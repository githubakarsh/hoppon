import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { googleLogout } from '@react-oauth/google';
import { setUserAuthDetails } from '../../stateManagement/slices/userAuthSlice';

export const AppNavbar = () => {
  const userAuth = useSelector(state => state.userAuthDetails);
  const { userAuthDetails : {verified_email} } = userAuth;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logout = () => {
      googleLogout();
      dispatch(setUserAuthDetails({}));
    };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>Hoppon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {verified_email && <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/events')}>Events</Nav.Link>
            <Nav.Link onClick={() => navigate('/join-event')}>Join a event</Nav.Link>
            <Nav.Link href="#your events">Your events</Nav.Link>
            <Nav.Link onClick={() => navigate('/profile')}>Profile</Nav.Link>
            <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>}
      </Container>
    </Navbar>
  );
}

