import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function CreatePage() {
	const [caption, setCaption] = useState("");
	const [image, setImage] = useState("");
	const navigate = useNavigate();

	async function handleSubmit(event) {
		event.preventDefault();

		const newPost = { caption: caption, image: image, uid: "pqzGY1MnHYm3I4Ca79Xn" };
		console.log(newPost);

		const url =
			"https://test-projects-984c1-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
		const response = await fetch(url, { method: "POST", body: JSON.stringify(newPost) });

		if (response.ok) {
			navigate("/projects");
		} else {
			console.log("Something went wrong");
		}
	}
	return (
		<section className="page">
			<h1>Update Post</h1>
			<form onSubmit={handleSubmit}>
				<label>New Caption</label>
				<input
					type="text"
					required
					placeholder="Type a new caption"
					value={caption}
					onChange={(event) => setCaption(event.target.value)}
				/>

				<label>New Image URL</label>
				<input
					type="url"
					required
					placeholder="Add a new image URL"
					value={image}
					onChange={(event) => setImage(event.target.value)}
				/>
				<button>Update</button>
			</form>
		</section>
	);
}
