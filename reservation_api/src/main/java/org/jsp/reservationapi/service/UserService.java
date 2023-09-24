package org.jsp.reservationapi.service;

import java.util.Optional;

import org.jsp.reservationapi.dao.AdminDao;
import org.jsp.reservationapi.dao.UserDao;
import org.jsp.reservationapi.dto.Admin;
import org.jsp.reservationapi.dto.ResponseStructure;
import org.jsp.reservationapi.dto.User;
import org.jsp.reservationapi.exceptionhandling.IdNotFoundException;
import org.jsp.reservationapi.exceptionhandling.InvalidCreadentialException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
@Service
public class UserService {
	
	
	@Autowired
	public UserDao dao;
	
	public ResponseEntity<ResponseStructure<User>>SaveUser(User user){
		ResponseStructure<User> structure=new ResponseStructure<>();
		structure.setData(dao.SaveUser(user));
		structure.setMessage("User is saved");
		structure.setStatuscode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<User>>(structure,HttpStatus.CREATED);
	}
	
	public ResponseEntity<ResponseStructure<User>>UpdateUser(User user){
		ResponseStructure<User> structure=new ResponseStructure<>();
		structure.setData(dao.UpdateUser(user));
		structure.setMessage("user is updated");
		structure.setStatuscode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<User>>(structure,HttpStatus.ACCEPTED);
	}
	public ResponseEntity<ResponseStructure<User>>FindById(int id){
		ResponseStructure<User> structure =new ResponseStructure<>();
		Optional<User > recAdmin=dao.FindById(id);
		if(recAdmin.isPresent()) {
			structure.setData(recAdmin.get());
			structure.setMessage("User Found By id");
			structure.setStatuscode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<User>>(structure,HttpStatus.OK);
		}
		throw new IdNotFoundException();
}
	public ResponseEntity<ResponseStructure<User>>VerifyByPhone(String email, String password){
		ResponseStructure<User> structure =new ResponseStructure<>();
		Optional<User > recAdmin=dao.VerifyByPhone(email, password);
		if(recAdmin.isPresent()) {
			structure.setData(recAdmin.get());
			structure.setMessage("User Found By id");
			structure.setStatuscode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<User>>(structure,HttpStatus.OK);
		}
		throw new InvalidCreadentialException();
}


}
