// Click on a tree for it to hide

document.getElementById('treeOne').addEventListener('click', hideTreeOne)
document.getElementById('treeTwo').addEventListener('click', hideTreeTwo)
document.getElementById('treeThree').addEventListener('click', hideTreeThree)
document.getElementById('treeFour').addEventListener('click', hideTreeFour)
document.getElementById('treeFive').addEventListener('click', hideTreeFive)

// document.getElementById('treeSix').addEventListener('click', hideTreeSix)
// document.getElementById('treeSeven').addEventListener('click', hideTreeSeven)
// document.getElementById('treeEight').addEventListener('click', hideTreeEight)
// document.getElementById('treeNine').addEventListener('click', hideTreeNine)
// document.getElementById('treeTen').addEventListener('click', hideTreeTen)
// document.getElementById('treeEleven').addEventListener('click', hideTreeEleven)
// document.getElementById('treeTwelve').addEventListener('click', hideTreeTwelve)
// document.getElementById('treeThirteen').addEventListener('click', hideTreeThirteen)
// document.getElementById('treeFourteen').addEventListener('click', hideTreeFourteen)
// document.getElementById('treeFifteen').addEventListener('click', hideTreeFifteen)
// document.getElementById('treeSixteen').addEventListener('click', hideTreeSixteen)

// Separated by individual trees

function hideTreeOne() {
    document.getElementById('treeOne').style.visibility = 'hidden'
}

function hideTreeTwo() {
    document.getElementById('treeTwo').style.visibility = 'hidden'
}

function hideTreeThree() {
    document.getElementById('treeThree').style.visibility = 'hidden'
    document.getElementById('nextButton').style.display = 'block'
    document.querySelector('.messageWon').style.display = 'block'
    document.querySelector('.messageWon').style.position = 'absolute'
}

function hideTreeFour() {
    document.getElementById('treeFour').style.visibility = 'hidden'
}

function hideTreeFive() {
    document.getElementById('treeFive').style.visibility = 'hidden'
}

// function hideTreeSix() {
//     document.getElementById('treeSix').style.visibility = 'hidden'
// }

// function hideTreeSeven() {
//     document.getElementById('treeSeven').style.visibility = 'hidden'
// }


// function hideTreeSix() {
//     document.getElementById('treeSix').style.visibility = 'hidden'
// }


// function hideTreeSeven() {
//     document.getElementById('treeSeven').style.visibility = 'hidden'
// }

// function hideTreeEight() {
//     document.getElementById('treeEight').style.visibility = 'hidden'
// }

// function hideTreeNine() {
//     document.getElementById('treeNine').style.visibility = 'hidden'
// }

// function hideTreeTen() {
//     document.getElementById('treeTen').style.visibility = 'hidden'
// }

// function hideTreeEleven() {
//     document.getElementById('treeEleven').style.visibility = 'hidden'
// }

// function hideTreeTwelve() {
//     document.getElementById('treeTwelve').style.visibility = 'hidden'
// }

// function hideTreeThirteen() {
//     document.getElementById('treeThirteen').style.visibility = 'hidden'
// }

// function hideTreeFourteen() {
//     document.getElementById('treeFourteen').style.visibility = 'hidden'
// }

// function hideTreeFifteen() {
//     document.getElementById('treeFifteen').style.visibility = 'hidden'
// }

// function hideTreeSixteen() {
//     document.getElementById('treeSixteen').style.visibility = 'hidden'
// }

