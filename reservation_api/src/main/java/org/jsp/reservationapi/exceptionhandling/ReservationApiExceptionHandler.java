package org.jsp.reservationapi.exceptionhandling;

import org.jsp.reservationapi.dto.ResponseStructure;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

public class ReservationApiExceptionHandler extends ResponseEntityExceptionHandler {
	
	
	
	@ExceptionHandler(IdNotFoundException.class)
	public ResponseEntity<ResponseStructure<String>>HandlerIDNF(IdNotFoundException e){
		ResponseStructure<String > structure =new ResponseStructure<>();
		structure.setData(e.getMessage());
		structure.setMessage("Admin not found");
		structure.setStatuscode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.NOT_FOUND);
		
	}
	@ExceptionHandler(InvalidCreadentialException.class)
	public ResponseEntity<ResponseStructure<String>>HandlerICNF(InvalidCreadentialException e){
		ResponseStructure<String > structure =new ResponseStructure<>();
		structure.setData(e.getMessage());
		structure.setMessage("Admin not found");
		structure.setStatuscode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.NOT_FOUND);
		
	}


}
