import { FaSearch} from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Header = () =>{
    return(
        <div className="border border-gray-200 py-6">
            {/* container  */}
            <div className="container sm:flex justify-between items-center">
                {/* Logo div */}
                <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
                    Logo
                </div>
                
                {/* search bar */}
                <div className="w-full sm:w-[300px] md:w-[70%] relative">
                    <input className="border-gray-300 border p-2 px-4 rounded-lg w-full" type="text" placeholder="Enter any product Name..." />
                    <FaSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-400 size={20}"/>
                </div>
                
                {/* user icon  */}
                <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
                    <FiUser />
                
                        {/* heart icon  */}
                    <div className="relative">
                        <FiHeart />
                        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] 
                        text-[12px] text-white grid place-items-center translate-x-l -translate-y-1]">
                            0
                        </div>
                    </div>
                        {/* cart icon  */}
                    <div className="relative">
                        <HiOutlineShoppingBag />
                        <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px]
                        text-[12px] text-white grid place-items-center translate-x-l -translate-y-1]">
                            0
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header;