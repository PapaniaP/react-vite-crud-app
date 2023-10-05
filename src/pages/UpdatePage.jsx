import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePage() {
	const [post, setPost] = useState({});
	const [caption, setCaption] = useState("");
	const [image, setImage] = useState("");
	const params = useParams();
	const navigate = useNavigate();
	const url = `https://test-projects-984c1-default-rtdb.europe-west1.firebasedatabase.app/posts/${params.postId}.json`;

	useEffect(() => {
		async function getPost() {
			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
			setPost(data);
			setCaption(post.caption);
			setImage(post.image);
		}
		getPost();
	}, [post.caption, post.image, url]);

	async function handleSubmit(event) {
		event.preventDefault();

		const postToUpdate = { caption: caption, image: image, uid: post.uid };
		console.log(postToUpdate);

		const response = await fetch(url, {
			method: "PUT",
			body: JSON.stringify(postToUpdate),
		});

		if (response.ok) {
			navigate("/projects");
		} else {
			console.log("Something went wrong");
		}
	}

	async function deletePost() {
		if (confirm("Are you sure you want to Delete your post?") == true) {
			const response = await fetch(url, {
				method: "DELETE",
			});
			if (response.ok) {
				navigate("/projects");
			} else {
				console.log("Something went wrong");
			}
			console.log(response);
		}
	}

	return (
		<section className="page">
			<h1>Update Page</h1>
			<form onSubmit={handleSubmit}>
				<label>New Caption</label>
				<input
					type="text"
					required
					value={caption}
					onChange={(event) => setCaption(event.target.value)}
				/>

				<label>New Image URL</label>
				<input
					type="url"
					required
					value={image}
					onChange={(event) => setImage(event.target.value)}
				/>
				<img
					className="image-preview"
					src={post.image}
					alt={post.caption}
				/>
				<button>Update</button>
			</form>
			<button onClick={deletePost}>Delete Post</button>
		</section>
	);
}
