import Ember from 'ember';

var items = Ember.A([
  { 
    title: '2017 Gencyber Announcement',
    description: 'We are excited to announce that we received another grant to a 2017 Gencyber! We just launched our 2017 camp materials and application process. You can find more information by clicking the image above.',
    img: 'img/gencyber-logo.png',
    link: '',
    link_external: 'http://www.nebraskagencyber.com'
    
  },
	{ 
		title: 'Cybertrust',
		description: 'Cybertrust is a simulation platform for conducting phishing research experiments. The platform was originally designed while I was at the University of Tulsa. CyberTrust presents users with realistic web content (both malicious and innocuous), helps researchers investigate how they perceive and trust different types of content, and then trains them to perform better in the future. ',
    img: 'img/cybertrust.png',
    link: 'projects.cybertrust'
		
	},
	{ 
		title: 'SecuWear',
    description: 'SecuWear is a security analysis playground and toolkit that security researchers and application developers can use to structure, conduct, and analyze the results of experiments involving security vulnerabilities. It is designed with transparency and openness to give researchers full knowledge and control over all components in the wearable architecture so they can better understand and assess vulnerabilities. To achieve transparency, SecuWear is built upon five core open source technologies, namely MetaWear (a wearable device), Android (the mobile app), Ubertooth One (for conducting attacks over the air between the smartphone and wearable), Django (a web-app framework for logging data collected on the mobile app and Ubertooth), and ember.js (a client-side MVC framework used for visualizing user data).', 
    img: 'img/secuwear.png',
    link: 'projects.secuwear'
	},
	{ 
		title: 'GenCyber',
    description: 'Our country\'s national and economic security is highly dependent upon a strong cybersecurity workforce. Despite this need, according to Bureau of Labor statistics, nearly 210,000 cybersecurity positions went unfilled in 2015 alone. This shortfall of cybersecurity professionals in the workforce has left national agencies and corporations scrambling to meet security needs. Unfortunately, current secondary school curricula across the country, and in Nebraska, leave students and educators with minimal or no exposure to cybersecurity topics. Addressing this need, the University of Nebraska at Omaha (UNO) will partner with Bellevue University and AIM, a Nebraska not-for-profit institution with the mission of building Nebraska’s IT talent pipeline, to offer the 2017 “Nebraska GenCyber Camp” (NGC) for secondary students (grades 9 & 10) and educators from around the area and country. NGC will help narrow the cybersecurity workforce gap by introducing educators and students to cybersecurity and cybersecurity first principles through active, hands-on, activities in ways that build a pipeline towards information security careers for students in camp and empower teachers to integrate cybersecurity into their own classrooms to widen that pipeline to include students in their home school districts.',
    img: "img/gencyber-logo-small.png",
    link: "projects.gencyber"
	},
  {
    title: 'Winner of NATO Inaugural Defense Innovation Challenge',
    description: 'SecuWear was recently (May 2016) recognized by the NATO Communications and Information Agency (NCIA) as a top innovation in cybersecurity. The challenge included 65 proposals from industry and academia from all 28 NATO allied nations. This recognition moves UNO-NATO relations forward as we continue to expand and explore relationships in collaboration for research and teaching.',
    img: "img/nato.jpg",
    link: null
  },

]);

export default Ember.Route.extend({
	model() {
		return items;
	}
});
