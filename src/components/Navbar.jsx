// import { Link } from "react-router-dom"
import { useState } from "react"
import { IoIosArrowDropleftCircle } from "react-icons/io"
import { IoIosArrowDroprightCircle } from "react-icons/io"
import { Link } from "react-router-dom"
import { MdSpaceDashboard, MdProductionQuantityLimits } from "react-icons/md"
import { FaUser, FaChartLine, FaChevronDown } from "react-icons/fa"
import { RiListOrdered2 } from "react-icons/ri"
import { BiSolidReport } from "react-icons/bi"
import { BsLayoutTextWindowReverse } from "react-icons/bs"
import { ImEnter } from "react-icons/im"


function Navbar() {

    const [isOpen, setIsOpen] = useState(true)
    const [usersOpen, setUsersOpen] = useState(false)
    const [productsOpen, setProductsOpen] = useState(false)

        function handleNav() {
            setIsOpen(!isOpen)
        }

        const toggleUsers = () => setUsersOpen(!usersOpen)
        const toggleProducts = () => setProductsOpen(!productsOpen)



  return (
    <div>
        <section className="">
            {/* Mobile Nav */}
        </section>



            {/* Laptop Screen */}
        <section className={`${isOpen ? 'w-[250px] h-full' : 'w-[70px]'} bg-white shadow-2xl p-2`}>
            <p className="flex justify-between">
            <IoIosArrowDroprightCircle size={27} className={`text-[#0ac] cursor-pointer ${isOpen? 'hidden' : ''}`} onClick={handleNav}/>
            <IoIosArrowDropleftCircle size={27} className={`text-[#0ac] cursor-pointer ${isOpen ? 'block ml-[12em]' : 'hidden'}`} onClick={handleNav}/>
            </p>
            
            <nav className=" mt-[2em] ml-[0.3em]">
            <Link className="hover:bg-[#0ac] hover:text-white hover:rounded-md border-b-2 border-[#116] flex gap-3 p-3">
                <p><MdSpaceDashboard size={25} className="text-[#0ac]"/></p>
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'}`}>Dashboard</p>
            </Link>

            <p className="flex gap-x-3 gap-y-5 p-3 items-center border-b-2 border-[#116]">
                <p><FaUser size={25} className="text-[#0ac]"/></p>
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'}`}>Users <FaChevronDown className="text-[#0ac]" />
                <Link>Consumers</Link>
                <Link>Vendors</Link>
                </p>
            </p>

            <p className="flex gap-3 p-3 items-center border-b-2 border-[#116]">
                <p><MdProductionQuantityLimits size={25} className="text-[#0ac]"/></p>
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'} flex items-center gap-2`}>Products <FaChevronDown className="text-[#0ac]" size={12} />
                <Link>Product Inventory</Link>
                <Link>Manage Product</Link>
                </p>
            </p>

            <Link className="flex gap-3 p-3 items-center border-b-2 border-[#116]">
                <p><RiListOrdered2 size={25} className="text-[#0ac]"/></p>
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'}`}>Orders</p>
            </Link>

            <Link className="flex gap-3 p-3 items-center border-b-2 border-[#116]">
                <p><BiSolidReport size={25} className="text-[#0ac]"/></p>
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'}`}>Reports</p>
            </Link>

            <Link className="flex gap-3 p-3 items-center border-b-2 border-[#116]">
                <p><BsLayoutTextWindowReverse size={25} className="text-[#0ac]"/></p>
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'}`}>Revenue</p>
            </Link>

            <Link className="flex gap-3 p-3 items-center  border-b-2 border-[#116]">
                <p><FaChartLine size={25} className="text-[#0ac]"/></p>
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'}`}>Sales</p>
            </Link>
            </nav>

            <div className="mt-[26.5em]">
                <p><ImEnter /></p>
                <button>Logout</button>
            </div>
        </section>
    </div>
  )
}

export default Navbar