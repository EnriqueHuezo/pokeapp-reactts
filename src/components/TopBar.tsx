import { Link } from "react-router-dom"
import { navigationItems } from "../utils"
import pokemonLogo from "../assets/pokemon-logo.svg"

export const TopBar = () => {
    return (
        <header className="w-full h-20 fixed p-4 z-50 bg-white shadow-sm rounded-b-xl">
            <div className="basic-spacing !py-0 flex flex-row justify-between items-center">
                <figure className="w-full max-w-32">
                    <img src={pokemonLogo} alt="Pokemon Logo" />
                </figure>

                <nav>
                    <ul className="flex flex-row gap-8">
                        {
                            navigationItems.map((navItem) => (
                                <Link className="text-gray-700 font-semibold" key={navItem.name} to={navItem.url}>{navItem.name}</Link>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}
