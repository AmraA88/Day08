var total = 0;
function funWithArg (digit) {
    return (digit +9)/5;
}
funWithArg(6);
total= total + funWithArg(6);
console.log(total);
module.exports = funWithArg;