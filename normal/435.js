function eraseOverlapIntervals(intervals) {
    intervals.sort(function (a, b) { return a[1] - b[1]; });
    var last = intervals[0][1];
    var re = 0;
    var i = 1;
    while (i < intervals.length) {
        intervals[i][0] < last ? re++ : last = intervals[i][1];
        i++;
    }
    return re;
}
;
console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]));
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]));
console.log(eraseOverlapIntervals([[1, 2], [2, 3]]));
