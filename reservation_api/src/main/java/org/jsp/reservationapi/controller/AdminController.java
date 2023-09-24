package org.jsp.reservationapi.controller;

import org.jsp.reservationapi.dto.Admin;
import org.jsp.reservationapi.dto.ResponseStructure;
import org.jsp.reservationapi.repository.AdminRepository;
import org.jsp.reservationapi.service.AdminService;
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
public class AdminController {
	@Autowired
	public AdminService service;
	
	@PostMapping("/admin")
	public ResponseEntity<ResponseStructure<Admin>>SaveAdmin( @RequestBody Admin admin){
		
       return service.SaveAdmin(admin);
		
		
	}
	@PutMapping("/admin")
	public ResponseEntity<ResponseStructure<Admin>>UpdateAdmin( @RequestBody Admin admin){
		
	       return service.UpdateAdmin(admin);
			
			
		}
	@GetMapping(value="/admin/{id}")
	public ResponseEntity<ResponseStructure<Admin>>FindById(@PathVariable int id){
		return service.FindById(id);
	}
	@PostMapping(value="/admin/verify-by-phone")
	public ResponseEntity<ResponseStructure<Admin>>VerifyByphone(@RequestParam String email,@RequestParam String password){
		return service.VerifyByPhone(email, password);
	}
	
	
	
}
