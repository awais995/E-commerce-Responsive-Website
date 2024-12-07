import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeaderTop =() =>{
    return (
        <div className=" border-b border-gray-200 hidden sm:block ">
            {/* container  */}
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    
                    {/* Social Handles  */}
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top_icon_wrapper">
                        <FaFacebook />
                        </div>
                        <div className="header_top_icon_wrapper">
                        <FaTwitter />
                        </div>
                        <div className="header_top_icon_wrapper">
                        <FaInstagram />
                        </div>
                        <div className="header_top_icon_wrapper">
                        <FaLinkedin />
                        </div>
                    </div>

                        {/* text  */}
                    <div className="text-gray-500 text-[12px]">
                        <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
                    </div>
                        {/* Currency Selector*/}
                    <div className="flex gap-4">
                        <select
                            className="text-gray-500 text-[12px] w-[70px]"
                            name="currency"
                            id="currencey"
                        >
                            <option value="USD $">USD $</option>
                            <option value="Euro €">Euro €</option>
                            <option value="PKR">PKR</option>
                        </select>

                            {/* Language Selector*/}
                        <select 
                            className="text-gray-500 text-[12px] w-[70px]"
                            name="language" id="language"
                        >
                            <option value="English">English</option>
                            <option value="Urdu">Urdu</option>
                        </select>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default HeaderTop;