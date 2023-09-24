package org.jsp.reservationapi.exceptionhandling;

public class InvalidCreadentialException  extends RuntimeException {
	@Override
	public String getMessage() {
	
		return "Invalid phone numberor email id or password";
	}

}
