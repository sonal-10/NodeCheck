// ARRAY SORT

let grades = [100, 10, 80, 20, 60, 30, 40, 50, 20];

grades = grades.sort(AesSort);

grades.forEach(print);

function DesSort(x, y) {
    return y - x;
}
function AesSort(x, y) {
    return x - y;
}
function print(element) {
    console.log(element);
}