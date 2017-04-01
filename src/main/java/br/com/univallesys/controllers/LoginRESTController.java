package br.com.univallesys.controllers;

import br.com.univallesys.models.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

@RestController
@Transactional
public class LoginRESTController {


    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login() {
        return "authentication/login";
    }

    @RequestMapping(method = RequestMethod.POST, value = "/check-credentials")
    public ResponseEntity login(@RequestBody User intent) {

        User user =
                new User("admin@gmail.com",
                        "admin",
                        "d6f67bc92bbaf06ec44b828d0da4eda9");

        if (intent.equals(user))
            return new ResponseEntity(user, HttpStatus.OK);
        else
            return new ResponseEntity(user, HttpStatus.NO_CONTENT);
    }
}