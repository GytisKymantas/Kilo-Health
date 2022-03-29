import React from "react";
import YogaProgram from "../../atoms/YogaProgram/YogaProgram";
import { ProgramContentsData } from "../../../../src/data";


const YogaProgramContainer = () => {
  const contents = ProgramContentsData;
  console.log(contents);

  return (
    <div className="program">
      <h3>What's in my program?</h3>
      {contents.map((content,idx)=>{
        return (
          <YogaProgram key={idx} icon={content.icon} title={content.title} subtitle={content.subtitle} />
        );
      }
      )}   
    </div>
  );
};

export default YogaProgramContainer;
