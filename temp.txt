import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import {logo} from '../assets'

const ProjectsCard = ({ project }) => (
  
  <VerticalTimelineElement 
  
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    iconStyle={{ background: project.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={project.icon} alt={project.name} className="w-[80%] h-[80%] object-contain rounded-3xl" />
      </div>
    }
  >
     
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
    <div className='relative w-full h-[55px]'>
          {/* <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          /> */}

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(project.source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>



    <div>
      <h3 className="text-white text-[24px] font-bold">{project.name}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{project.description}</p>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {project.tags.map((tag, index) => (
        <p
          key={`project-tag-${index}`}
          className={`text-white-100 text-[14px] pl-1 tracking-wider ${tag.color}`}
        >
          #{tag.name}
        </p>
      ))}
    </div>
    <a
      href={project.source_code_link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline mt-4 block"
    >
      Source Code
    </a>
    </Tilt>
  </VerticalTimelineElement>
);

const Projects = () => {
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
      image: 'carrent',
      source_code_link: "https://github.com/irfanfaraaz/sifKrypt",
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
      image: 'jobit',
      source_code_link: "https://github.com/irfanfaraaz/Promptify-project-",
      icon: logo,
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
      image: 'tripguide',
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
      image: 'logo',
      source_code_link: "https://github.com/irfanfaraaz/Cancer-Classification_Model",
      icon: logo,
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
      image: 'tripguide',
      source_code_link: "https://github.com/irfanfaraaz/Finding_TargetAudience",
      icon: logo,
      iconBg: "#E6DEDD",
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My Projects</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("","",0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Description
        </motion.p>          
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ProjectsCard key={index} project={project} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Projects);
