export const numArray = (start:number, end:number, step:number=1):number[] => {
    const e = ((end > start) ? end : start);
    const s = ((end > start) ? start : end);
    const size = ((e - s) + 1) / step;
    const newArray = Array(size).fill(s).map((x, i) => x + i);
    return ((end > start) ?  newArray : newArray.reverse())
}


