import { useState } from "react"
import { usePokemonsTeams } from "../../hooks/usePokemonsTeams"
import { ModalActionTeamProps } from "../../types"
import { Button } from "../commons/Button"
import { Input } from "../commons/Input"

export const ModalActionTeam: React.FC<ModalActionTeamProps> = ({ toggleModal, type, oldName }) => {
    const { updatePokemonNameTeam, removePokemonTeam } = usePokemonsTeams();
    const [newName, setNewName] = useState<string>(oldName || '');

    const handleInputTeamName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    };

    const handleDeleteTeam = () => {
        if (oldName) {
            removePokemonTeam(oldName);
            toggleModal();
        }
    };

    const handleEditTeamName = () => {
        if (oldName && newName.trim()) {
            updatePokemonNameTeam(oldName, newName);
            toggleModal();
        }
    };

    const isEdit = type === 'edit';

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="absolute inset-0 bg-overlay" onClick={toggleModal} />
            <div className="w-full max-w-xl bg-white relative z-[60] p-6 m-4 rounded-lg">
                <div className="flex flex-col gap-6">
                    <div>
                        <p className="secondary-text">{isEdit ? 'Update Team Name' : 'Delete Team'}</p>
                        <p>
                            {isEdit
                                ? 'You are about to change the name of this Pokémon team. Make sure the new name accurately represents your team, as this action will update all references to it.'
                                : 'Deleting this team will remove all Pokémon associated with it permanently. This action cannot be undone, so please make sure you\'re certain before proceeding.'}
                        </p>
                    </div>

                    {isEdit && (
                        <div>
                            <Input
                                value={newName}
                                onChange={handleInputTeamName}
                                styles="w-full"
                            />
                        </div>
                    )}

                    <div className="flex sm:flex-row flex-col justify-end gap-4">
                        <Button
                            label="Confirm"
                            onClick={isEdit ? handleEditTeamName : handleDeleteTeam}
                            color="red"
                        />
                        <Button
                            label="Cancel"
                            onClick={toggleModal}
                            color="red"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};