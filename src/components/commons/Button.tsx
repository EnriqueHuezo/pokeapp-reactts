import { ButtonProps } from "../../types"

export const Button: React.FC<ButtonProps> = ({ onClick, label, style, type = 'filled' }) => {
  const typeButton = type === 'filled' ? 'bg-primary' : 'border border-primary bg-white';
  
  return (
    <button 
        onClick={onClick}
        className={`${typeButton} px-4 py-2 text-white font-semibold rounded-md whitespace-nowrap ${style}`}
        style={{ color: type == 'outlined' ? "rgb(185 28 28)" : "white" }}>
        {label}
    </button>
  )
}
