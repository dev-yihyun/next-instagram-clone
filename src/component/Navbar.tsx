import { CiSquarePlus } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
function Navbar() {
    return (
        <>
            <div className="border-b border-gray-500 flex flex-row justify-between justify-items-center items-center p-4 mb-5">
                <h1 className="text-4xl font-bold p-1 rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 bg-clip-text text-transparent">
                    Instagram
                </h1>
                <div className=" flex flex-row gap-4 text-xl justify-items-center items-center">
                    <FaHome />
                    <IoSearch />
                    <CiSquarePlus />
                    <div className=" flex items-center p-2 rounded-md bg-blue-500 hover:bg-blue-700">
                        <button className="text-base font-bold text-white cursor-pointer">
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;
