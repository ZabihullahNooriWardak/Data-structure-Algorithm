function zab(){
let myVar = 2;
    function nas() {
        myVar = 3;
        console.log(myVar); // 3
    }
    console.log(myVar); // 2
}
zab();
// nas(); // ReferenceError: nas is not defined