using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace TeacherRecords
{
    internal class Updating
    {
        public static void UpdatingData()
        {
            string filepath = @"C:\Users\shubham.pawar\Documents\GitHub\hands-on-dotnet-batch\TeacherData.txt";
            List<string> lines = new List<string>();
            lines = File.ReadAllLines(filepath).ToList();

            Console.WriteLine("Enter the ID of the Employee to be updated");
            string updateid = System.Console.ReadLine();
            bool flag = true;
            foreach (string s in lines)
            {
                if (s.Trim().StartsWith(updateid))
                {
                    flag = false;
                    lines.Remove(s);
                    String record = Inputting.InputtingData();
                    lines.Add(record);
                    File.WriteAllLines(filepath, lines);
                    break;
                }
            }
            if (flag==true)
            {
                Console.WriteLine("ID not found");
            }
        }
    }
}
