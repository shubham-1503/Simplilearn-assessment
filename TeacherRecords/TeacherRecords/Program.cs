using System;

namespace TeacherRecords
{
    internal class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Type '1' to Read the data;type '2' to Add and Read data;type '3' to Update and Read data");
            int i = Convert.ToInt32(System.Console.ReadLine());
            if (i == 1)
            {
                Reading.ReadingData();
            }
            else if(i == 2)
            {
                Adding.AddingData();
                Reading.ReadingData();
            }
            else
            {
                Updating.UpdatingData();
                Reading.ReadingData();
            }

            Console.WriteLine("Press enter to exit");
            Console.ReadLine();
        }
    }
}
