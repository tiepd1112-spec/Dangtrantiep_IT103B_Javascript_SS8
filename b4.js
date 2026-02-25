const players = [
    "Messi - Forward - 25",
    "Ronaldo - Forward - 30",
    "Neymar - Forward - 18",
    "De Bruyne - Midfielder - 8",
    "Kante - Midfielder - 2",
  "Van Dijk - Defender - 5",
  "Alisson - Goalkeeper - 0",
];

const getReversedNames = (players) => {
    let names = players.map((player) => {
        let parts = player.split(" - ");
        let name = parts[0];
        return name;
    });

    names.reverse();
    return names;
};
console.log(getReversedNames(players));
