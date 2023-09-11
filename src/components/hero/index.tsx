import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../inputs/Button";
import { useEffect } from "react";

interface heroProps {
  searchValue?: string;
  setSearchValue?(e: React.ChangeEvent<HTMLInputElement>): void;
  loadingBusiness?: boolean
}
export default function Hero({searchValue, setSearchValue, loadingBusiness}: heroProps) {
  useEffect(()=> {
    //ease in animation
    document.getElementById("searchBox")?.classList.add('scale-100')
  },[])
  return (
    <section className="px-[20px] sm:px-[60px] pt-[50px] pb-[80px] bg-gray-50 flex flex-col items-center justify-center">
      <div className="text-[42px] font-header font-semibold pt-[20px]">
        Discover Business all over the world
      </div>
      <p className="font-secondary mb-[60px]">.banklify - a modern platform, where you can search for businesses based on their name or category</p>
      <div id="searchBox" className="sticky top-0 w-full max-w-[1000px] border-[2px] border-black rounded-full p-[15px] flex items-center justify-between transition duration-700 ease-in-out scale-0">
        <div className="w-full px-[20px] flex gap-x-[20px] items-center bg-gray-50">
          <FontAwesomeIcon icon={faGlobe} size="lg"/>
          <input 
            type="text" 
            placeholder="What business are you looking for today?"
            className="outline-none bg-transparent w-full" 
            value={searchValue}
            onChange={setSearchValue}
            />
        </div>
        <Button text="Search" className="w-[150px]" loading={loadingBusiness}/>
      </div>
    </section>
  )
}