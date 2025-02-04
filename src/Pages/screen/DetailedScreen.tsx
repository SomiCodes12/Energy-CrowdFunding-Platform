import pix from "../../assets/react.svg";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineClose,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { onNewToggleState } from "../../global/globalState";
import { FC } from "react";
import PersonProfile from "../../components/alternate/PersonProfile";

interface iProps {
  props: any;
}
const DetailedScreen: FC<iProps> = ({ props }) => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.newToggle);
  const onChangeState = () => {
    dispatch(onNewToggleState(!toggle));
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "rgba( 255, 255, 255, 0.15 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 4px )",
          //   border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
        className="fixed w-full min-h-[100vh]  z-50 top-0 left-0 flex items-center justify-center flex-col"
      >
        <div className="w-[90%] min-h-[100vh] timeLine:overflow-scroll bg-white relative flex justify-center items-center">
          <div
            onClick={onChangeState}
            className="absolute top-0 right-0 h-[50px] flex justify-center hover:text-white transition-all duration-500 items-center cursor-pointer rounded-l-full hover:bg-[#001d23] bg-emerald-500 text-[30px] w-[50px]"
          >
            <AiOutlineClose />
          </div>
          <div className="w-[85%] flex timeLine:flex-col timeLine:mt-[450px] justify-between">
            <div className="timeLine:w-full w-[48%] h-full ">
              <div className="w-full tablet:h-[300px] timeLine:w-full h-[350px]">
                <img src={pix} alt="" className="w-full border h-full" />
              </div>
              <div className="  mt-[50px]">
                <div className="my-[10px] minMedium:text-[15px] text-[25px] font-bold">
                  Motivation
                </div>
                <div className="text-[13px]">{props?.motivation}</div>
              </div>
              <div className="flex items-center my-5">
                <div className="mr-3">Share:</div>
                <div className="flex w-[100px] justify-between text-[20px]">
                  <BsFacebook />
                  <AiOutlineTwitter />
                  <AiOutlineInstagram />
                  <AiFillLinkedin />
                </div>
              </div>
            </div>
            <div className="w-[48%] timeLine:w-full h-full">
              <button className="px-6 py-2 tablet:text-[13px] bg-emerald-500 text-white capitalize font-semibold">
                {props?.category}
              </button>
              <div className="text-[30px] tablet:text-[20px] minMedium:text-[23px] font-bold my-[20px]">
                {props?.title}
              </div>
              <div className="flex items-center text-[13px]">
                <PersonProfile />
              </div>
              <div className="  my-[25px]">
                <div className="my-[10px] tablet:text-[18px] minMedium:text-[23px] text-[25px] font-bold">
                  Description
                </div>
                <div className="minMedium:text-[13px] tablet:text-[12px]">
                  {props?.description}
                </div>
              </div>
              <div className="flex w-full tablet:text-[12px] my-[30px] ">
                <div className="w-[140px] mr-5 h-[70px] px-[20px] tablet:w-[100px] tablet:h-[40px] border flex justify-center items-center flex-col">
                  <div className="font-bold">₦{props?.amountNeeded}</div>
                  <div>Goal</div>
                </div>
                <div className="w-[140px] h-[70px] px-[20px] tablet:w-[100px] tablet:h-[40px] border flex justify-center items-center flex-col">
                  <div className="font-bold">₦{props?.amountRaised}</div>
                  <div>Raised</div>
                </div>
              </div>
              <div className="w-[200px] h-[50px] bg-green-500 flex justify-center shadow-md items-center">
                Back Campaign
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedScreen;
