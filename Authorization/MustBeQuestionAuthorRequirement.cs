using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using QandA.Data;

namespace QandA.Authorization
{
    public class MustBeQuestionAuthorRequirement : IAuthorizationRequirement
    {
       

        public MustBeQuestionAuthorRequirement()
        {

        }   
    }
}
