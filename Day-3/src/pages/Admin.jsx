import CustomSide from "../components/CustomSide";
import'../assets/css/Admin.css';
import FaqItem from "../components/FAQItem";

const Dashboard = () =>{
    return(
        <div className="main_cont">
            <aside>
                <CustomSide/>
                <FaqItem/>
            </aside>
            <section>
                <p>Hello</p>
            </section>
        </div>

    );
};
export default Dashboard;
