// Sample player data array
const players = [
    { name: "Kyle Cuffe Jr.", height: "6'3", position: "Guard", jerseyNumber: 0 },
    { name: "Donnie Freeman", height: "6'9", position: "Forward", jerseyNumber: 1 },
    { name: "Lucas Taylor", height: "6'5", position: "Guard", jerseyNumber: 3 },
    { name: "Chris Bell", height: "6'7", position: "Forward", jerseyNumber: 4 },
    { name: "Jaquan Carlos", height: "6'0", position: "Guard", jerseyNumber: 5 },
    { name: "Petar Majstorvic", height: "6'8", position: "Forward", jerseyNumber: 6 },
    { name: "Elijah Moore", height: "6'6", position: "Guard", jerseyNumber: 8 },
    { name: "Naheem McLeod", height: "7'4", position: "Center", jerseyNumber: 10 },
    { name: "Chance Westry", height: "6'6", position: "Guard", jerseyNumber: 11 },
    { name: "Anthony Clayton", height: "6'0", position: "Guard", jerseyNumber: 12 },
    { name: "Jayare Davis", height: "6'7", position: "Forward", jerseyNumber: 13 },
    { name: "Noah Lobdell", height: "6'0", position: "Guard", jerseyNumber: 24 },
    { name: "Chaz Owens", height: "6'5", position: "Forward", jerseyNumber: 30 },
    { name: "Chris Gatty", height: "6'2", position: "Guard", jerseyNumber: 34 },
    { name: "Eddie Lampkin Jr", height: "6'11", position: "Center", jerseyNumber: 44 }
];


function sortCards() {
    const sortBy = document.getElementById("sortBy").value; 
    let sortedPlayers;

    // Sort players based on the selected option
    if (sortBy === "name") {
        sortedPlayers = players.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "height") {
        sortedPlayers = players.sort((a, b) => parseInt(a.height) - parseInt(b.height));
    } else if (sortBy === "position") {
        sortedPlayers = players.sort((a, b) => a.position.localeCompare(b.position));
    }

    
    renderPlayerCards(sortedPlayers);
}


function renderPlayerCards(players) {
    const container = document.getElementById("playerCards");
    container.innerHTML = ""; 
    players.forEach(player => {
        const card = document.createElement("div");
        card.classList.add("player-card");
        card.innerHTML = `
            <img src="${player.imageUrl}" alt="${player.name}">
            <div class="badge">${player.jerseyNumber}</div>
            <div class="content">
                <div class="name">${player.name}</div>
                <div class="position">${player.position}</div>
                <div class="stats">${player.height}</div>
                <div class="location">${player.location}</div>
                <div class="year">${player.year}</div>
            </div>
        `;
        container.appendChild(card);
    });
}


renderPlayerCards(players);