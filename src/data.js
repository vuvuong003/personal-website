import profileImage from './files/pic_of_me.jpeg'

export const profile = {
  name: 'Vu Vuong',
  image: profileImage,
  // Shown on the Home page.
  intro: [
    { text: 'Hi all! My name is Vu Vuong. I am an incoming Software Engineer @ Fidelity Investments. I graduated in May 2026 with a M.S. in Computer Science from North Carolina State University. My interests include AI/ML and building web applications. To learn more about me, check out my ' },
    { text: 'projects', to: '/projects' },
    { text: ' and ' },
    { text: 'experiences', to: '/experience' },
    { text: '.' },
  ],
  // Shown on the Other page.
  contact: [
    { label: 'Email', value: '', href: 'mailto:vuhvuong003@gmail.com' },
    { label: 'GitHub', value: '', href: 'https://github.com/vuvuong003' },
    { label: 'LinkedIn', value: '', href: 'https://www.linkedin.com/in/vu-vuong-752b83289/' },
  ],
}

export const projects = [
  {
    id: 'nba-game-web-app',
    name: 'NBA Game Web Application',
    meta: 'Web Application · Individual Project',
    summary:
      'Built a full-stack NBA trivia application where users compare basketball players based on different statistics. The application is then deployed automatically using a CI/CD pipeline with GitHub Actions, Docker, and Ansible.',
    stack: ['Node.js', 'React', 'MongoDB', 'Docker', 'Ansible'],
    points: [
      'Engineered an automated CI/CD pipeline using GitHub Actions, Docker, and Ansible, reducing deployment time by 96% and streamlining application releases',
      'Designed and developed a full-stack basketball web application featuring user authentication, persistentleaderboards, and RESTful APIs using React/Vite, Node.js/Express, and MongoDB.',
      'Increased application reliability by implementing 50+ unit & integration tests across full-stack components.'
    ],
    link: '',
  },
  {
    id: 'digital-passport',
    name: 'Digital Passport',
    meta: 'Progressive Web Application · Group Project',
    summary:
      'PWA which helps digitize the North Carolina state parks stamp passport program across 45 parks. Works offline, so visitors can collect stamps in parks with no internet connectivity.',
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'IndexedDB', 'Docker'],
    points: [
      'Collaborated in a 5-person Agile team to develop a PWA that digitized the NC Division of Parks and Recreation\'s passport program across 45 state parks, replacing manual stamp collection with a digital experience.',
      'Implemented geofencing using location-based services to automatically issue digital stamps upon park entry, eliminating manual verification and improving user engagement.',
      'Engineered offline-first functionality using service workers and IndexedDB, enabling uninterrupted application usage without internet connectivity and automatic data synchronization upon reconnection.'
    ],
    link: '',
  },
  {
    id: 'wildfire-evacuation-planner',
    name: 'Wildfire Evacuation Route Planner',
    meta: 'AI Project · Group Project',
    summary:
      'Built an AI agent that plans evacuation routes when there is fire and the environment is uncertain. Different algorithms were implemented and evaluated to find the optimal solution for this problem.',
    stack: ['Python'],
    points: [
      'Designed an AI planning agent that dynamically recalculates the safest evacuation routes as wildfires spread, modeling road networks as weighted graphs with edge costs combining distance, traffic density, and fire risk.',
      'Implemented D* Lite pathfinding to enable efficient incremental route replanning.',
      'Evaluated against Dijkstra\'s algorithm and static A* baselines across three custom grids simulation, measuring evacuation success rate, path length, and replanning efficiency under varying fire spread probabilities.'
    ],
    link: 'https://github.com/vuvuong003/AI_Project',
  },
  {
    id: 'disaster-scout-robot',
    name: 'Disaster Scout Robot',
    meta: 'Robotics Project · Individual Project',
    summary:
      'Developed a robotic system for disaster response scenarios, focusing on autonomous navigation and real-time environmental sensing.',
    stack: ['Python', 'ROS2', 'SLAM'],
    points: [
      'Designed and built a ROS2 robot capable of navigating through debris and hazardous environments using sensor fusion and SLAM techniques.',
      'Implemented obstacle avoidance algorithms to ensure safe operation in dynamic disaster zones.',
      'Integrated machine learning models for object detection and classification, enabling the robot to identify potential hazards and victims.'
    ],
    link: 'https://github.com/vuvuong003/Disaster-Scout-Robot',
  },
  {
    id: 'nba-player-performance-analysis',
    name: 'NBA Evolution Study: Clustering & Forecasting',
    meta: 'Data Analysis Project · Group Project',
    summary:
      'Analyzed NBA player performance data to identify key factors that contribute to a player\'s success. Used statistical analysis and machine learning techniques to build predictive models.',
    stack: ['Python', 'Jupyter Notebook'],
    points: [
      'Collected and processed 20 seasons of NBA player performance data (2004–2024) using the nba_api Python library, enabling robust historical analysis directly from official league endpoints.',
      'Applied clustering algorithms (K-Means, GMM) to classify players into role-based performance groups (scorers, defenders, all-around), uncovering evolving archetypes and strategic trends in NBA playstyles.',
      'Developed predictive models using linear regression and ARIMA to forecast 2024–2025 league performance averages, offering data-driven insights into future player and league dynamics.'
    ],
    link: 'https://github.com/vuvuong003/NBA-Players-Analysis',
  },
  {
    id: 'coffee-maker',
    name: 'CoffeeMaker',
    meta: 'Web Application · Group Project',
    summary:
      'Developed a web application that allows users to order coffee online and track their orders in real-time. It allows admins to manage orders and inventory.',
    stack: ['Java', 'HTML/CSS', 'AngularJS','Spring Boot', 'Hibernate', 'MySQL'],
    points: [
      'Collaborated in a six-person team to develop a full-stack web application using AngularJS, Spring Boot, and RESTful APIs for managing a coffee maker system',
      'Developed backend services with Spring Boot and Hibernate to manage app data and persist records in MySQL.',
      'Increased software reliability by achieving over 70% code coverage with JUnit tests covering core functionality and edge-case scenarios.'
    ],
    link: '',
  }
]

export const skills = [
  { group: 'Programming Languages', items: ['Python', 'Java', 'HTML/CSS', 'JavaScript'] },
  { group: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'],},
  { group: 'AI Tools', items: ['Claude', 'GitHub Copilot'] },
  { group: 'Soft Skills', items: ['Teamwork', 'Communication', 'Problem Solving'] },
]

export const experience = [
  { title: 'Software Engineer', org: 'Fidelity Investments', dates: 'Jan 2027 – Present', points: ['TBD'] },
]

export const education = [
  { degree: 'M.S. in Computer Science', school: 'North Carolina State University', dates: 'Aug 2025 - May 2026' },
  { degree: 'B.S. in Computer Science', school: 'North Carolina State University', dates: 'Aug 2021 - May 2025' },
]
