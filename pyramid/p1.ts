function print (a: number)
{
    var space: string = " ";
    var star: string = "*";
    var test: string = "";

    for(var i: number = 1;i<=a;i++)
    {
        //for(var j: number = 1;j<=a*2-1;j++)
        //{
           for(var k: number = 1;k<=a-i;k++)
           {
               test = test + space;
           }
           for(var x: number = 1;x<=i*2-1;x++)
           {
               test = test + star;
           }
           
           console.log(test);
    }
    //}
}
print(2);