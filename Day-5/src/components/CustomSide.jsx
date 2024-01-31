import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import {Box} from "@mui/material";
import { Sidenav, Nav } from 'rsuite';
import '../assets/css/Sidebar.css';
import Admin from '../assets/images/a2.jpg';
import {useNavigate } from 'react-router-dom';
const CustomSide = () =>{
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login');
  };
  const handleNavigateToFAQ = () => {
    navigate('/faq');
  };
  const handleContactInfo = () =>{
    navigate('/table');
  };
  const handleForm = () =>{
    navigate('/pform');
  }
    return(
      <div className="screen1">
      <div style={{ width: 300 }}>
      <Sidenav appearance='subtle' defaultOpenKeys={['3', '4']} style={{height: 860, backgroundColor: '#0f0c29'}}>
      <Box mb="25px">
      <Box display="flex" justifyContent="center" alignItems="center">
        <img 
        alt="profile-user"
        width="100px"
        height="100px"
        src={Admin}
        style={{cursor:"pointer",borderRadius:"50px",marginTop:"50px"}}
        />
        </Box>
        </Box>
        <h3 style={{textAlign:"center",color:"yellow",marginBottom:"10px"}}>Elza</h3>
      <Sidenav.Body>
        <Nav activeKey="1">
          <Nav.Item eventKey="1" style={{display: 'flex', flexDirection: 'row',alignItems:'center'}}>
          <HomeIcon />
            <span>Dashboard</span>
          </Nav.Item>
          <Nav.Item eventKey="2" style={{display: 'flex', flexDirection: 'row',alignItems:'center'}} onClick={handleContactInfo}>
          <ContactsIcon/>
          <span>Contacts Information</span>
          </Nav.Item>
          <Nav.Item eventKey="3" style={{display: 'flex', flexDirection:'row',alignItems:'center'}} onClick={handleForm}>
          <PermIdentityIcon/>
          <span>Profile Form</span>
          </Nav.Item>
          <Nav.Item eventKey="4" style={{display: 'flex', flexDirection: 'row',alignItems:'center'}} onClick={handleNavigateToFAQ}>
          <HelpOutlineIcon/>
          <span>FAQ Page</span>
          </Nav.Item>
          <Nav.Item eventKey="1" style={{display: 'flex', flexDirection: 'row',alignItems:'center'}} onClick={handleLogout}>
          <LogoutIcon/>
          <span>Logout</span>
          </Nav.Item>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
  </div>
 
    );
}
export default CustomSide;