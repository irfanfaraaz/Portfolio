import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, description, icon, index }: any) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img
                        src={icon}
                        alt={title}
                        className="w-16 h-16 object-contain"
                    />
                    <h3 className="text-white text-[20] font-bold text-center">
                        {" "}
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};
const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                Full Stack/WEB3 Developer and ML enthusiast with strong
                knowledge of systems software and algorithms. Proficient in
                NodeJs, NestJs, ExpressJs, MongoDB, NextJs, ReactJs and Ethereum
                Blockchain. Familiar with Unix/Linux and Windows environments
                and APIs. Knowledgeable in TCP /IP and network programming. Good
                implementation skills in C++, Java, JavaScript and Python. I
                excel in integrating APIs seamlessly into web applications,
                enhancing functionality and user experiences. My goal is to
                continue pushing boundaries and driving advancements in the tech
                landscape, all while delivering high-quality solutions that meet
                and exceed user expectations. Passion for innovation.
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
