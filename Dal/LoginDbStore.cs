
using Dto;
using System.Collections.Generic;
namespace Dal
{
    public class LoginDbStore
    {
        public Login login = null;
        public static List<Login> userList = new List<Login>();

        public LoginDbStore()
        {
            if (userList.Count <= 0)
            {
                userList.Add(new Login { Id = 1, Email = "muhammad@ma.com", FirstName = "Muhammad", LastName = "Ahmed", UserName = "Muhammad Ahmed",Password="1" });
                userList.Add(new Login { Id = 2, Email = "saeed@ma.com", FirstName = "Saeed", LastName = "Ahmed", UserName = "Saeed Ahmed" ,Password="2"});
                userList.Add(new Login { Id = 3, Email = "admin@yahoo.com", FirstName = "fname", LastName = "lname", UserName = "fname lname" ,Password="3"});
                userList.Add(new Login { Id = 4, Email = "sales@hotmail.com", FirstName = "fname1", LastName = "lname1", UserName = "fname1 lname1", Password = "4" });
            }
        }
        public Login GetAuthenticatedUser(Login login)
        {
            return userList.Find(f => f.Email == login.Email && f.Password == login.Password);
        }
    }
}
