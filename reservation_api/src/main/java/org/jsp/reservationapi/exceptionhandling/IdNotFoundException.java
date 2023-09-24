package org.jsp.reservationapi.exceptionhandling;

public class IdNotFoundException  extends RuntimeException{
	 
	@Override
	public String getMessage() {
	
		return "Id not Found ";
	}

}
