import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../inputs/Button";

export default function Navbar() {
  return (
    <section className="px-[60px] py-[30px] bg-gray-50 flex justify-between">
      <header className="font-header text-gray-800 text-[32px] font-bold w-[200px]">
        Banklify
      </header>
      <div className="flex items-center gap-x-[50px]">
        <span className="relative font-semibold font-header border-black border-[2px] px-3 py-2 rounded-full cursor-pointer">
          Services
          <div className="absolute -bottom-[10px] -right-[0px]">
            <FontAwesomeIcon icon={faArrowPointer} size="lg"/>
          </div>
        </span>
        <span className="font-semibold font-header cursor-pointer">Careers</span>
        <span className="font-semibold font-header cursor-pointer">About Us</span>
      </div>
      <div className="flex items-center gap-x-[20px] w-[200px]">
        <span className="font-semibold font-header cursor-pointer">Login</span>
        <Button text="Sign up" />
      </div>
    </section>
  )
}