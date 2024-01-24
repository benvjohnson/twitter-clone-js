import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
        title: "Profile",
        icon: <BiUser />,
    },
];

export default function Home() {
    return (
        <div className={inter.className}>
            <div className="grid grid-cols-12 h-screen w-screen px-56">
                <div className="col-span-3 pt-8">
                    <div className="text-4xl h-fit w-fit hover:bg-gray-600 rounded-full p-4 cursor-pointer transition-all">
                        <BsTwitter />
                    </div>
                    <div className="mt-4 text-2xl font-semibold pr-4">
                        <ul>
                            {sideBarMenuItems.map((item) => (
                                <li
                                    className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-2xl px-5 py-2 w-fit cursor-pointer mt-2"
                                    key={item.title}
                                >
                                    <span>{item.icon}</span>
                                    <span>{item.title}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-5 px-10">
                            <button className="bg-[#1d9bf0] p-4 rounded-full w-full text-lg">
                                Tweet
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 border-r-[1px] border-l-2 border-white"></div>
                <div className="col-span-3"></div>
            </div>
        </div>
    );
}
