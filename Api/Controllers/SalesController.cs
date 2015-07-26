using Dal;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Api.Controllers
{
    [RoutePrefix("sales")]
    public class SalesController : ApiController
    {
        SalesDbStore db = new SalesDbStore();

        [Route("all")]
        public List<Sales> GetAllSales()
        {
            return db.GetAllSales();
        }
    }
}
