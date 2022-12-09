import React from 'react';
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 , DiReact, DiBootstrap , DiSass} from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { GiBrainDump  } from "react-icons/gi";
import { VscSymbolInterface } from "react-icons/vsc";

class Skills extends React.Component{


    render(){
        return(
            <div className="skills">
                 <div className="h5" style={{marginLeft: '5px',marginBottom: '30px', borderBottom: '1px solid #fff', paddingBottom: '10px'}}>Skills</div>
                <div className="skills-item"><p><AiFillHtml5 /> HTML</p></div>
                <div className="skills-item"><p><DiCss3 style={{marginRight: '5px'}}/>CSS</p></div>
                <div className="skills-item"><p><DiBootstrap /> Bootstrap</p></div>
                <div className="skills-item"><p><DiSass /> SASS</p></div>
                <div className="skills-item"><p><TbBrandJavascript /> JavaScript</p></div>
                <div className="skills-item"><p><DiReact /> React(Hooks, refs, Component lifecycle, API,React Router DOM,User system, Formik, Redux)</p></div>
                <div className="skills-item"><p><AiFillGithub /> Git and GitHub</p></div>
                <div className="skills-item"><p><GiBrainDump /> Critical thinking</p></div>
                <div className="skills-item"><p><VscSymbolInterface /> Client Interfacing</p></div>
            </div>
        );
    }
}

export default Skills;