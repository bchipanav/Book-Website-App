/* eslint-disable no-unused-vars */
import React from "react";
import FloatingParticle from "./FloatingParticle";
import {
	BookOpenIcon,
	CommandLineIcon,
	GlobeAltIcon,
} from "@heroicons/react/16/solid";
import { Github, Instagram, MessageSquare, Twitter } from "lucide-react";

const Footer = () => {
	return (
		<footer className="relative bg-gradient-to-b from-gray-900 to-gray-900/95 backdrop-blur-2xl border-t border-t-gray-800">
			{/* FLOATING PARTICLE */}
			<FloatingParticle />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
					{/* BRAND SECTION */}
					<div className="space-y-6 text-center sm:text-left">
						<div className="flex justify-center sm:justify-start items-center space-x-2">
							<BookOpenIcon className="h-8 w-8 text-cyan-400" />
							<span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
								BOOKSHOW
							</span>
						</div>
						<p className="text-gray-400 text-sm">
							Your gateway to infinite worlds. Discover, read, and escape into
							stories that matter
						</p>
					</div>
					{/* QUICK LINKS SECTION */}
					<div className="space-y-4 text-center sm:text-left">
						<h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
							Explore
						</h3>
						<ul className="space-y-3">
							{["Trending", "New Releases", "Genres", "Authors"].map((item) => (
								<li key={item}>
									<a
										// biome-ignore lint/a11y/useValidAnchor: <explanation>
										href="#"
										className="text-gray-400 hover:text-cyan-300 text-sm transition-colors flex items-center justify-center sm:justify-start group"
									>
										<span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity " />
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>
					{/* TECH STACK */}
					<div className="space-y-4 text-center sm:text-left">
						<h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
							Powered By
						</h3>
						<div className="flex flex-wrap gap-3 justify-center sm:justify-start">
							{["React", "Tailwind", "Vite", "GoogleAPI"].map((tech) => (
								<span
									className="px-3 py-1.5 cursor-pointer rounded-full bg-gray-800/50 text-gray-300 text-sm backdrop-blur-sm hover:bg-cyan-400/10 hover:text-cyan-300 transition-all"
									key={tech}
								>
									{tech}
								</span>
							))}
						</div>
						<div className="mt-4 space-y-2">
							<div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-400">
								<CommandLineIcon className="h-5 w-5" />
								<span className="text-sm">Developer Friendly API</span>
							</div>
							<div className="flex items-center justify-center sm:justify-start space-x-2 text-gray-400">
								<GlobeAltIcon className="h-5 w-5" />
								<span className="text-sm">Global Book Database</span>
							</div>
						</div>
					</div>

					{/* SOCIAL LINKS */}
					<div className="space-y-4 text-center sm:text-left">
						<h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
							Connect
						</h3>
						<div className="flex justify-center sm:justify-start space-x-4">
							{[
								["Github", "hover:text-purple-300", Github],
								["Twitter", "hover:text-purple-300", Twitter],
								["Discord", "hover:text-purple-300", MessageSquare],
								["Instagram", "hover:text-purple-300", Instagram],
							].map(([platform, className, Icon]) => (
								<a
									// biome-ignore lint/a11y/useValidAnchor: <explanation>
									href="#"
									key={platform}
									className={`text-gray-400 ${className} transition-colors hover:scale-110`}
								>
									<span className="sr-only">{platform}</span>
									<Icon
										className="h-6 w-6 md:h-8 md:w-8"
										stroke="currentColor"
									/>
								</a>
							))}
						</div>
					</div>
				</div>

				{/* COPYRIGHT */}
				<div className="border-t border-gray-800 mt-12 pt-8 text-center">
					<p className="text-gray-500 text-sm">
						&copy; {new Date().getFullYear()} BOOKSHOW. All stories belong to
						their respective authors.
					</p>
					<p className="text-gray-500 text-sm mt-2">
						Powered By{" "}
						<a
							href="https://github.com/bchipanav"
							target="_blank"
							className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 hover:text-purple-400 transition-colors"
							rel="noreferrer"
						>
							Brenda's Github Repository
						</a>
					</p>
					<div className="mt-2 flex flex-wrap justify-center space-x-4 text-gray-500 text-sm">
						{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
						<a href="#" className="hover:text-cyan-300 transition-colors">
							Privacy
						</a>
						{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
						<a href="#" className="hover:text-cyan-300 transition-colors">
							Terms
						</a>
						{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
						<a href="#" className="hover:text-cyan-300 transition-colors">
							Contact
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
