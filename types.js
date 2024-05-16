function backgroundColorForType(pokeType_1, i) {
    typeGrass(pokeType_1, i);
    typeFire(pokeType_1, i);
    typeWater(pokeType_1, i);
    typeNormal(pokeType_1, i);
    typeElectric(pokeType_1, i);
    typeIce(pokeType_1, i);
    typeFighting(pokeType_1, i);
    typePoison(pokeType_1, i);
    typeGround(pokeType_1, i);
    typeFlight(pokeType_1, i);
    typeBug(pokeType_1, i);
    typeDragon(pokeType_1, i);
    typeDark(pokeType_1, i);
    typeFairy(pokeType_1, i);
}

function typeGrass(pokeType_1, i) {
    if(pokeType_1 === 'grass') {
        document.getElementById(`pokemon-card-${i}`).style.backgroundColor = "#90EE90";
        if(ishowDetailViewCalled) {
            document.getElementById('detail-content').style.backgroundColor = "#90EE90";
        }
    } 
}

function typeFire(pokeType_1, i) {
    if(pokeType_1 === 'fire') {
        document.getElementById(`pokemon-card-${i}`).style.backgroundColor = "#FF4500";
        if(ishowDetailViewCalled) {
            document.getElementById('detail-content').style.backgroundColor = "#FF4500";
        }
    }
}

function typeWater(pokeType_1, i) {
    if(pokeType_1 === 'water') {
        document.getElementById(`pokemon-card-${i}`).style.backgroundColor = "#87CEEB";
        if(ishowDetailViewCalled) {
            document.getElementById('detail-content').style.backgroundColor = "#87CEEB";
        }
    }
}

function typeNormal(pokeType_1, i) {
    if(pokeType_1 === 'normal') {
        document.getElementById(`pokemon-card-${i}`).style.backgroundColor = "#C0C0C0";
        if(ishowDetailViewCalled) {
            document.getElementById('detail-content').style.backgroundColor = "#C0C0C0";
        }
    }
}

function typeElectric(pokeType_1, i) {
    if(pokeType_1 === 'electric') {
        document.getElementById(`pokemon-card-${i}`).style.backgroundColor = "#DAA520";
        if(ishowDetailViewCalled) {
            document.getElementById('detail-content').style.backgroundColor = "#DAA520";
        }
    }
}

function typeIce(pokeType_1, i) {
    if(pokeType_1 === 'ice') {
        document.getElementById(`pokemon-card-${i}`).style.backgroundColor = "#ADD8E6";
        if(ishowDetailViewCalled) {
            document.getElementById('detail-content').style.backgroundColor = "#ADD8E6";
        }
    }
}

function typeFighting(pokeType_1, i) {
    if(pokeType_1 === 'fighting') {
        document.getElementById(`pokemon-card-${i}`).style.backgroundColor = "#B7410E";
        if(ishowDetailViewCalled) {
            document.getElementById('detail-content').style.backgroundColor = "#B7410E";
        }
    }
}

function typePoison(pokeType_1, i) {
    if(pokeType_1 === 'poison') {
        document.getElementById(`pokemon-card-${i}`).style.backgroundColor = "#800080";
        if(ishowDetailViewCalled) {
            document.getElementById('detail-content').style.backgroundColor = "#800080";
        }
    }
}

function typeGround(pokeType_1, i) {
    if(pokeType_1 === 'ground') {
        document.getElementById(`pokemon-card-${i}`).style.backgroundColor = "#CC7722";
        if(ishowDetailViewCalled) {
            document.getElementById('detail-content').style.backgroundColor = "#CC7722";
        }
    }
}

function typeFlight(pokeType_1, i) {
    if(pokeType_1 === 'flight') {
        document.getElementById(`pokemon-card-${i}`).style.backgroundColor = "#FFFFFF";
        document.getElementById(`pokemon-card-${i}`).style.color = "black";
        if(ishowDetailViewCalled) {
            document.getElementById('detail-content').style.backgroundColor = "#FFFFFF";
            document.getElementById('detail-content').style.color = "black";
        }
    }
}

function typePsychic(pokeType_1, i) {
    if(pokeType_1 === 'psychic') {
        document.getElementById(`pokemon-card-${i}`).style.backgroundColor = "#4B0082";
        if(ishowDetailViewCalled) {
            document.getElementById('detail-content').style.backgroundColor = "#90EE90";
        }
    } 
}

function typeBug(pokeType_1, i) {
    if(pokeType_1 === 'bug') {
        document.getElementById(`pokemon-card-${i}`).style.backgroundColor = "#008000";
        if(ishowDetailViewCalled) {
            document.getElementById('detail-content').style.backgroundColor = "#008000";
        }
    } 
}

function typeRock(pokeType_1, i) {
    if(pokeType_1 === 'rock') {
        document.getElementById(`pokemon-card-${i}`).style.backgroundColor = "#808080";
        if(ishowDetailViewCalled) {
            document.getElementById('detail-content').style.backgroundColor = "#808080";
        }
    }
}

function typeGhost(pokeType_1, i) {
    if(pokeType_1 === 'ghost') {
        document.getElementById(`pokemon-card-${i}`).style.backgroundColor = "#9400D3";
        if(ishowDetailViewCalled) {
            document.getElementById('detail-content').style.backgroundColor = "#9400D3";
        }
    } 
}

function typeDragon(pokeType_1, i) {
    if(pokeType_1 === 'dragon') {
        document.getElementById(`pokemon-card-${i}`).style.backgroundColor = "#8B0000";
        if(ishowDetailViewCalled) {
            document.getElementById('detail-content').style.backgroundColor = "#8B0000";
        }
    }
}

function typeDark(pokeType_1, i) {
    if(pokeType_1 === 'dark') {
        document.getElementById(`pokemon-card-${i}`).style.backgroundColor = "#000000";
        if(ishowDetailViewCalled) {
            document.getElementById('detail-content').style.backgroundColor = "#000000";
        }
    } 
}

function typeSteel(pokeType_1, i) {
    if(pokeType_1 === 'steel') {
        document.getElementById(`pokemon-card-${i}`).style.backgroundColor = "#808080";
        if(ishowDetailViewCalled) {
            document.getElementById('detail-content').style.backgroundColor = "#808080";
        }
    }
}

function typeFairy(pokeType_1, i) {
    if(pokeType_1 === 'fairy') {
        document.getElementById(`pokemon-card-${i}`).style.backgroundColor = "#FFC0CB";
        if(ishowDetailViewCalled) {
            document.getElementById('detail-content').style.backgroundColor = "#FFC0CB";
        }
    }
}


