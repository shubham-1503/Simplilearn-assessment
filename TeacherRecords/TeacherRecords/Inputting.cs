using System;

namespace TeacherRecords
{
    internal class Inputting
    {
        public static string InputtingData()
        {
            Console.WriteLine("Enter the ID of the Teacher");
            string id = System.Console.ReadLine();

            Console.WriteLine("Enter the Name of the Teacher");
            string name = System.Console.ReadLine();

            Console.WriteLine("Enter the Section of the Teacher");
            string section = System.Console.ReadLine();

            String data = id+" ; "+name+" ; "+section;
            return data;

        }
    }    
}
