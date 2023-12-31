package org.jsp.reservationapi.controller;

import org.jsp.reservationapi.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

import org.jsp.reservationapi.dto.Bus;
import org.jsp.reservationapi.dto.ResponseStructure;
import org.jsp.reservationapi.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
@RestController
@CrossOrigin
public class BusController {

	@Autowired
	private BusService service;

	@PostMapping("/bus/{admin_id}")
	public ResponseEntity<ResponseStructure<Bus>> saveBus(@RequestBody Bus bus,@PathVariable int admin_id){
		return service.saveBus(bus, admin_id);
	}
	
	@GetMapping("/bus/filter")
	public ResponseEntity<ResponseStructure<List<Bus>>> filter(@RequestParam String from,@RequestParam String to, @RequestParam LocalDate dop){
		return service.filter(from, to, dop);
	}
	public ResponseEntity<ResponseStructure<Bus>> updateBus(@RequestBody Bus bus,@PathVariable int admin_id){
		return service.updateBus(bus,admin_id);
	}
}
