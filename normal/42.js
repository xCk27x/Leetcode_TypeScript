function trap(height) {
    var sumVolume = 0;
    for (var times = 0; times < 2; times++) {
        var i = 0, j = 1, curVolume = 0;
        while (j < height.length) {
            if (height[i] <= height[j]) {
                i = j;
                j++;
                console.log('curVolume', curVolume);
                sumVolume += curVolume;
                curVolume = 0;
            }
            else {
                curVolume += height[i] - height[j];
                j++;
            }
        }
        height = height.slice(i).reverse();
    }
    return sumVolume;
    // while(j < height.length) {
    //   if (height[i] <= height[j]) {
    //     i = j;
    //     j++;
    //     sumVolume += curVolume;
    //     curVolume
    //   } else {
    //     curVolume += height[i] - height[j];
    //     j++
    //   }
    // }
    // height = height.slice(i).reverse();
    // i = 0, j = 1;
    // curVolume = 0;
    // while(j < height.length) {
    //   if (height[i] <= height[j]) {
    //     i = j;
    //     j++;
    //     sumVolume += curVolume;
    //     curVolume
    //   } else {
    //     curVolume += height[i] - height[j];
    //     j++
    //   }
    // }
    // return sumVolume;
}
;
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
