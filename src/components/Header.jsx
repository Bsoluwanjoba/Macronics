import { FaCaretDown } from "react-icons/fa"
import { IoIosNotificationsOutline } from "react-icons/io"
import { MdOutlineMessage } from "react-icons/md"
export const Header = () => {
  return (
    <div className="w-full flex justify-between bg-white shadow-2xl items-center flex-wrap">

        {/* Logo */}
        <section className="p-3">
        <img src="/HOR.LOGO-BLUE.png" alt="macronics" width={200} height={200}  />
        </section>

        {/* Search bar */}
        <section className="p-3">
        <input type="search" name="products" id="prod" size={50} placeholder="Enter your search details" className="border-2 p-1 rounded-sm" />
        </section>

        {/* Notifications, Messages, Profile */}
        <section className="p-3 flex gap-3 items-center">
        <IoIosNotificationsOutline size={25}/>
        <MdOutlineMessage size={22}/>
            <div className="flex gap-3">
             <p className="h-10 w-10 bg-gray-500 rounded-full"></p>
             <p className="text-[#0ac] font-medium gap-2 items-center flex">Abraham Johnson <FaCaretDown /></p>
            </div>


        </section>

    </div>
  )
}
