package org.jsp.reservationapi.controller;


import org.jsp.reservationapi.dto.Admin;
import org.jsp.reservationapi.dto.ResponseStructure;
import org.jsp.reservationapi.dto.User;
import org.jsp.reservationapi.service.AdminService;
import org.jsp.reservationapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
@CrossOrigin
public class UserController {
	
	@Autowired
	public UserService service ;
	
	@PostMapping("/user")
	public ResponseEntity<ResponseStructure<User>>SaveUser( @RequestBody User user){
		
       return service.SaveUser(user);
		

	}
	@PutMapping("/user")
	public ResponseEntity<ResponseStructure<User>>UpdateUser( @RequestBody User user){
		
	       return service.UpdateUser(user);
			
			
		}
	@GetMapping(value="/user/{id}")
	public ResponseEntity<ResponseStructure<User>>FindById(@PathVariable int id){
		return service.FindById(id);
	}
	@PostMapping(value="/user/verify-by-phone")
	public ResponseEntity<ResponseStructure<User>>VerifyByphone(@RequestParam String email,@RequestParam String password){
		return service.VerifyByPhone(email, password);
	}
	
	


}
