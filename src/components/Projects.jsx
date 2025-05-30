import { PROJECTS } from "../constants/index.js";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";


const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="projects">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                className="mb-6 rounded cursor pointer transition-transform duration-300 ease-in-out hover:scale-150 hover:z-10 md:hover:origin-center"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 font-semibold text-white-400 hover:underline flex items-center gap-1"
              >
                {project.title}
                <MdArrowOutward className="w-4 h-4" />
              </a>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
