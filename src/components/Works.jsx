import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  source_code_link,
  icon,
  iconBg
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{background:'#1d1836', color: '#fff'}}
      contentArrowStyle={{borderRight: '7px solid #232631'}}
      iconStyle={{background:iconBg}}
      icon = {
        <div className="flex justify-center items-center w-full h-full">
          <img src={icon} alt="icon"
            className="w-[80%] h-[80%] object-contain rounded-3xl"
          />
        </div>
      }
    >
    
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-2 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[55px]'>
          {/* <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          /> */}

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
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

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name} </h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <a
      href={source_code_link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline mt-4 block"
    >
      Source Code
    </a>
      </Tilt>
    
    </VerticalTimelineElement>
  );
};

const Works = () => {
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
          <ProjectCard key={`project-${index}`} 
          index={index}
          {...project}
          />
        ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")