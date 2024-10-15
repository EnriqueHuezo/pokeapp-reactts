export const calculateStat = (baseStat: number) => {
    return (baseStat * 100) / 255
}

export const pastelColours = {
    normal: 'rgb(196, 204, 176)',
    fire: 'rgb(255, 179, 128)',
    water: 'rgb(179, 200, 255)',
    electric: 'rgb(255, 251, 179)',
    grass: 'rgb(182, 233, 179)',
    ice: 'rgb(192, 236, 235)',
    fighting: 'rgb(235, 130, 128)',
    poison: 'rgb(215, 175, 215)',
    ground: 'rgb(245, 222, 179)',
    flying: 'rgb(204, 204, 255)',
    psychic: 'rgb(255, 179, 201)',
    bug: 'rgb(206, 214, 154)',
    rock: 'rgb(224, 214, 154)',
    ghost: 'rgb(183, 153, 217)',
    dragon: 'rgb(191, 178, 255)',
    dark: 'rgb(179, 163, 144)',
    steel: 'rgb(206, 206, 221)',
    fairy: 'rgb(250, 200, 218)'
}

export const pastelColoursArray = Object.keys(pastelColours);

export const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

export const coloursArray = Object.keys(colours);

export const typeOptions = Object.keys(colours).map((key) => ({
    value: key,
    label: key.charAt(0).toUpperCase() + key.slice(1),
}));

export const stats = {
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    'special-attack': 'SA',
    'special-defense': 'SD',
    speed: 'SPD'
}

export const navigationItems = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'PokeTeam',
        url: '/poketeams'
    }
]