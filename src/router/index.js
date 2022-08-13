import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MainView, LoginView, RegisterView} from "../pages";
import {SearchResultsView} from "../components"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainView />} />
				<Route path="/results" element={<SearchResultsView/>} />
				<Route path="/login" element={<LoginView/>} />
				<Route path="/Register" element={<RegisterView/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
