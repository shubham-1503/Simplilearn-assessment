using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace TeacherRecords
{
    internal class Adding
    {
        public static void AddingData()
        {
            string filepath = @"C:\Users\shubham.pawar\Documents\GitHub\hands-on-dotnet-batch\TeacherData.txt";
            List<string> lines = new List<string>();
            lines = File.ReadAllLines(filepath).ToList();

            String record = Inputting.InputtingData();

            lines.Add(record);
            File.WriteAllLines(filepath, lines);

            Console.WriteLine("Do you want to add another line of data ?; type '1' for yes and '2' for no");
            int j = Convert.ToInt32(System.Console.ReadLine());
            if (j == 1)
            {
                Adding.AddingData();
            }
        }
    }
}
