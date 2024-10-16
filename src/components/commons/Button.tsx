import { ButtonProps } from "../../types"

export const Button: React.FC<ButtonProps> = ({ onClick, label, style, type = 'filled' }) => {
  const typeButton = type === 'filled' ? 'bg-primary' : 'border border-primary bg-white text-red-800';
  
  return (
    <button 
        onClick={onClick}
        className={`${typeButton} px-4 py-2 text-white font-semibold rounded-md whitespace-nowrap ${style}`}>
        {label}
    </button>
  )
}
