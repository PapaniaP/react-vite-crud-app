import { useEffect, useState } from "react";
import ProjectItem from "../components/ProjectItem";

export default function ProjectPage() {
	const [projectList, setProjectList] = useState([]);

	useEffect(() => {
		async function getProjects() {
			const url =
				"https://test-projects-984c1-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
			const response = await fetch(url);
			const data = await response.json();
			const projectsArray = Object.keys(data).map((key) => ({
				id: key,
				...data[key],
			})); // from object to array

			console.log(data);
			console.log(projectsArray);

			setProjectList(projectsArray);
		}

		getProjects();
	}, []);

	return (
		<section className="page">
			<h1>My Projects</h1>
			<section className="grid">
				{projectList.map((item) => (
					<ProjectItem
						item={item}
						key={item.id}
					/>
				))}
			</section>
		</section>
	);
}
