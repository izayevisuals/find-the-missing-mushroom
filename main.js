document.getElementById('treeOne').addEventListener('click', hideTreeOne)
document.getElementById('treeTwo').addEventListener('click', hideTreeTwo)
document.getElementById('treeThree').addEventListener('click', hideTreeThree)
document.getElementById('treeFour').addEventListener('click', hideTreeFour)

// Separated by individual trees

function hideTreeOne() {
    document.getElementById('treeOne').style.visibility = 'hidden'
}

function hideTreeTwo() {
    document.getElementById('treeTwo').style.visibility = 'hidden'
}

function hideTreeThree() {
    document.getElementById('treeThree').style.visibility = 'hidden'
}

function hideTreeFour() {
    document.getElementById('treeFour').style.visibility = 'hidden'
}

