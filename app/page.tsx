import Experiences from "@/components/experiences/Experiences";
import LeftSideBar from "@/components/leftSideBar/LeftSideBar";
import RightSideBar from "@/components/rightSideBar/RightSideBar";

export default function Home() {
  return (
    <div className="flex flex-wrap -mx-2 gap-y-4 lg:gap-y-0">
      <div className="w-full md:w-3/12 px-2">
        <LeftSideBar />
      </div>
      <div className="w-full md:w-6/12 px-2">
        <Experiences />
      </div>
      <div className="w-full md:w-3/12 px-2">
        <RightSideBar />
      </div>
    </div>
  );
}
