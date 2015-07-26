using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class SalesDbStore
    {
        public static List<Sales> salesList = new List<Sales>();

        public List<Sales> GetAllSales()
        {
            if (salesList.Count < 1)
            {
                salesList.Add(new Sales { Id = 1, Site = "Head Office", Status = "Paid", Summary = "point of sales", Type = "POS", Value = 10 });
                salesList.Add(new Sales { Id = 2, Site = "Head Office", Status = "Unpaid", Summary = "point of sales", Type = "POS", Value = 210 });
                salesList.Add(new Sales { Id = 3, Site = "Head Office", Status = "Paid", Summary = "CS25 Booking -1234", Type = "Booking", Value = 520 });
                salesList.Add(new Sales { Id = 4, Site = "Head Office", Status = "Paid", Summary = "ePOS POS", Type = "POS", Value = 20 });
                salesList.Add(new Sales { Id = 5, Site = "Head Office", Status = "Paid", Summary = "CS23 Booking - 5678", Type = "Booking", Value = 999 });
            }
            return salesList;
        }
    }
}
