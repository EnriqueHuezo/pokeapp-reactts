import { PokemonDetail } from "./pokemon";

export interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type: 'filled' | 'outlined';
    label: string;
    style?: string;
    color?: string;
}

export interface InputProps {
    styles?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DropdownMenuProps {
    options: TypeOptions[];
    onChange: (value: string) => void;
    placeholder?: string;
    styles?: string;
}

export interface TypeOptions {
    value: string;
    label: string;
}

export interface ModalActionTeamProps {
    toggleModal: () => void;
    type: 'edit' | 'delete' | 'add';
    oldName?: string;
}

export interface ModalAddPokemonToTeamProps {
    toggleModal: () => void;
    pokemon: PokemonDetail; 
}

export interface LoaderViewProps {
    styles?: string;
  }