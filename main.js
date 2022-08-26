document.getElementById('treeOne').addEventListener('click', hideTreeOne)
document.getElementById('treeTwo').addEventListener('click', hideTreeTwo)
document.getElementById('treeThree').addEventListener('click', hideTreeThree)
document.getElementById('treeFour').addEventListener('click', hideTreeFour)
document.getElementById('treeFive').addEventListener('click', hideTreeFive)

function hideTreeOne() {
    console.log('clicked')
    document.getElementById('treeOne').style.display = 'none'
}

document.getElementById('treeTwo').addEventListener('click', hideTree)

function hideTreeTwo() {
    console.log('clicked')
    document.getElementById('treeTwo').style.display = 'none'
}

document.getElementById('treeThree').addEventListener('click', hideTree)

function hideTreeThree() {
    console.log('clicked')
    document.getElementById('treeThree').style.display = 'none'
}

document.getElementById('treeFour').addEventListener('click', hideTree)

function hideTreeFour() {
    console.log('clicked')
    document.getElementById('treeFour').style.display = 'none'
}

document.getElementById('treeFive').addEventListener('click', hideTree)

function hideTreeFive() {
    console.log('clicked')
    document.getElementById('treeFive').style.display = 'none'
}