import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MainView} from "../pages";
import {SearchResultsView} from "../components"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainView />} />
				<Route path="/" element={<SearchResultsView/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
