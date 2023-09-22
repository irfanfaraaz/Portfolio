import {
    logo,
    logo2,
    logo3,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    cpp,
    python,
    tensorflow,
    express,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Blockchain Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    // {
    //   name: "CPP",
    //   icon: cpp,
    // },
    // {
    //   name: "Python",
    //   icon: python,
    // },
    // {
    //   name: "Tensorflow",
    //   icon: tensorflow,
    // },
    // {
    //   name: "Express",
    //   icon: express,
    // },
  ];
  
  const experiences = [
    
    {
      title: "Full stack Developer Intern",
      company_name: "Kite India",
      icon: logo3,
      iconBg: "#E6DEDD",
      date: "Apr 2023 - JUL 2023",
      points: [
        "Internship at Kite India exposed me to Nestjs, Nextjs, GraphQL, Amazon Amplify.",
        "Made back-end projects using Expressjs and Open API.",
        "Developed a Twitter auto-tweet app integrating twitter API and OpenAi API.",
        "Leveraged OpenAI API for various prompt engineering based projects.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Ethereum Transaction Website",
      description:
        "Web3-based platform that allows you to make basic Ethereum transactions using a user-friendly interface. Simply connect your MetaMask account to view the latest transactions and interact with the Ethereum network.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Solidity",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/irfanfaraaz/sifKrypt",
      icon: logo3,
      iconBg: "#E6DEDD",
    },
    {
      name: "OpenAI X Twitter",
      description:
        "Engineered a specialized application by harnessing the capabilities of the OpenAI and Twitter APIs. This innovative tool empowers users to input topic preferences and desired posting frequencies, subsequently generating and autonomously publishing engaging tweets. To maximize reach and relevance, the application intelligently incorporates appropriate hashtags.",
      tags: [
        {
          name: "TwitterAPI",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAIAPI",
          color: "green-text-gradient",
        },
        {
          name: "AutoTweet",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/irfanfaraaz/auto-tweet-app",
      icon: logo,
      iconBg: "#E6DEDD",
    },
    {
      name: "Promptify",
      description:
        "Web application that enables users to  to store and manage prompts for different AI models effectively.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/irfanfaraaz/Promptify-project-",
      icon: logo3,
      iconBg: "#E6DEDD",
    },
    {
      name: "Stock Price Predictor",
      description:
        "Developed a robust Stock Price Prediction model utilizing Recurrent Neural Networks (RNN) for enhanced forecasting accuracy, showcasing proficiency in machine learning and deep learning techniques.",
      tags: [
        {
          name: "RNN",
          color: "blue-text-gradient",
        },
        {
          name: "DeepLearning",
          color: "green-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/irfanfaraaz/Stock_prediction",
      icon: logo,
      iconBg: "#E6DEDD",
    },
    {
      name: "Cancer Classification",
      description:
        "Developedmachine learning project focused on cancer classification. The primary goal of this project is to build a classification model that can effectively classify cancer cases into two classes: Class 2 and Class 4.",
      tags: [
        {
          name: "Classification",
          color: "blue-text-gradient",
        },
        {
          name: "XGBoost",
          color: "green-text-gradient",
        },
        {
          name: "DecisionTree",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/irfanfaraaz/Cancer-Classification_Model",
      icon: logo3,
      iconBg: "#E6DEDD",
    },
    {
      name: "Target Audience Identification",
      description:
        "Developed  a machine learning model for precise target audience identification through clustering techniques like K Means and Hierarchical Clustering, enhancing marketing strategy effectively.",
      tags: [
        {
          name: "Clustering",
          color: "blue-text-gradient",
        },
        {
          name: "KMeans",
          color: "green-text-gradient",
        },
        {
          name: "Hierarchical",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/irfanfaraaz/Finding_TargetAudience",
      icon: logo,
      iconBg: "#E6DEDD",
    },
    {
      name: "Basic CNN Model",
      description:
        "Developed  a machine learning model for image classification, distinguishing between dogs and cats with high accuracy.",
      tags: [
        {
          name: "CNN",
          color: "blue-text-gradient",
        },
        {
          name: "DeepLearning",
          color: "green-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/irfanfaraaz/First_CNN",
      icon: logo3,
      iconBg: "#E6DEDD",
    },
    
  ];
  
  export { services, technologies, experiences, projects };