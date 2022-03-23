import "./App.css";
import Input from "./components/Input";
import store from "./store/";

function App(props) {
	return (
		<div className="App">
			<Input store={store} />
		</div>
	);
}

export default App;
