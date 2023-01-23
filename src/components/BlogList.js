import React from 'react';

const BlogList = () => {
	return (
		<section className="p-4 ">
			<h1 className="text-4xl font-bold my-6 text-center">Blog List</h1>
			<div className="grid grid-cols-2 gap-6 place-items-center ">
				<article className=" max-w-[400px] flex flex-col gap-2">
					<img
						className=""
						src="https://plus.unsplash.com/premium_photo-1663047812698-fdd05e787f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
						alt="/"
					/>
					<h2 className="font-semibold text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, optio.
					</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil voluptatum, quia ipsum
						corporis quidem officiis in molestias, sequi rem suscipit minima temporibus explicabo
						distinctio nemo ipsa, voluptate aliquid iste sapiente
					</p>
					<small className="text-[#333] font-semibold text-md">20, Jan 2022</small>
				</article>
				<article className=" max-w-[400px] flex flex-col gap-2">
					<img
						className=""
						src="https://plus.unsplash.com/premium_photo-1661905415350-a3e95a0f8f74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
						alt="/"
					/>
					<h2 className="font-semibold text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, optio.
					</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil voluptatum, quia ipsum
						corporis quidem officiis in molestias, sequi rem suscipit minima temporibus explicabo
						distinctio nemo ipsa, voluptate aliquid iste sapiente
					</p>
					<small className="text-[#333] font-semibold text-md">20, Jan 2022</small>
				</article>
				<article className=" max-w-[400px] flex flex-col gap-2">
					<img
						className=""
						src="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
						alt="/"
					/>
					<h2 className="font-semibold text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, optio.
					</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil voluptatum, quia ipsum
						corporis quidem officiis in molestias, sequi rem suscipit minima temporibus explicabo
						distinctio nemo ipsa, voluptate aliquid iste sapiente
					</p>
					<small className="text-[#333] font-semibold text-md">20, Jan 2022</small>
				</article>
			</div>
		</section>
	);
};

export default BlogList;
