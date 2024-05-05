import Image from "next/image";
import Carosel from "@/components/TopNav";

export default function Home() {
  return (
    <main className="overscroll-contain bg-local ml-56 mt-10">
      <h1 className="mb-10 font-bold"> Career Compass </h1>
      <div className="flex flex-row">
        <div className="boxSize mr-10 rounded-md greyOne ">
          Match me with my ideal advisor
          <button className="fontColor blueColor rounded-lg">Find My Mentor</button>
        </div>
        <div className="boxSize mr-10 rounded-md greyOne">
          Match me with my fellow mentees
          <button className="fontColor blueColor rounded-lg">Find My Peers</button>
        </div>
        <div className="boxSize mr-10 rounded-md greyOne">
          Chart my course to success
          <button className="fontColor blueColor rounded-lg">Find My Focus</button>
        </div>
        <div className="relative">
          <div className="fixed right-7 artboard phone-4 rounded-lg cardBlue">375×812</div>
        </div>
      </div>
      <h1 className="mt-10 mb-10 font-bold"> Mentor Circle </h1>
      <Carosel />
      <Carosel />
      <Carosel />
    </main>
  );
}
