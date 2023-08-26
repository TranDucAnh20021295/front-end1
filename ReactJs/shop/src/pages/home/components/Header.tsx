import React from "react";
import { bannerImg } from "../../../assets/images";
import { UnderlineButton } from "../../../components/buttons";
import { TaskBar } from "../../../components/TaskBar";


export function Header() {
  return (
    <div>
      <div className="bg-[#FBEBB5]">
        <TaskBar/>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex-1"></div>
          <div className="flex-[3] flex flex-col items-start">
            <h1 className="max-w-[440px] xl:text-[64px] lg:[text-40px] md:[text-32px] sm:[text-2xl] font-medium">
              Rocket single seater
            </h1>
            <div className="mt-9">
              <UnderlineButton onClick={() => { }} title="Shop Now" />
            </div>
          </div>
          <div className="flex-[4]">
            <img src={bannerImg} alt="sd" />
          </div>
        </div>
      </div>
    </div>
  );
};

