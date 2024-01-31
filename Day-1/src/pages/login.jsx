import { Link } from 'react-router-dom';
import'../assets/css/login.css';

const preventRefresh = (e) => {
	e.preventDefault();
};

export default function Login() {
	return (
		<div className="wrapper signIn">
			<div className="illustration" style={{ backgroundColor: 'yellow',backgroundSize:'cover' }}>
			</div>
			<div className="form">
				<div className="heading">LOGIN</div>
				<form>
					<div>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" placeholder="Enter your name" />
					</div>
					<div>
						<label htmlFor="e-mail">E-Mail</label>
						<input type="email" id="e-mail" placeholder="Enter you mail" />
					</div>
					<button type="submit" onClick={preventRefresh}><Link to ="/home">
						Submit
					</Link>
						
					</button>
				</form>
				<p>
					Don`t have an account ? <Link to="/signup"> Sign up </Link>
				</p>
			</div>
		</div>
	);
}
