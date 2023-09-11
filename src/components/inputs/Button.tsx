
interface ButtonProps {
  text?: string,
  type?: string,
}
export default function Button({text}: ButtonProps) {
  return (
    <button type="button" className="bg-black text-white rounded-full px-[20px] py-[10px] font-header font-medium">
      {text}
    </button>
  )
}