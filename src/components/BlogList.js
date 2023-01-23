import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { Link } from 'react-router-dom';

const BlogList = () => {
	const [blogPost, setBlogPost] = useState([]);

	const client = createClient({
		space: 'i9sgbsr5ydfe',
		accessToken: 'XZhFiFOZIZ_bqzOYECxKF740VSiF3VLBAoWQoULbRSs',
	});

	useEffect(() => {
		const getAllEntries = async () => {
			try {
				await client.getEntries().then((entries) => {
					console.log(entries.items);
					setBlogPost(entries.items);
				});
			} catch (error) {
				console.log(error);
			}
		};
		getAllEntries();
	}, []);

	return (
		<section className="p-4 ">
			<h1 className="text-4xl font-bold my-6 text-center">Blog List</h1>
			{blogPost && (
				<div className="grid grid-cols-2 gap-6 place-items-center ">
					{blogPost?.map((post) => (
						<article key={post.sys.id} className=" max-w-[400px] flex flex-col gap-2">
							<img
								className="h-[250px]"
								src={post.fields.blogImage.fields.file.url}
								alt={post.fields.blogImage.fields.title}
							/>
							<Link to={`/blogDetails/${post.sys.id}`}>
								<h2 className="font-semibold text-xl">{post.fields.blogTitle}</h2>
								<p>{post.fields.blogSummary}</p>
								<small className="text-[#333] font-semibold text-md">{post.fields.createdDate}</small>
							</Link>
						</article>
					))}
				</div>
			)}
		</section>
	);
};

export default BlogList;
