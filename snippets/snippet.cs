using System;

namespace Example
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Hello, Valaxy!");
            
            // 这是一个示例方法
            var result = CalculateSum(10, 20);
            Console.WriteLine($"Sum: {result}");
        }
        
        public static int CalculateSum(int a, int b)
        {
            return a + b;
        }
    }
} 