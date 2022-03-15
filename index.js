function receivesAFunction(cb) {
    cb();
    return null;
}

function returnsANamedFunction() {
    const namedFunction = () => console.log('I hope this works');
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("...");
    }
}