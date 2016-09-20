function print(a) {
    var space = " ";
    var star = "*";
    var forspa = "";
    var forsta = "";
    var test = "";
    for (var i = 1; i <= a; i++) {
        //for(var j: number = 1;j<=a*2-1;j++)
        //{
        for (var k = 1; k <= a - 1; k++) {
            forspa = forspa + space;
        }
        for (var x = 0; x < i * 2 - 1; x++) {
            forsta = forsta + star;
        }
        //for(var y: number = 1;y<=a-1;y++)
        //{
        test = forspa + forsta;
        console.log(test);
    }
    //}
}
print(2);
