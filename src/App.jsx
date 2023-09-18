import { useState } from "react";
import "./App.css";

function App() {
	const [username, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [cPass, setCPass] = useState("");
	const [eu, setEu] = useState("");
	const [ep, setEp] = useState("");
	const [e, setE] = useState("");
	const [ecp, setEcp] = useState("");
	const [ub, setUb] = useState("#fff");
	const [eb, setEb] = useState("#fff");
	const [pb, setPb] = useState("#fff");
	const [cpb, setCpb] = useState("#fff");

	function validate() {
		if (username.length < 8) {
			setEu("Username must be at least 8 characters");
			setUb("#ff0000");
		} else {
			setEu("");
			setUb("#00ff00");
		}
		if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
			setE("Invalid email address");
			setEb("#ff0000");
		} else {
			setE("");
			setEb("#00ff00");
		}
		if (pass.length < 6) {
			setEp("Password must be at least 6 characters");
			setPb("#ff0000");
		} else {
			setEp("");
			setPb("#00ff00");
		}
		if (pass !== cPass) {
			setEcp("Passwords do not match");
			setCpb("#ff0000");
		} else {
			setEcp("");
			setCpb("#00ff00");
		}
	}

	return (
		<>
			<h1>Form Validation</h1>
			<input
				type="text"
				placeholder="Username"
				value={username}
				onChange={(e) => {
					setUserName(e.target.value);
				}}
				style={{ textAlign: "center", borderColor: ub, borderWidth: "5px" }}
			/>
			<small style={{ color: "red" }}>{eu}</small>
			<br />
			<br />
			<input
				type="text"
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
				placeholder="Email"
				style={{ textAlign: "center", borderColor: eb, borderWidth: "5px" }}
			/>
			<small style={{ color: "red" }}>{e}</small>
			<br />
			<br />
			<input
				type="text"
				value={pass}
				onChange={(e) => {
					setPass(e.target.value);
				}}
				placeholder="Password"
				style={{ textAlign: "center", borderColor: pb, borderWidth: "5px" }}
			/>
			<small style={{ color: "red" }}>{ep}</small>
			<br />
			<br />
			<input
				type="text"
				value={cPass}
				onChange={(e) => {
					setCPass(e.target.value);
				}}
				placeholder="Confirm Password"
				style={{ textAlign: "center", borderColor: cpb, borderWidth: "5px" }}
			/>
			<small style={{ color: "red" }}>{ecp}</small>
			<br />
			<br />
			<button onClick={validate}>Submit</button>
			<br />
			<br />
			<br />
			<br />
			<footer style={{ color: "black" }}>&copy; shrey</footer>
		</>
	);
}

export default App;
