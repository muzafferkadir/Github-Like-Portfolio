import Card from "@/components/card/Card";
import LeftSideBar from "@/components/leftSideBar/LeftSideBar";

export default function Home() {
  return (
    <div className="flex flex-wrap -mx-2 gap-y-2 lg:gap-y-0">
      <div className="w-full md:w-3/12 px-2">
        <LeftSideBar />
      </div>
      <div className="w-full md:w-6/12 px-2">
        <Card>Zart 2</Card>
      </div>
      <div className="w-full md:w-3/12 px-2">
        <Card>Zart 3</Card>
      </div>
    </div>
  );
}
