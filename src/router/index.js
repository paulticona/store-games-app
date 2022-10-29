import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FooterView, ResponsiveAppBar } from "../components";
import {MainView, LoginView, RegisterView} from "../pages";
import { Explore } from "../pages";
import { Categoria } from "../pages/Categorias";
import { Mercado } from "../pages/Mercado";
import { Perfil } from "../pages/Perfil";



const Router = () => {
	return (
		
		<>
			<ResponsiveAppBar/>
			
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainView/>} />
					<Route path="/tienda/descubrir" element={<Explore/>} />
					<Route path="/login" element={<LoginView/>} />
					<Route path="/register" element={<RegisterView/>} />
					<Route path="/mercado" element={<Mercado/>} />
					<Route path="/categorias" element={<Categoria/>} />
					<Route path="/perfil" element={<Perfil/>} />
				</Routes>
			</BrowserRouter>
			<FooterView/>
		</>
	);
};

export default Router;





