/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import img from "../assets/imgbg.png";
import FloatingParticle from "./FloatingParticle";
const Banner = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900/30 relative overflow-hidden">
			<div className="container mx-auto px-4 h-screen flex items-center">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
					<div className="lg:col-span-1 flex flex-col justify-center space-y-6">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
						>
							Interactive Library
						</motion.h1>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3 }}
							className="text-lg text-cyan-100/80"
						>
							Explore our collection with dynamic previews and inmersive
							interaction
						</motion.p>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() =>
								document
									.getElementById("hero")
									.scrollIntoView({ behavior: "smooth" })
							}
							className="bg-gradient-to-r from-cyan-500 to-blue-600 w-fit px-8 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-cyan-500/30 transition-all"
						>
							Start Exploring
						</motion.button>
					</div>

					{/* IMAGE CONTAINER */}
					<div className="md:col-span-1 lg:col-span-2 h-64 sm:h-80 md:h-[600px] lg:h-[700px] relative flex items-center justify-center">
						<motion.div
							className="relative w-full h-full"
							animate={{ y: [0, -20, 0], rotateY: [0, 5, 0] }}
							transition={{
								duration: 6,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
							}}
						>
							<div className="absolute inset-0 rounded-3xl backdrop-blur-xl overflow-hidden">
								<img
									alt="Book"
									src={img}
									className="w-full h-full object-contain p-8"
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
			<FloatingParticle />
		</div>
	);
};

export default Banner;
