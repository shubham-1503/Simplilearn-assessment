using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace TeacherRecords
{
    internal class Reading
    {
        public static void ReadingData()
        {
            string filepath = @"C:\Users\shubham.pawar\Documents\GitHub\hands-on-dotnet-batch\TeacherData.txt";
            List<string> lines = new List<string>();
            lines = File.ReadAllLines(filepath).ToList();

            foreach (string line in lines)
            {
                Console.WriteLine(line);
            }
        }
    }
 
}
