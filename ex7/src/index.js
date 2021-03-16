var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum = sum + 5;
}
addThree();
addFive();
console.log(sum)

module.exports = {
    addThree,
    addFive
};