function print (a: number)
{
    var space: string = " ";
    var star: string = "*";
    var forspa: string = "";
    var forsta: string = "";
    var test: string = "";

    for(var i: number = 1;i<=a;i++)
    {
        //for(var j: number = 1;j<=a*2-1;j++)
        //{
           for(var k: number = 1;k<=a-1;k++)
           {
               forspa= forspa + space;
           }
           for(var x: number = 0;x<i*2-1;x++)
           {
               forsta = forsta + star;
           }
           //for(var y: number = 1;y<=a-1;y++)
           //{
           test = forspa+forsta;
           console.log(test);
        //}
           //test = space + test;
           
    }
    //}
}
print(2);