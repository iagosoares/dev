using System;
using System.IO;

class Hello
{
    static void Main()
    {
        int i= 0, j= 1, s= 0;
        int cont = 2;
        int quantidade = 0;
        

        Console.WriteLine("Digite a quantidade de valores Fibonacci desejaveis");
        quantidade = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine($"{i}");
        Console.WriteLine($"{j}");

        while(cont < quantidade)
        {

            s = i + j;
            Console.WriteLine($"{s}");
            i = j;
            j = s;
            cont++;
        }
        
    }
}
