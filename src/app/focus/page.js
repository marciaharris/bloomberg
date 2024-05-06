export default function Focus() {
    return (
        <div className="ml-44 mt-20 overflow-scroll">
            <h1 className="mb-10 font-bold text-xl"> Success Toolkit </h1>
            <div className="flex flex-row">
                <div className="relative text-center p-1 boxSizeO mr-10 rounded-lg greyOne ">
                    <div className=" flex justify-center mt-1 imageSize ">
                        <img src="https://pbs.twimg.com/media/GM24o13XkAAECe0?format=png&name=240x240" alt="people icon" />
                    </div>
                    <button className="absolute bottom-5 left-5 right-5  fontColor blueColor rounded-lg">
                        <a href="https://t.me/TechBridgeMatchBot">My Portfolio</a></button>
                </div>
                <div className="relative text-center p-1 boxSizeO mr-10 rounded-lg greyOne ">
                    <div className=" flex justify-center mt-1 imageSize ">
                        <img src="https://pbs.twimg.com/media/GM24o1cWwAA2fVD?format=png&name=240x240" alt="people icon" />
                    </div>
                    <button className="absolute bottom-5 left-5 right-5  fontColor blueColor rounded-lg">
                        <a href="https://t.me/TechBridgeMatchBot">My resume</a></button>
                </div>
                <div className="boxSizeO text-center p-1 relative mr-10 rounded-lg greyOne">
                    <div className="flex justify-center mt-1 w-16 h-16">
                        <img src="https://pbs.twimg.com/media/GM2JiMaWIAAuuWu?format=png&name=small" />
                    </div>
                    <button className="absolute bottom-5 left-5 right-5 fontColor blueColor rounded-lg">
                        My Network</button>
                </div>
                <div className="relative boxSizeO p-1 text-center mr-10 rounded-lg greyOne">
                    <div className="relative">
                        <div className="mt-1 w-16 h-16 justify-self-end">
                            <img src="https://pbs.twimg.com/media/GM2JgSbXAAAWEcR?format=png&name=small" />
                        </div>
                    </div>
                    <button className="absolute bottom-5 left-5 right-5 fontColor blueColor rounded-lg">Interview Prep</button>
                </div>
            </div>
            <h1 className="mt-20 mb-2 font-bold text-xl flex flex-row"> Event Calendar </h1>
            <div className="flex flex-row">
            <div className="mr-3">
                <img src="https://pbs.twimg.com/media/GM2tKUdWQAA7S9R?format=png&name=small"/>
            </div>
            <div className="w-80 h-96 rounded-lg">
                <img src="https://pbs.twimg.com/media/GM3HwffWUAAfLHv?format=png&name=900x900"/>
            </div>
            </div>
        </div>
    )
}