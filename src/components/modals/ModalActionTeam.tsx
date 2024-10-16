import { useState } from "react"
import { usePokemonsTeams } from "../../hooks/usePokemonsTeams"
import { ModalActionTeamProps } from "../../types"
import { Button } from "../commons/Button"
import { Input } from "../commons/Input"

export const ModalActionTeam: React.FC<ModalActionTeamProps> = ({ toggleModal, type, oldName }) => {
    const { updatePokemonNameTeam, removePokemonTeam, addPokemonTeam } = usePokemonsTeams();
    const [newName, setNewName] = useState<string>(oldName || '');

    const handleInputTeamName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    };

    const handleDeleteTeam = () => {
        if (oldName) {
            removePokemonTeam(oldName);
            toggleModal();
            setNewName('');
        }
    };

    const handleEditTeamName = () => {
        if (oldName && newName.trim()) {
            updatePokemonNameTeam(oldName, newName);
            toggleModal();
            setNewName('');
        }
    };

    const handleAddTeam = () => {
        if (newName.trim()) {
            addPokemonTeam(newName);
            toggleModal();
            setNewName('');
        }
    };

    const isEdit = type === 'edit';
    const isDelete = type === 'delete';
    const isAdd = type === 'add';

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="absolute inset-0 bg-overlay" onClick={toggleModal} />
            <div className="w-full max-w-xl bg-white relative z-[60] p-6 m-4 rounded-lg">
                <div className="flex flex-col gap-6">
                    <div>
                        <p className="secondary-text">
                            {isEdit ? 'Update Team Name' : isDelete ? 'Delete Team' : 'Add New Team'}
                        </p>
                        <p>
                            {isEdit && 'You are about to change the name of this Pokémon team. Make sure the new name accurately represents your team, as this action will update all references to it.'}
                            {isDelete && 'Deleting this team will remove all Pokémon associated with it permanently. This action cannot be undone, so please make sure you\'re certain before proceeding.'}
                            {isAdd && 'Create a new Pokémon team by giving it a name. You can always change it later.'}
                        </p>
                    </div>

                    {(isEdit || isAdd) && (
                        <div>
                            <Input
                                value={newName}
                                onChange={handleInputTeamName}
                                styles="w-full"
                                placeholder="Enter team name"
                            />
                        </div>
                    )}

                    <div className="flex sm:flex-row flex-col-reverse justify-end gap-4">
                        <Button
                            label="Cancel"
                            onClick={toggleModal}
                            type="outlined"
                        />

                        <Button
                            label="Confirm"
                            onClick={
                                isEdit ? handleEditTeamName : 
                                isDelete ? handleDeleteTeam : 
                                isAdd ? handleAddTeam : () => {}
                            }
                            type="filled"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};