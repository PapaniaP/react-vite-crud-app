import { useEffect, useState } from "react";

export default function UserAvatar({ uid }) {
	const [user, setUser] = useState({});
	const url = `https://test-projects-984c1-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`;
	useEffect(() => {
		async function getUser() {
			const response = await fetch(url);
			const data = await response.json();
			setUser(data);
		}
		getUser();
	}, [url]);

	return (
		<div className="avatar">
			<img
				src={user?.image}
				alt={user?.title}
			/>
			<span>
				<h3>{user?.title}</h3>
				<p>{user?.name}</p>
			</span>
		</div>
	);
}
