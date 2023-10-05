import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";

function App() {
	return (
		<>
			<Nav />
			<main>
				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/about"
						element={<AboutPage />}
					/>
					<Route
						path="/projects"
						element={<ProjectPage />}
					/>
					<Route
						path="/create"
						element={<CreatePage />}
					/>
					<Route
						path="/posts/:postId"
						element={<UpdatePage />}
					/>
					<Route
						path="/contact"
						element={<ContactPage />}
					/>
					<Route
						path="*"
						element={<Navigate to="/" />}
					/>
				</Routes>
			</main>
		</>
	);
}

export default App;
