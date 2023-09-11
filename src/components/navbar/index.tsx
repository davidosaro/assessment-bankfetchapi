import Button from "../inputs/Button";

export default function Navbar() {
  return (
    <section className="px-[60px] py-[30px] bg-gray-50 flex justify-between">
      <header className="font-primary text-[32px] font-bold w-[200px]">
        Banklify
      </header>
      <div className="flex items-center gap-x-[50px]">
        <span className="font-semibold font-header hover:border-b-2 border-black border-[2px] px-3 py-2 rounded-full">Services</span>
        <span className="font-semibold font-header hover:border-b-2 border-black leading-none">Careers</span>
        <span className="font-semibold font-header hover:border-b-2 border-black leading-none">About Us</span>
      </div>
      <div className="flex items-center gap-x-[20px] w-[200px]">
        <span className="font-semibold font-header">Login</span>
        <Button text="Sign up" />
      </div>
    </section>
  )
}