export const siteConfig = {
  name: "Toluwalope Dada",
  title: "Robotics Engineer",
  description: "Portfolio website of Toluwalope Dada",
  accentColor: "#1d4ed8",
  social: {
    email: "Toluwalopedada1@gmail.com",
    linkedin: "https://linkedin.com/in/tdad",
    twitter: "https://x.com/tdad1992",
    github: "https://github.com/Holluwacryptic",
  },
  aboutMe:
    "Self Learning robotics engineer, building projects on Fixed-Wing VTOL hybrid Unmanned Aerial Vehicles. Professional graduate mechanical engineer with experience in automation, automobile repair, maintenance operations, supply chain and fleet management.",
  skills: ["CAD & CAM", "Robotic UAV Development", "Programming", "Hardwaare Integration"],
  projects: [
    {
      name: "Simulation of multi-agent UAVs in uncertain environment",
      description:
        "A Software-in-the-Loop (SITL) simulation project integrating PX4 firmware, Gazebo physics simulator, ROS2 middleware, and QGroundControl for fixed-wing VTOL UAV development. Designed with high-fidelity environment models with wind turbulence, sensor noise, and actuator dynamics. Testing and logging different flight scenarios with varying weather, payloads, and failure modes before hardware deployment.",
      link: "https://github.com/Holluwacryptic/blog",
      skills: ["LinuxOS Ubuntu", "C++", "Python"],
    },
    {
      name: "Machine Learning Development Pipeline for UAV Simulation",
      description:
        "A complete ML development workflow for UAV systems: collecting and logging 100+ hours of flight data plus 10,000+ camera frames (ROS2/Gazebo); preprocessed using NumPy/Pandas with cleaning, normalization, and 70/15/15 data splits; engineered features via statistical analysis (FFT, PCA) and derived metrics; developed models (LSTM, CNN, DQN, PPO) in TensorFlow/PyTorch with custom loss functions and Optuna hyperparameter tuning; trained on GPU with regularization and TensorBoard monitoring; deployed TensorFlow Lite models to PX4 via ROS2 with <50ms latency; validated across 200+ scenarios with ablation studies; implemented MLOps pipeline with continuous retraining and version control (DVC/MLflow).",
      link: "https://github.com/Holluwacryptic/blog",
      skills: ["LinuxOS Ubuntu", "C++", "Python", "Docker"],
    },
    {
      name: "Fixed-Wing VTOL CAD Design with Multi-Physics Simulation",
      description:
        "Modeled complete hybrid VTOL platform in Onshape and SolidWorks (1.5m span, 4kg MTOW) with quad-tiltrotor architecture optimized for reconnaissance, cargo delivery, aerial mapping, and emergency response applications",
      link: "https://github.com/Holluwacryptic/blog",
      skills: ["Onshape, Solidworks"],
    },
  ],
  experience: [
    {
      company: "Tdad Logistic Network",
      title: "Robotic Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Designed a comprehensive testing framework combining software-in-the-loop (SITL)
        simulation with Gazebo, executing 5,000+ automated test scenarios covering diverse 
        weather conditions, sensor failures, and GPS-denied environments achieving 99.5% 
        system reliability before production release",
        "Member of a cross-functional robotics team of 8 engineers (controls, perception, 
        embedded systems) through Agile development cycles, delivering major feature releases 
        over 12 months including autonomous landing system upgrade and multi-drone coordination
        capability while maintaining 90% operational uptime through phased rollout strategy",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "Federal University of Technology Akure",
      degree: "Bachelor of Science in Mechanical Engineering",
      dateRange: "2014 - 2019",
      achievements: [
        "Departmental Soccer Coach",
        "Engineering faculty stakeholder",
        "Course Representative",
      ],
    },
    {
      school: "Federal University of Technology Akure",
      degree: "Masters of Science in Mechanical Engineering",
      dateRange: "2021 - 2025",
      achievements: [
        "Completed 500+ hours of coursework",
        "Began to build 10+ portfolio projects",
        "Hardware integration of software welding platform"
        "Specialized in Automation, Welding and Programming",
      ],
    },
  ],
};
