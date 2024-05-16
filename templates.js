function templateRenderPokemons(pokeName, pokeSprite, pokeType_1, i) {
    return `
    <div onclick="showDetailView(${i})" class="poke-card-design" id="pokemon-card-${i}">
        <h2>${pokeName}</h2>
        <div class="space-between">
            <span class="highlighted-text">${pokeType_1}</span>
            <img src="${pokeSprite}" alt="">
        </div>
    </div>
`;
}

function templateRenderDetailPokemon(index) {
    return `
    <div id="detail-content">
        <div onclick="closeDetailView()" class="closeDetailView">X</div>
        <div id="detail-poke-view">
            <div class="space-between">
                <h2>${pokeNames[index]}</h2>
                <span>#${pokeNumbers[index]}</span>
            </div>
            <span class="highlighted-text">${pokeTypes_1[index]}</span>
            <div class="center-img">
                <img src="${pokeSprites[index]}"></img>
            </div>
            <div class="arrow-space">
                <div><div id="dnone-by-zero" class="arrow-div" onclick="showBefore(${index})"><</div></div>
                <div><div id="dnone-by-max"class="arrow-div" onclick="showNext(${index})">></div></div>
            </div>
        </div>
        <div id="detail-poke-infos">
            <nav id="detail-poke-nav">
                <a href="#" onclick="openAbout(${index})">About</a>
                <a href="#" onclick="openStats(${index})">Base Stats</a>
            </nav
            <div id="change-content">
                <span class="highlighted-text">Size: ${pokeHeights[index] / 10} m</span> <br>
                <span class="highlighted-text">Weight: ${pokeWeights[index] / 10} kg</span> <br>
                <span class="highlighted-text">Ability: ${pokeAbillitiy_1[index]}</span>
            </div>
        </div>
    </div>
`;
}

function templeteOpenAbout(index) {
    return `
        <nav id="detail-poke-nav">
            <a href="#" onclick="openAbout(${index})">About</a>
            <a href="#" onclick="openStats(${index})">Base Stats</a>
        </nav
        <div id="change-content">
            <span class="highlighted-text">Size: ${pokeHeights[index] / 10} m</span> <br>
            <span class="highlighted-text">Weight: ${pokeWeights[index] / 10} kg</span> <br>
            <span class="highlighted-text">Ability: ${pokeAbillitiy_1[index]}</span>
        </div>
    `;
}

function templateOpenStats(index) {
    return `
    <nav id="detail-poke-nav">
        <a href="#" onclick="openAbout(${index})">About</a>
        <a href="#" onclick="openStats(${index})">Base Stats</a>
    </nav
    <div id="stats-container">
        <div class="stats-content">
            <span>HP</span>
            <span>${pokeStatHP[index]}</span>
            <div id="progress-hp" class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div id="progress-hp-percent"class="progress-bar bg-success" style="width: 25%"></div>
            </div>
        </div>
        <div class="stats-content">
            <span>Attack</span>
            <span>${pokeStatAttack[index]}</span>
            <div id="progress-attack" class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div id="progress-attack-percent" class="progress-bar bg-success" style="width: 25%"></div>
            </div>
        </div>
        <div class="stats-content">
            <span>Defense</span>
            <span>${pokeStatDefense[index]}</span>
            <div id="progress-defense" class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div id="progress-defense-percent" class="progress-bar bg-success" style="width: 25%"></div>
            </div>
        </div>
        <div class="stats-content">
            <span>Sp. Attack</span>
            <span>${pokeStatSpAttack[index]}</span>
            <div id="progress-sp-attack"class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div id="progress-sp-attack-percent" class="progress-bar bg-success" style="width: 25%"></div>
            </div>
        </div>
        <div class="stats-content">
            <span>Sp. Def</span>
            <span>${pokeStatSpDefense[index]}</span>
            <div id="progress-sp-defense" class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div id="progress-sp-defense-percent" class="progress-bar bg-success" style="width: 25%"></div>
            </div>
        </div>
        <div class="stats-content">
            <span>Speed</span>
            <span>${pokeStateSpeed[index]}</span>
            <div id="progress-speed" class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div id="progress-speed-percent" class="progress-bar bg-success" style="width: 25%"></div>
            </div>
        </div>
    </div>
`;
}