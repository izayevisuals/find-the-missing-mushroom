// Click on a tree for it to hide

document.getElementById('treeOne').addEventListener('click', hideTreeOne)
document.getElementById('treeTwo').addEventListener('click', hideTreeTwo)
document.getElementById('treeThree').addEventListener('click', hideTreeThree)
document.getElementById('treeFour').addEventListener('click', hideTreeFour)
document.getElementById('treeFive').addEventListener('click', hideTreeFive)

// Separated by individual trees

function hideTreeOne() {
    document.getElementById('treeOne').style.visibility = 'hidden'
    document.querySelector('.wrongOne').style.display = 'none'
}

function hideTreeTwo() {
    document.getElementById('treeTwo').style.visibility = 'hidden'
    document.getElementById('nextButton').style.display = 'block'
    document.querySelector('.messageWon').style.display = 'block'
    document.querySelector('.wrongOne').style.display = 'none'
}

function hideTreeThree() {
    document.getElementById('treeThree').style.visibility = 'hidden'
    document.querySelector('.wrongOne').style.display = 'none'
}

function hideTreeFour() {
    document.getElementById('treeFour').style.visibility = 'hidden'
    document.querySelector('.wrongOne').style.display = 'none'
}

function hideTreeFive() {
    document.getElementById('treeFive').style.visibility = 'hidden'
    document.querySelector('.wrongOne').style.display = 'block'
    document.querySelector('.messageWon').style.display = 'none'
}