const playerNames = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alisson",
];

let getUpperNames = (playerNames) => {
    return playerNames.map((name) => {
    return name.toUpperCase();
    });
};

console.log(getUpperNames(playerNames));
