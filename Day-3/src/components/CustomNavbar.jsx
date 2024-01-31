import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

const CustomNavbar = () => {
    return (
        <div className="bo">
            <Navbar appearance='subtle'>
            <Navbar.Brand href="#">
  <img
    alt="Chess Logo"
    src="https://t4.ftcdn.net/jpg/01/01/34/35/240_F_101343588_ZW7bpiG2qXGHb1oxf09H5Bgw7yvhL3Gk.jpg"
    width="25"
    height="25"
    className="d-inline-block align-top"
  /> CHESS ACADEMY
</Navbar.Brand>
    <Nav>
      <Nav.Item icon={<HomeIcon />}> <Link to={`/home`}>Home</Link></Nav.Item>
      <Nav.Item>   <Link to={`/about`}> About</Link></Nav.Item>
      <Nav.Item>   <Link to={`/contact`}>Contact</Link></Nav.Item>
      <Nav.Item>   <Link to={`/card`}>Courses</Link></Nav.Item>
    </Nav>
    <Nav pullRight>
    <Nav.Item> <Link to={`/login`}>Logout</Link></Nav.Item>
    </Nav>
  </Navbar>
        </div>
    );
}

export default CustomNavbar;