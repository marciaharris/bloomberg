
import people from "/public/images/peopleicon.png";
import hands from '/public/images/hands.png';
import eyes from '/public/images/eyes.png';
import Carosel from "@/components/TopNav";
// 

export default function Home() {
  return (
    <main className="ml-56 mt-20 overflow-scroll">
      <h1 className="mb-10 font-bold text-xl"> Career Compass </h1>
      <div className="flex flex-row">
        <div className="relative text-center p-1 boxSize mr-10 rounded-md greyOne ">
          Match me with my ideal advisor
          <div className=" flex justify-center mt-1 imageSize ">
            <img src="https://pbs.twimg.com/media/GM2Jy1PWwAAH9nF?format=png&name=small" alt="people icon" />
          </div>
          <button className="absolute bottom-5 left-5 right-5 text-sm fontColor blueColor rounded-lg">
            <a href="https://t.me/TechBridgeBOT">Find My Mentor</a></button>
        </div>
        <div className="boxSize text-center p-1 relative mr-10 rounded-md greyOne">
          Match me with my fellow mentees
          <div className="flex justify-center mt-1 w-16 h-16">
            <img src="https://pbs.twimg.com/media/GM2JiMaWIAAuuWu?format=png&name=small" />
          </div>
          <button className="absolute bottom-5 left-5 right-5 fontColor blueColor rounded-lg">
            Find My Peers</button>
        </div>
        <div className="relative boxSize p-1 text-center mr-10 rounded-md greyOne">
          Chart my course to success
          <div className="flex justify-center mt-1 w-16 h-16">
            <img src="https://pbs.twimg.com/media/GM2JgSbXAAAWEcR?format=png&name=small" />
          </div>
          <button className="absolute bottom-5 left-5 right-5 fontColor blueColor rounded-lg">Find My Focus</button>
        </div>
   
      </div>
      <h1 className="mt-10 mb-10 font-bold text-xl"> Mentor Circle </h1>
      <Carosel />
      <Carosel />
      <Carosel />
    </main>
  );
}
