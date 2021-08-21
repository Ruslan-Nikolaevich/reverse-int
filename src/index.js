module.exports = function reverse (n) {
    let num=String(n);
    num=num.split("").reverse().join("");
    num=parseInt(num);
    return num;
}
