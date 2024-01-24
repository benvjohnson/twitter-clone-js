import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";

import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";

interface TwitterSideBarButton {
    title: string;
    icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSideBarButton[] = [
    {
        title: "Home",
        icon: <BiHomeCircle />,
    },
    {
        title: "Explore",
        icon: <BiHash />,
    },
    {
        title: "Notifications",
        icon: <BsBell />,
    },
    {
        title: "Messages",
        icon: <BsEnvelope />,
    },
    {
        title: "Bookmarks",
        icon: <BsBookmark />,
    },
    {
        title: "Twitter Blue",
        icon: <BiMoney />,
    },
    {
        title: "Profile",
        icon: <BiUser />,
    },
    {
        title: "More Options",
        icon: <SlOptions />,
    },
];

export default function Home() {
    return (
        <div>
            <div className="grid grid-cols-12 h-screen w-screen px-56">
                <div className="col-span-3 pt-8 ml-28">
                    <div className="text-2xl h-fit w-fit hover:bg-gray-600 rounded-full p-4 cursor-pointer transition-all">
                        <BsTwitter />
                    </div>
                    <div className="mt-1 text-xl pr-4">
                        <ul>
                            {sideBarMenuItems.map((item) => (
                                <li
                                    className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-2xl px-3 py-2 w-fit cursor-pointer mt-2"
                                    key={item.title}
                                >
                                    <span className="text-3xl">
                                        {item.icon}
                                    </span>
                                    <span>{item.title}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-5 px-10">
                            <button className="bg-[#1d9bf0] font-semibold py-2 px-4 rounded-full w-full text-lg">
                                Tweet
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen border-gray-600 overflow-scroll scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin scrollbar-thumb-rounded">
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                </div>
                <div className="col-span-3"></div>
            </div>
        </div>
    );
}
