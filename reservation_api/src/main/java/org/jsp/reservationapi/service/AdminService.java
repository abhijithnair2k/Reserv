package org.jsp.reservationapi.service;

import java.util.Optional;

import org.jsp.reservationapi.dao.AdminDao;
import org.jsp.reservationapi.dto.Admin;
import org.jsp.reservationapi.dto.ResponseStructure;
import org.jsp.reservationapi.exceptionhandling.IdNotFoundException;
import org.jsp.reservationapi.exceptionhandling.InvalidCreadentialException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
@Service
public class AdminService {
	@Autowired
	public AdminDao dao;
	
	public ResponseEntity<ResponseStructure<Admin>>SaveAdmin(Admin admin){
		ResponseStructure<Admin> structure=new ResponseStructure<>();
		structure.setData(dao.SaveAdmin(admin));
		structure.setMessage("admin is saved");
		structure.setStatuscode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<Admin>>(structure,HttpStatus.CREATED);
	}
	
	public ResponseEntity<ResponseStructure<Admin>>UpdateAdmin(Admin admin){
		ResponseStructure<Admin> structure=new ResponseStructure<>();
		structure.setData(dao.UpdateAdmin(admin));
		structure.setMessage("admin is updated");
		structure.setStatuscode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<Admin>>(structure,HttpStatus.ACCEPTED);
	}
	public ResponseEntity<ResponseStructure<Admin>>FindById(int id){
		ResponseStructure<Admin> structure =new ResponseStructure<>();
		Optional<Admin > recAdmin=dao.FindById(id);
		if(recAdmin.isPresent()) {
			structure.setData(recAdmin.get());
			structure.setMessage("Admin Found By id");
			structure.setStatuscode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<Admin>>(structure,HttpStatus.OK);
		}
		throw new IdNotFoundException();
}
	public ResponseEntity<ResponseStructure<Admin>>VerifyByPhone(String email, String password){
		ResponseStructure<Admin> structure =new ResponseStructure<>();
		Optional<Admin > recAdmin=dao.VerifyByPhone(email, password);
		if(recAdmin.isPresent()) {
			structure.setData(recAdmin.get());
			structure.setMessage("Admin Found By id");
			structure.setStatuscode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<Admin>>(structure,HttpStatus.OK);
		}
		throw new InvalidCreadentialException();
}
}
	
