package com.example.springcrud.controller;

import com.example.springcrud.entity.User;
import com.example.springcrud.service.UserService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@NoArgsConstructor
@RequestMapping("/api/v1/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController
{
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String addUser(@RequestBody User user) {
        userService.saveUser(user);
        return "Thêm User thành công!";
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<User>> getUserList(Model model) {
        List<User> listUser = userService.listAllUserActive();
        System.out.println("Client getUserList ");
        return ResponseEntity.ok(listUser);
    }
    @GetMapping("/edit/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Integer id) {
       User user = userService.findUserById(id);
        if (user == null) {

            return ResponseEntity.status(HttpServletResponse.SC_NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(user);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<String> changeUserInformation(@PathVariable Integer id, @RequestBody User user) {
        System.out.println(user);
         if(userService.updateUser(id, user) == null) {
             return ResponseEntity.status(HttpServletResponse.SC_NOT_FOUND).body("User not found!");
         }
        return ResponseEntity.ok("Update user information successfully!");
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Integer id) {

        if(userService.softDeleteUser(id) == null) {
            System.out.println("delete failer!");

            return ResponseEntity.status(HttpServletResponse.SC_NOT_FOUND).body("User not found!");
        }

        return ResponseEntity.ok("Delete user information successfully!");
    }

}
