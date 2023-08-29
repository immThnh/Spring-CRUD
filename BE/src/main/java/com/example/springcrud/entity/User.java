package com.example.springcrud.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = true, unique = true, length = 45)
    private String email;
    @Column(length = 15, nullable = false)
    private String password;
    @Column(length = 25, nullable = false)
    private String firstName;
    @Column(length =25, nullable = false)
    private String lastName;
    private boolean isDeleted = false;
}
