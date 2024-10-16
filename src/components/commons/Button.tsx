import { ButtonProps } from "../../types"

export const Button: React.FC<ButtonProps> = ({ onClick, label, style, color = "rgb(185 28 28)" }) => {
  return (
    <button 
        onClick={onClick}
        className={`px-4 py-2 text-white font-semibold rounded-md whitespace-nowrap ${style}`}
        style={{ background: color }}>
        {label}
    </button>
  )
}
