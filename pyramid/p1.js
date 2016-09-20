function print(a) {
    var space = "  ";
    var star = "*";
    var test = "";
    for (var i = 1; i <= a; i++) {
        //for(var j: number = 1;j<=a*2-1;j++)
        //{
        for (var k = 1; k <= a - i; k++) {
            test = test + space;
        }
        for (var x = 1; x <= i * 2 - 1; x++) {
            test = test + star;
        }
        console.log(test);
    }
    //}
}
print(1);
