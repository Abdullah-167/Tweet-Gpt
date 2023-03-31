import { BsLightning } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import Link from "next/link";

const ResponsiveNav = () => {
  const router = useRouter();
  return (
    <div className="w-full bg-white px-4 sm:px-10 py-8 fixed bottom-0 left-0 right-0 z-20">
      <div className="flex justify-between items-center gap-1 sm:gap-4 text-2xl">
        {data.map((item, index) => {
          return (
            <Link href={item.url} key={index} passHref>
              <div className={`flex gap-2 rounded-full px-6 py-2.5 ${router.pathname === item.url ? "login-btn text-white " : "text-[#445C6D]"}`}>
                <span className="text-base flex self-center">{item.icon}</span>
               {router.pathname === item.url &&  <span className="text-xs sm:text-sm">{item.title}</span>}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ResponsiveNav;
const data = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <MdOutlineDashboardCustomize />,
  },
  {
    title: "Auto Tweet",
    url: "/auto-tweet",
    icon: <BsLightning />,
  },
  {
    title: "Schedular",
    url: "/schedular",
    icon: <IoCalendarOutline />,
  },
  {
    title: "User",
    url: "/login",
    icon: <IoPersonOutline />,
  },
];
