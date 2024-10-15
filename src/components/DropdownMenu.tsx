import Select from 'react-select'
import { DropdownMenuProps } from '../types';

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
    options,
    onChange,
    styles,
    placeholder,
}) => {
    return (
        <Select
            className={styles}
            styles={{
                control: (styles, { isFocused }) => ({
                    ...styles,
                    borderColor: isFocused ? 'rgb(185, 28, 28)' : '#ccc',
                    boxShadow: isFocused ? '0 0 0 1px rgb(185, 28, 28)' : 'none', 
                    '&:hover': {
                        borderColor: isFocused ? 'rgb(185, 28, 28)' : '#ccc',
                    },
                }),
                option: (styles, { isSelected }) => ({
                    ...styles,
                    backgroundColor: isSelected ? 'rgba(128, 128, 128, 0.2)' : 'white',
                    color: isSelected ? '#333' : '#000',
                    '&:hover': {
                        backgroundColor: 'rgba(128, 128, 128, 0.1)',
                    },
                }),
            }}
            onChange={(selectedOption) => onChange(selectedOption ? selectedOption.value : '')}
            placeholder={placeholder}
            isClearable
            isSearchable
            options={options}
        />
    );
};