package com.example.springcrud.Repository;

import com.example.springcrud.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    public Optional<User> findById(Integer id);
    @Query(value = "select * from user where is_deleted = false", nativeQuery = true)
    public Optional<List<User>> findAllUserByIsDeleted(boolean isDeleted);
}
