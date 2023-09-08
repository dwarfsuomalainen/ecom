using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController
    {
        public ActionResult Unauthorized { get; private set; }
        public object ModelState { get; private set; }

        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
            return NotFound();
        }

        private ActionResult NotFound()
        {
            throw new NotImplementedException();
        }

        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest("Bad request");
        }

        private ActionResult BadRequest(string v)
        {
            return BadRequest("Bad request");
        }

        [HttpGet("unauthorized")]
        public ActionResult GetUnauthorized()
        {
            return Unauthorized;
        }
        [HttpGet("validation-error")]
        // public ActionResult GetValidationError()
        // {
        //     ModelState.AddModelError("Problem1", "This is the first error");
        //     ModelState.AddModelError("Problem2", "This is the second error");
        //     return ValidationProblem();
        // }
        [HttpGet("server-error")]
        public ActionResult GetServerError()
        {
            throw new Exception ("Server error");
        }
    }
}