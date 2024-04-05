function minimumDistance(points) {
    points.sort((a, b) => a[0] - b[0]);
    console.log(points);
}
;
console.log(minimumDistance([[1, 1], [3, 4], [-1, 0]])); // 7
