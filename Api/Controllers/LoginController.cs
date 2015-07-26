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
    [RoutePrefix("login")]
    public class LoginController : ApiController
    {
        LoginDbStore db = new LoginDbStore();

        [Route("")]
        [HttpPost]
        public Login Authenticate(Login login)
        {
            if (login != null)
            {
                return db.GetAuthenticatedUser(login);
            }
            else return null;
        }
    }
}
