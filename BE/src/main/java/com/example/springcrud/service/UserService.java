package com.example.springcrud.service;


import com.example.springcrud.Repository.UserRepository;
import com.example.springcrud.entity.User;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@NoArgsConstructor
public class UserService {

    @Autowired
    private UserRepository userRepository;
    public List<User> listAllUserActive() {
        return userRepository.findAllUserByIsDeleted(true).orElse(null);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User findUserById(Integer id) {
        return userRepository.findById(id).orElse(null);
    }
    public User updateUser(Integer id, User userUpdate) {
        User user = findUserById(id);
        if (user == null) {
            return null;
        }

        String newEmail = userUpdate.getEmail();
        if (!Objects.equals(user.getEmail(), newEmail)) {
            user.setEmail(newEmail);
        }
       user.setEmail(userUpdate.getEmail());
        user.setPassword(userUpdate.getPassword());
        user.setLastName(userUpdate.getLastName());
        user.setFirstName(userUpdate.getFirstName());
        userRepository.save(user);
        return user;
    }

    public User softDeleteUser(Integer id) {
        User user = findUserById(id);
        if (user == null) {
            return null;
        }
        user.setDeleted(true);
        userRepository.save(user);
        return user;
    }
}
