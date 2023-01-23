import { createClient } from 'contentful';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
	const [singlePost, setSinglePost] = useState([]);

	const client = createClient({
		space: 'i9sgbsr5ydfe',
		accessToken: 'XZhFiFOZIZ_bqzOYECxKF740VSiF3VLBAoWQoULbRSs',
	});

	const { id } = useParams();
	console.log(id);

	useEffect(() => {
		const getEntriesById = async () => {
			try {
				await client.getEntry(id).then((entry) => {
					console.log(entry);
					setSinglePost(entry);
				});
			} catch (error) {
				console.log(error);
			}
		};
		getEntriesById();
	}, []);

	return (
		<section className="p-4 md:px-[4rem]">
			<h1 className="text-4xl font-bold my-6 text-center">Blog Post</h1>
			<article className="items-center flex flex-col gap-2">
				<img
					className="h-[250px]"
					src={singlePost?.fields?.blogImage?.fields?.file?.url}
					alt={singlePost?.fields?.blogImage?.fields?.title}
				/>
				<h2 className="font-semibold text-xl">{singlePost?.fields?.blogTitle}</h2>
				<div className="w-full flex justify-between">
					<p className="text-xl font-semibold">{singlePost?.fields?.blogAuthor}</p>
					<small className="text-[#333] font-semibold text-md">{singlePost?.fields?.createdDate}</small>
				</div>
				<p>{singlePost?.fields?.postContent}</p>
			</article>
		</section>
	);
};

export default BlogDetails;
