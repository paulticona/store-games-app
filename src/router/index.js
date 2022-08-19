import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MainView, LoginView, RegisterView} from "../pages";
import {SearchResultsView, HeaderMain} from "../components"

const Router = () => {
	return (
		
		<BrowserRouter>
			<HeaderMain/>
			<Routes>
				<Route path="/" element={<MainView/>} />
				<Route path="/results" element={<SearchResultsView/>} />
				<Route path="/login" element={<LoginView/>} />
				<Route path="/Register" element={<RegisterView/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
