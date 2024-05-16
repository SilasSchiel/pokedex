let startIndex = [1];
let loadPokemons = [21];
let pokeNames = [];
let pokeSprites = [];
let pokeTypes_1 = [];
let pokeNumbers = [];
let pokeHeights = [];
let pokeWeights = [];
let pokeAbillitiy_1 = [];
let pokeStatHP = [];
let pokeStatAttack = [];
let pokeStatDefense = [];
let pokeStatSpAttack = [];
let pokeStatSpDefense = [];
let pokeStateSpeed = [];
let ishowDetailViewCalled = false;

async function loadMore() {
    startIndex = +startIndex + 20;
    loadPokemons = +loadPokemons + 20;
    document.getElementById('dnone-button').style = "pointer-events: none;";
    loadPokemon();
    renderPokemon();
}

async function loadPokemon() {
    for(let i = startIndex; i < loadPokemons; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        let response = await fetch(url);
        let responseAsJson = await response.json();
        let showPokemonNames = responseAsJson['name'];
        let showPokemonSprites = responseAsJson['sprites']['other']['official-artwork']['front_default'];
        let showPokemonTypes_1 = responseAsJson['types']['0']['type']['name'];
        let showPokemonNumber = responseAsJson['id'];
        let showPokemonHeight = responseAsJson['height'];
        let showPokemonWeight = responseAsJson['weight'];
        let showPokemonAbility_1 = responseAsJson['abilities']['0']['ability']['name'];
        let showPokemonStatHP = responseAsJson['stats']['0']['base_stat'];
        let showPokemonStatAttack = responseAsJson['stats']['1']['base_stat'];
        let showPokemonStatDefense = responseAsJson['stats']['2']['base_stat'];
        let showPokemonStatSpAttack = responseAsJson['stats']['3']['base_stat'];
        let showPokemonStatSpDefense = responseAsJson['stats']['4']['base_stat'];
        let showPokemonStateSpeed = responseAsJson['stats']['5']['base_stat'];
        pushDataInArray(showPokemonNames, showPokemonSprites, showPokemonTypes_1, showPokemonNumber, showPokemonHeight, showPokemonWeight, showPokemonAbility_1, showPokemonStatHP, showPokemonStatAttack, showPokemonStatDefense, showPokemonStatSpAttack, showPokemonStatSpDefense, showPokemonStateSpeed);
    }
    renderPokemon();
    document.getElementById('dnone-button').style = "pointer-events: auto;";
}


function pushDataInArray(showPokemonNames, showPokemonSprites, showPokemonTypes_1, showPokemonNumber, showPokemonHeight, showPokemonWeight, showPokemonAbility_1, showPokemonStatHP, showPokemonStatAttack, showPokemonStatDefense, showPokemonStatSpAttack, showPokemonStatSpDefense, showPokemonStateSpeed) {
    pokeNames.push(showPokemonNames);
    pokeSprites.push(showPokemonSprites);
    pokeTypes_1.push(showPokemonTypes_1);
    pokeNumbers.push(showPokemonNumber);
    pokeHeights.push(showPokemonHeight);
    pokeWeights.push(showPokemonWeight);
    pokeAbillitiy_1.push(showPokemonAbility_1);
    pokeStatHP.push(showPokemonStatHP);
    pokeStatAttack.push(showPokemonStatAttack);
    pokeStatDefense.push(showPokemonStatDefense);
    pokeStatSpAttack.push(showPokemonStatSpAttack);
    pokeStatSpDefense.push(showPokemonStatSpDefense);
    pokeStateSpeed.push(showPokemonStateSpeed);
}

function filterPokemon() {
    let search = document.getElementById('querry').value;
    search.toLowerCase();
    for (let i = 0; i < pokeNames.length; i++) {
        let pokeName = pokeNames[i];
        let pokeCard = document.getElementById(`pokemon-card-${i}`);
        if (pokeName.toLowerCase().includes(search)) {
            pokeCard.style.display = 'block'; 
        } else {
            pokeCard.style.display = 'none'; 
        }
    }
}
    
function renderPokemon() {
    for(let i = startIndex - 1; i < pokeNames.length; i++) {
        const pokeName = pokeNames[i];
        const pokeSprite = pokeSprites[i];
        const pokeType_1 = pokeTypes_1[i];
        document.getElementById('show-pokemons').innerHTML += templateRenderPokemons(pokeName, pokeSprite, pokeType_1, i);
        backgroundColorForType(pokeType_1, i);
    }
}

function showDetailView(index) {
    const pokeType_1 = pokeTypes_1[index];
    let showDetailView = document.getElementById('show-detail-view');
    showDetailView.classList.remove('d-none');
    document.getElementById('dnone-button').style.display = 'none';
    showDetailView.innerHTML = templateRenderDetailPokemon(index);
    ishowDetailViewCalled = true;
    backgroundColorForType(pokeType_1, index);
}

function closeDetailView() {
    document.getElementById('show-detail-view').classList.add('d-none');
    document.getElementById('dnone-button').style.display = 'flex';
}

function showBefore(index) {
    index--;
    if(index >= 0) {
        showDetailView(index);
    } else {
        document.getElementById('dnone-by-zero').style.display = "none";
    }
}

function showNext(index) {
    index++;
    if(index < loadPokemons - 1) {
        showDetailView(index);
    } else {
        document.getElementById('dnone-by-max').style.display = "none";
    }
}


function openAbout(index) {
    document.getElementById('detail-poke-infos').innerHTML = templeteOpenAbout(index);
}

function openStats(index) {
    document.getElementById('detail-poke-infos').innerHTML = templateOpenStats(index);
    document.getElementById('progress-hp').setAttribute('aria-valuenow', pokeStatHP[index]);
    document.getElementById('progress-hp-percent').style.width = pokeStatHP[index] + '%';
    document.getElementById('progress-attack').setAttribute('aria-valuenow', pokeStatAttack[index]);
    document.getElementById('progress-attack-percent').style.width = pokeStatAttack[index] + '%';
    document.getElementById('progress-defense').setAttribute('aria-valuenow', pokeStatDefense[index]);
    document.getElementById('progress-defense-percent').style.width = pokeStatDefense[index] + '%';
    document.getElementById('progress-sp-defense').setAttribute('aria-valuenow', pokeStatSpDefense[index]);
    document.getElementById('progress-sp-defense-percent').style.width = pokeStatSpDefense[index] + '%';
    document.getElementById('progress-sp-attack').setAttribute('aria-valuenow', pokeStatSpAttack[index]);
    document.getElementById('progress-sp-attack-percent').style.width = pokeStatSpAttack[index] + '%';
    document.getElementById('progress-speed').setAttribute('aria-valuenow', pokeStateSpeed[index]);
    document.getElementById('progress-speed-percent').style.width = pokeStateSpeed[index] + '%';
}