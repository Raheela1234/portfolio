import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill, RiNodejsLine} from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";


const Skills = () => {
  return (
    <div>
      <section id="skills" className="mt-52">
        <h1 className="text-white text-center text-4xl animate-bounce duration-500">
          <span>My</span> Skills
        </h1>
        <div className="justify-items-center mt-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <article className="text-white bg-slate-900 py-5 text-center text-xl rounded-lg w-56 border-b-4 border-transparent hover:shadow-customShadow hover:text-customHover">
            <div className="flex items-center justify-center gap-1">
              <h4>HTML</h4>
              <img src="/html.png" alt="html-logo"width={40}/>
            </div>
          </article>

          <article className="text-white bg-slate-950 py-5 text-center text-xl rounded-lg w-56 border-b-4 border-transparent hover:shadow-customShadow hover:text-customHover">
            <div className="flex items-center justify-center gap-2">
              <h4>CSS</h4>
              <img src="/css.png" alt="css-logo" width={40}/>
            </div>
          </article>

          <article className="text-white bg-slate-900 py-5 text-center text-xl rounded-lg w-56 border-b-4 border-transparent hover:shadow-customShadow hover:text-customHover">
           <div className="flex items-center justify-center gap-2">
              <h4>JAVASCRIPT</h4>
              <IoLogoJavascript className="text-4xl text-yellow-400"/>
            </div>
          </article>

          <article className="text-white bg-slate-950 py-5 text-center text-xl rounded-lg w-56 border-b-4 border-transparent hover:shadow-customShadow hover:text-customHover">
            <div className="flex items-center justify-center gap-1">
              <h4>TYPESCRIPT</h4>
              <BiLogoTypescript className="text-4xl text-blue-500"/>
            </div>
          </article>

          <article className="text-white bg-slate-900 py-5 text-center text-xl rounded-lg w-56 border-b-4 border-transparent hover:shadow-customShadow hover:text-customHover">
           <div className="flex items-center justify-center gap-1">
              <h4>NEXTJS</h4>
              <RiNextjsFill className="text-3xl text-white"/>
            </div>
          </article>

          <article className="text-white bg-slate-950 py-5 text-center text-xl rounded-lg w-56 border-b-4 border-transparent hover:shadow-customShadow hover:text-customHover">
            <div className="flex items-center justify-center gap-2">
            <h4>REACTJS</h4>
              <FaReact className="text-3xl text-blue-600"/>
            </div>
          </article>

          <article className="text-white bg-slate-900 py-5 text-center text-xl rounded-lg w-56 border-b-4 border-transparent hover:shadow-customShadow hover:text-customHover">
            <div className="flex items-center justify-center gap-2">
              <h4>NODEJS</h4>
              <RiNodejsLine className="text-3xl text-green-500"/>
            </div> 
          </article>

          <article className="text-white bg-slate-900 py-5 text-center text-xl rounded-lg w-56 border-b-4 border-transparent hover:shadow-customShadow hover:text-customHover">
            <div className="flex items-center justify-center gap-2">
              <h4>PYTHON</h4>
              <img src="/py.png" alt="python-logo" width={40}/>
            </div> 
          </article>
        </div>
      </section>
    </div>
  );
};

export default Skills;
