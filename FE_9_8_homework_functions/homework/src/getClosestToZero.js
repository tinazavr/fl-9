function getClosestToZero(...args) {
    let min = args[0];
    for (let i = 1; i < args.length; i++) {
        if (Math.abs(args[i]) < Math.abs(min)) {
            min = args[i];
        }
    }
    return min;
}