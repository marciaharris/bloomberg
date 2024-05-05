
import people from "./images/peopleicon.png";
import hands from './images/hands.png';
import eyes from './images/eyes.png';
import Carosel from "@/components/TopNav";

export default function Home() {
  return (
    <main className="overscroll-contain bg-local ml-56 mt-20">
      <h1 className="mb-10 font-bold text-xl"> Career Compass </h1>
      <div className="flex flex-row">
        <div className="relative text-center p-1 boxSize mr-10 rounded-md greyOne ">
          Match me with my ideal advisor
          <div className="flex justify-center mt-1">
            <img src={people} alt="people icon"/>
          </div>
          <button className="absolute bottom-5 left-5 right-5 text-sm fontColor blueColor rounded-lg">
            <a href="https://t.me/TechBridgeBOT">Find My Mentor</a></button>
        </div>
        <div className="boxSize text-center p-1 relative mr-10 rounded-md greyOne">
          Match me with my fellow mentees
          <div className="flex justify-center mt-1">
            <img src={hands} />
          </div>
          <button className="absolute bottom-5 left-5 right-5 fontColor blueColor rounded-lg">
            Find My Peers</button>
        </div>
        <div className="relative boxSize p-1 text-center mr-10 rounded-md greyOne">
          Chart my course to success
          <div className="flex justify-center mt-1">
            <img src={eyes} />
          </div>
          <button className="absolute bottom-5 left-5 right-5 fontColor blueColor rounded-lg">Find My Focus</button>
        </div>
        <div className="relative">
          <div className="fixed right-7 artboard phone-1 rounded-lg cardBlue">375×812</div>
        </div>
      </div>
      <h1 className="mt-10 mb-10 font-bold text-xl"> Mentor Circle </h1>
      <Carosel />
      <Carosel />
      <Carosel />
    </main>
  );
}
