import React, { useState } from "react";
import Heading from "./Heading";
import { skills } from "../dataStore";
import { RiArrowDownWideLine } from "react-icons/ri";

const Skills = () => {
  let [skillExpand, setSkillExpand] = useState(0);
  let [arrowRotated, setArrowRoated] = useState(true);

  const handleSkillCardVisibility = (index) => {
    // setArrowRoated((a) => !a);
    (skillExpand != index) ? setArrowRoated((a) => !a) : setArrowRoated((a) => a);
    // if (skillExpand === null) {
    //   setSkillExpand(index);
    // } else {
    //   setSkillExpand(null);
    // }
    setSkillExpand(index);
  };
  return (
    // Skills main container
    <div className="min-h-fit mt-4 pb-10 bg-black  rounded-[3rem] rounded-t-[4rem]">
      {/* main heading */}
      <div>
        <Heading heading={"Skills"} />
      </div>

      {/* skills cards starts here*/}
      {/* skill card contianer */}
      <div className="pl-10">
        {skills.map((skill, outerIndex) => {
          return (
            <div className="h-fit py-2 px-5" key={outerIndex}>
              {/* top */}
              <div
                className="flex gap-2 items-center font-edensor text-2xl text-gray cursor-pointer"
                onClick={() => {
                  handleSkillCardVisibility(outerIndex);
                }}
              >
                <p>{skill.category}</p>
                <RiArrowDownWideLine
                  className={`${
                    skillExpand == outerIndex && arrowRotated
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                />
              </div>
              {/* bottom */}
              {skillExpand == outerIndex ? (
                <div className="flex gap-3 flex-wrap justify-start">
                  {skill.skills.map((skillDetails, idx) => {
                    return (
                      //skills details
                      <div
                        className="w-28 min-h-16 flex flex-col items-center bg-gray rounded-md py-3"
                        key={idx}
                      >
                        <img
                          src={skillDetails.imageLink}
                          alt={skillDetails.name + "-logo"}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                        />
                        <p className="text-black font-edensor text-sm sm:text-base">
                          {skillDetails.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p></p>
              )}
            </div>
          );
        })}
      </div>

      {/* skills cards ends here*/}
    </div>
  );
};

export default Skills;
