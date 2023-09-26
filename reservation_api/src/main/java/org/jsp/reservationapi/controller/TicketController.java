package org.jsp.reservationapi.controller;

import org.jsp.reservationapi.dao.TicketDao;
import org.jsp.reservationapi.dto.ResponseStructure;
import org.jsp.reservationapi.dto.Ticket;
import org.jsp.reservationapi.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

public class TicketController {

	@Autowired
	private TicketService service;
	
	
	public ResponseEntity<ResponseStructure<Ticket>> saveTicket(@RequestBody Ticket ticket,@PathVariable int user_id,@PathVariable  int bus_id){
		return service.saveTicket(ticket,user_id,bus_id);
	}
}
