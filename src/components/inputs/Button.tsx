
interface ButtonProps {
  text?: string,
  type?: string,
  className?: string,
}
export default function Button({text, className}: ButtonProps) {
  const buttonCss = "bg-black text-white rounded-full px-[20px] py-[10px] font-header font-medium"
  return (
    <button type="button" className={`${buttonCss} ${className}`}>
      {text}
    </button>
  )
}