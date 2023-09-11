import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface ButtonProps {
  text?: string,
  type?: string,
  className?: string,
  onClick?(): void,
  loading?: boolean,
}
export default function Button({text, className, onClick, loading}: ButtonProps) {
  const buttonCss = "bg-black text-white rounded-full px-[20px] py-[10px] font-header font-medium"
  return (
    <button type="button" className={`${buttonCss} ${className}`} onClick={onClick}>
      {
        loading ? (
          <div>
            <FontAwesomeIcon icon={faArrowRotateRight} size='xl' className="animate-spin"/>
          </div>
        ) : (
          <div>{text}</div>
        )
      }
    </button>
  )
}