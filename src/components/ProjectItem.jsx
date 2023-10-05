import { useNavigate } from "react-router-dom";
import UserAvatar from "./UserAvatar";

export default function ProjectItem({ item }) {
	const navigate = useNavigate();

	function handleClick() {
		navigate(`/posts/${item.id}`);
	}
	return (
		<article
			key={item.id}
			onClick={handleClick}
		>
			<UserAvatar uid={item.uid} />
			<img
				src={item.image}
				alt={item.caption}
			/>
			<h3>{item.caption}</h3>
		</article>
	);
}
