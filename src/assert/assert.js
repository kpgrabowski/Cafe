function assert(status){
    console.assert(status, "BAD");
}

// function assertTypeOf(obj, type){
//     assert(typeof type === 'string');
//     assert(typeof obj === type);
//     return obj
// }
//
// function assertTypeOfString(obj){
//     return assertTypeOf(obj, 'string');
// }
//
// function assertInstanceOf(obj, clazz){
//     assert(obj instanceof clazz);
//     return obj;
// }
//
// function assertDefined(obj) {
//     assert(obj != undefined);
//     return obj;
// }
//
// function assertTypeOfNumber(obj){
//     return assertTypeOf(obj, 'number');
// }
//
// function assertTypeOfFunction(obj){
//     return assertTypeOf(obj, 'function');
// }