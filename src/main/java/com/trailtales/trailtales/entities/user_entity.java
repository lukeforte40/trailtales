package com.trailtales.trailtales.entities;

import java.util.Map;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import java.sql.Date;
import java.util.HashMap;

@Entity // This tells Hibernate to make a table out of this class
public class user_entity {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
  
    @Column(unique = true, nullable = false)
    private String username;
  
    private String password;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(unique = true, nullable = false)
    private String phone;

    private String profilePic;

    private Date joinDate;

    public Map<String, Object> getUser() {
        Map<String, Object> map = new HashMap<>();
        map.put("id", this.id);
        map.put("username", this.username);
        map.put("email",this.email);
        map.put("phone", this.phone);
        map.put("profilePic", this.profilePic);
        return map;
    }
  
    public Integer getId() {
      return id;
    }
  
    public void setId(Integer id) {
      this.id = id;
    }
  
    public String getUserName() {
      return username;
    }
  
    public void setName(String username) {
      this.username = username;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }
  
    public String getEmail() {
      return email;
    }
  
    public void setEmail(String email) {
      this.email = email;
    }
  
    public String getPhone(){
        return phone;
    }

    public void setPhone(String phone){
        this.phone = phone;
    }

    public String getProfilePic(){
        return profilePic;
    }

    public void setProfilePic(String profilePic){
        this.profilePic = profilePic;
    }

    public Date getJoinDate(){
        return joinDate;
    }

    public void setJoinDate(Date joinDate){
        this.joinDate = joinDate;
    }
}