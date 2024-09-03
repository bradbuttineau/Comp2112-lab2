//create an immediately invoked function expression(IIFE) to run at startup
(function () {
    function start() {
        console.log('App Started');
        let x = 1;
        console.log(x);
    };
    // run the function
    window.addEventListener('load', start);
    // console.log(x); causes error in console


}
)();
