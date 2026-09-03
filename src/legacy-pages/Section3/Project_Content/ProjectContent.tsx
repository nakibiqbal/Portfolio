/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "./ProjectContent.css";
import { customEase } from "../../../Easings/customEase";

type ProjectItem = {
  id: number;
  img: string;
  label: string;
  link: string;
};

type ProjectContentProps = {
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
  list: ProjectItem[];
};

const ProjectContent = ({ setModal, list }: ProjectContentProps) => {
  return (
    <>
      {list.map((item: ProjectItem, index: number) => {
        return (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            className="sec3Wrapper"
            onMouseEnter={() => setModal({ active: true, index: index })}
            onMouseLeave={() => setModal({ active: false, index: index })}
          >
            <motion.div
              className="scaleX"
              initial={{ scaleX: 0.001 }}
              whileInView={{ scaleX: 1 }}
              transition={{
                duration: 1,
                delay: item.id * 0.08,
                ease: customEase,
              }}
            />

            <div className="FlipTextChild">
              <h2>{item.label}</h2>

              <motion.img
                src={item.img}
                initial={{
                  clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", // Hidden (left side)
                }}
                whileInView={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Fully visible
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: customEase,
                }}
                loading="lazy"
              />

              <div className="viewCursorBG viewBtn">
                <span>View</span>
              </div>
            </div>
          </motion.a>
        );
      })}
    </>
  );
};

export default ProjectContent;
