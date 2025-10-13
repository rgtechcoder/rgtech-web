import React from 'react';
import { Award, Target, Zap, CheckCircle } from 'lucide-react';

const About = ({ stats }) => {
	return (
		<section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<div className="space-y-6">
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
							Who <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">We Are</span>
						</h2>
						<p className="text-lg text-gray-700 leading-relaxed">
							At <span className="font-semibold text-blue-600">RG TechCoder</span>, we combine intelligence and innovation to build powerful IT and AI-driven solutions. Our goal is to help businesses evolve through smart technology.
						</p>
						<p className="text-lg text-gray-700 leading-relaxed">
							Based in Indore, India, we serve clients globally with cutting-edge technology solutions that drive measurable results.
						</p>
						<div className="space-y-4 pt-4">
							{[
								{ icon: Target, text: 'Customer-Centric Approach' },
								{ icon: Zap, text: 'Cutting-Edge Technology' },
								{ icon: Award, text: 'Industry Expertise' },
								{ icon: CheckCircle, text: 'Proven Track Record' }
							].map((item, index) => (
								<div key={index} className="flex items-center gap-3">
									<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
										<item.icon className="text-white" size={20} />
									</div>
									<span className="text-gray-700 font-medium">{item.text}</span>
								</div>
							))}
						</div>
					</div>
					{/* Right Content - Stats */}
					<div className="grid grid-cols-2 gap-6">
						{stats.map((stat, index) => (
							<div
								key={index}
								className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
							>
								<div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
									{stat.value}
								</div>
								<div className="text-gray-600 font-medium">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
