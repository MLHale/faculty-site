export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/students', label: 'Students' },
  { href: '/publications', label: 'Publications' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About me' },
  { href: '/contact', label: 'Contact' },
];

export const homeCards = [
  {
    title: 'Gencyber 2019',
    description:
      'Nebraska GenCyber 2019 was super fun! We built Rube Goldberg machines. Click the image above to explore the 2019 Nebraska GenCyber modules.',
    img: '/img/gencyber-2019-logo.png',
    href: '/projects/gencyber',
  },
  {
    title: 'Gencyber 2018',
    description:
      'Nebraska GenCyber 2018 was a huge success! Thanks for participating. Click the image above to explore the Nebraska GenCyber modules.',
    img: '/img/gencyber-brand-compliant.png',
    externalHref: 'https://www.nebraskagencyber.com/modules/2018',
  },
  {
    title: 'Cybertrust',
    description:
      'Cybertrust is a simulation platform for conducting phishing research experiments and helping users improve trust decisions over time.',
    img: '/img/cybertrust.png',
    href: '/projects/cybertrust',
  },
  {
    title: 'SecuWear',
    description:
      'SecuWear is a security analysis playground and toolkit for experimentation on wearable and IoT security vulnerabilities.',
    img: '/img/secuwear.png',
    href: '/projects/secuwear',
  },
  {
    title: 'Winner of NATO Inaugural Defense Innovation Challenge',
    description:
      'SecuWear was recognized by the NATO Communications and Information Agency as a top innovation in cybersecurity.',
    img: '/img/nato.jpg',
  },
];

export const students = {
  current: [
    {
      name: 'Aaron Vigal',
      type: 'UG',
      years: '2018-',
      img: '/img/aaron.jpg',
      description:
        'Aaron works on the Cybertrust project - developing tooling for experimentation and user training. He has also supported GenCyber camp operations.',
    },
  ],
  former: [
    {
      name: 'Gabi Wethor',
      type: 'PhD',
      years: '2017-2019',
      img: '/img/gabi.jpg',
      description: 'Developed data fusion and analysis techniques for phishing victimization research.',
    },
    {
      name: 'Isaac Shrestha',
      type: 'MS',
      years: '2016-2018',
      img: '/img/isaac.jpg',
      description: 'Worked on SecuWear analytics and visualization for wearable security experiments.',
    },
    {
      name: 'Nikhit Adusumilli',
      type: 'MS',
      years: '2016-2018',
      img: '/img/nikhit.jpg',
      description: 'Built frontend and training interfaces for Cybertrust and data hooks for SecuWear.',
    },
    {
      name: 'Mickey Hefley',
      type: 'MS',
      years: '2016-2017',
      img: '/img/mickey.jpg',
      description: 'Designed administrative experiment tooling and user-interaction data capture on Cybertrust.',
    },
    {
      name: 'Kerolos Lotfy',
      type: 'MS',
      years: '2015-2016',
      img: '/img/kerolos.jpg',
      description: 'Analyzed BLE protocol and commercial wearable communications for vulnerabilities.',
    },
  ],
};

export const projectBlurbs = {
  secuwear: {
    title: 'SecuWear',
    image: '/img/secuwear.png',
    body: [
      'Wearables are emerging as the next major ubiquitous computing area. SecuWear is a security analysis playground for researchers and developers to structure, conduct, and analyze security vulnerability experiments.',
      'The platform is intentionally transparent and open and combines wearable hardware, mobile software, over-the-air monitoring, and web-based data analysis tools.',
    ],
  },
  cybertrust: {
    title: 'Cybertrust',
    image: '/img/cybertrust.png',
    body: [
      'Cybertrust is a simulation platform for conducting phishing research experiments and building practical anti-phishing training.',
      'The platform supports empirical studies of trust cues and helps researchers evaluate interventions that reduce future victimization.',
    ],
  },
  gencyber: {
    title: 'Nebraska GenCyber',
    image: '/img/gencyber-2019-logo.png',
    body: [
      'Nebraska GenCyber introduces students and educators to cybersecurity and first principles through active, hands-on learning.',
      'The program has run multi-year camps and publishes open educational modules and archives for camp participants and teachers.',
    ],
  },
};

export const publications = [
  'Hale, M. L., Walter, C., Lin, J., Gamble, R. F. (2017). A priori Prediction of Phishing Victimization based on Structural Content Factors. International Journal of Services Computing.',
  'Hefley, M., Wethor, G. E., and Hale, M. L. (2018). Multimodal Data Fusion and Behavioral Analysis Tooling for Exploring Trust and Phishing Victimization. HICSS.',
  'Walter, C., Hale, M. L., and Gamble, R. F. (2016). Imposing security awareness on wearables. SEsCPS.',
  'Hale, M. L. and Hanson, S. (2015). A Testbed and Process for Analyzing Attack Vectors and Vulnerabilities in Hybrid Mobile Apps.',
];
