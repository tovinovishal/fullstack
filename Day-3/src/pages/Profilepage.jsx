import { Container, Content,} from 'rsuite';
import CustomSide from '../components/CustomSide';
import TableWithEditOptions from '../components/Table';
import FAQPage from '../components/FAQ';
import ProfileForm from '../components/ProfileForm';

const Profilepage = () => {
    return (
        <div className="show-fake-browser sidebar-page" style={{ background: "#F4F8FA",}}>
      <Container>
        <CustomSide></CustomSide>
        <Container>
          <Content>
            <ProfileForm/>
            <TableWithEditOptions/>
            <FAQPage/>
          </Content>
        </Container>
      </Container>
    </div>
    );
};

export default Profilepage;