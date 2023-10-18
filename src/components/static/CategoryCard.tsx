import React from "react";

interface iCategory{
    icon?: any;
    title?: string;
    content?: string;
}

const CategoryCard:React.FC<iCategory> = ({icon, title, content}) => {
  return (
    <div
      className="w-[280px] h-[150px]  mt-2 p-6 flex justify-between  gap-3 hover:border-r-4 hover:border-[#02A95C] hover:border-b-4 duration-300 hover:transition-all  "
      style={{
        backdropFilter: "blur( 7px )",
        boxShadow: "0 6px 15px 0 rgba( 31, 38, 135, 0.37 )",
        background: "rgba( 255, 255, 255, 0.25 )",
      }}
    >
      <div className=" flex text-[50px] text-[#02A95C]">
        {icon}
      </div>
      <div className="flex flex-col ">
        <div className="font-bold text-[20px]">{title}</div>
        <div className="text-[15px]">{content}</div>
      </div>
    </div>
  );
};

export default CategoryCard;