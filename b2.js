const playerNames = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alisson",
];

let getUppperNames = (playerNames) => {
    return playerNames.map((name) => {
    return name.toUpperCase();
    });
};
