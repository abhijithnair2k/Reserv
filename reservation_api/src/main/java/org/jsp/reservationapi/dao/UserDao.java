package org.jsp.reservationapi.dao;

import java.util.Optional;

import org.jsp.reservationapi.dto.Admin;
import org.jsp.reservationapi.dto.User;
import org.jsp.reservationapi.repository.AdminRepository;
import org.jsp.reservationapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {
	@Autowired
	private UserRepository repository;
	
	 public User SaveUser(User user){
		 return repository.save(user);
		 
	 }
	 public User UpdateUser( User user){
		 return repository.save(user);
		 
	 }
	public Optional<User> FindById(int id){
		return repository.findById(id);
	}
	public Optional<User> VerifyByPhone(String email,String password){
		return repository.verifyByPhone(email, password);
	}

}
