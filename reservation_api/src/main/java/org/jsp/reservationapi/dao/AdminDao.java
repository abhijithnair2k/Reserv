package org.jsp.reservationapi.dao;

import java.util.Optional;

import org.jsp.reservationapi.dto.Admin;
import org.jsp.reservationapi.dto.ResponseStructure;
import org.jsp.reservationapi.repository.AdminRepository;
import org.jsp.reservationapi.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Repository
public class AdminDao {
	@Autowired
	private AdminRepository repository;
	
	 public Admin SaveAdmin(Admin admin){
		 return repository.save(admin);
		 
	 }
	 public Admin UpdateAdmin(Admin admin){
		 return repository.save(admin);
		 
	 }
	public Optional<Admin> FindById(int id){
		return repository.findById(id);
	}
	public Optional<Admin> VerifyByPhone(String email,String password){
		return repository.verifyByPhone(email, password);
	}
}
