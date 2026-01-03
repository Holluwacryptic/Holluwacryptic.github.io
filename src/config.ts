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
  aboutMe: "A self learning robotics engineer, with research interest in building hybrid and non-hybrid fixed-wing VTOL Unmanned Aerial Vehicles (UAVs). Boasting professional experience in automation, automobile repair, maintenance operations, supply chain, fleet management with a graduate mechanical engineer foundation.",
  skills: ["CAD", "Hardware Integration", "Machine Learning", "Programming","Robotics", "Simulation", "UAV Development", 
  ],
  projects: [
    {
      name: "Simulation of fixed-wing VTOL UAVs in uncertain environment",
      description: "A Software-in-the-Loop (SITL) simulation project integrating PX4 firmware, Gazebo physics simulator, ROS2 middleware, and QGroundControl for fixed-wing VTOL UAV development.",
      link: "https://github.com/Holluwacryptic/blog",
      skills: ["Linux", "C++", "Python", "ROS2", "PX4", "Gazebo Harmonic", "QGC"],
    },
    {
      name: "Machine Learning Development Pipeline for UAV Simulation",
      description: "A complete ML development workflow for UAV systems, collecting and logging 100+ hours of flight data plus 10,000+ camera frames (ROS2/Gazebo).",
      link: "https://github.com/Holluwacryptic/blog",
      skills: ["Linux", "C++", "Python", "Docker", "ROS2", "PX4", "Gazebo Harmonic", "QGC"],
    },
    {
      name: "Design of a quad-tiltrotor Fixed-Wing VTOL CAD and Simulation",
      description: "Model of a complete hybrid VTOL UAV in Onshape and SolidWorks (1.5m span, 4kg MTOW) with quad-tiltrotor architecture optimized for general purposes use.",
      link: "https://github.com/Holluwacryptic/blog",
      skills: ["Onshape", "Solidworks"],
    },
  ],
  experience: [
    {
      company: "Tdad Logistic Network",
      title: "Robotic Engineer",
      dateRange: "Jan 2026 - Present",
      bullets: [
        "Designed a comprehensive testing framework combining software-in-the-loop (SITL) simulation with Gazebo, executing 1000+ automated test scenarios covering diverse weather conditions, sensor failures, and GPS-denied environments",
        "Single engineering member of an aerial logistics startup, overseeing controls, perception, and embedded systems through Agile development cycles, delivering major feature releases including autonomous landing system and multi-drone coordination within a simulation environment",
      ],
    },
    {
      company: "Kadosh Mechatronics",
      title: "Embedded Systems Trainee",
      dateRange: "Dec 2025 - Jan 2026",
      bullets: [
        "Integrated ROS2 middleware with PX4 via Micro XRCE-DDS bridge and connected QGroundControl for real-time mission planning and telemetry monitoring.",
        "Identified and resolved control system bugs during simulation that could cause in-flight failures if undetected.",
        "Testing a simulation build of a cost-effective Software-in-the-Loop test platform using Arduino Uno and PX4 Pixhawk, aimed at reducing hardware testing costs.",
        "Developing a custom C firmware for Arduino to emulate 6-DOF IMU and GPS signals, establishing serial communication with Pixhawk at 100Hz update rate.",
      ],
    },
    {
      company: "Kadosh Mechatronics",
      title: "Machine Learning Trainee",
      dateRange: "Sept 2025 - Jan 2026",
      bullets: [
        "Pioneered the trainee program of machine learning for engineering professionals. Leveraging the training for developing an ML model for a fixed-wing VTOL drone.",
        "Designed an end-to-end SITL pipeline integrating PX4 firmware, Gazebo physics simulator, ROS2 middleware, and QGroundControl for autonomous drone development.",
        "Integrated YOLOv5 computer vision model with Gazebo camera plugin for autonomous landing site detection during simulated GPS-denied scenarios.",
        "Creating an automated SITL testing framework evaluating ML controllers across 1,000+ flight scenarios with varying weather, payloads, and failure modes.",
      ],
    },
  ],
  education: [
    {
      school: "Northwestern University",
      degree: "Modern Robotics: Mechanics, Planning, and Control Specialization",
      dateRange: "2025 - Present",
      achievements: [
        "Configuration space topology and representation, velocity constraints, task space and workspace.", 
        "Rigid-body motions, rotation matrices, angular velocities, and exponential coordinates of rotation.", 
        "Homogeneous transformation matrices, twists, screws, exponential coordinates of rigid-body motion, and wrenches.",
        "Velocity kinematics using the space Jacobian and body Jacobian, statics of open chains, singularities, and manipulability.",
      ],
    },
    {
      school: "Università di Napoli Federico II",
      degree: "Autonomous Aerospace Systems",
      dateRange: "2025 - Present",
      achievements: [
        "Introduction to the concept of Unmanned Air Vehicle UAV and Unmanned Aircraft System UAS.",
        "System Representation of Unmanned Aircraft System (UAS), UAS System Architecture and Simulation models.",
        "Principles of guidance, path management and path following for autonomous aircraft.", 
        "Integrated navigation systems for autonomous aerospace systems, GPS/INS and Dead Reckoning.", 
        "Fundamentals of target tracking systems, object detection and tracking for sensing and avoidance systems.",
        "Design Models and Open-loop dynamics, Autopilot Design, and Altitude-control State Machine.",
      ],
    },
    {
      school: "Federal University of Technology Akure",
      degree: "Masters of Science in Mechanical Engineering",
      dateRange: "2021 - 2025",
      achievements: [
        "Completed 500+ hours of coursework including engineering design, engineering mathematic etc.",
        "Began to build a 10+ portfolio project template with an engineering blog to educate others in automation.",
        "Designed and implemented an hardware integration of software controlled welding platform.",
        "Carried out novel arc welding jobs on my project and and started to learn to program in C, C++ and python.",
      ],
    },
    {
      school: "Federal University of Technology Akure",
      degree: "Bachelors of Science in Mechanical Engineering",
      dateRange: "2014 - 2019",
      achievements: [
        "Served as the departmental football coach, leading the department to a third place finish in the university wide prestigious Vice-Chancellor's competition.",
        "Worked in a team of 5 engineering students to design and fabricate a model of a portable table-top paper cutting machine for use in offices.",
        "Oversaw a weekly prayer meeting for one session (eleven months) at the university chapter of the Foursquare Student's fellowship, engaging over 250 students in active participation.",
      ],
    },
  ],
};
