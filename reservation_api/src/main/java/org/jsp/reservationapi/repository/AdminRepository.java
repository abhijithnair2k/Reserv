package org.jsp.reservationapi.repository;

import java.util.Optional;

import org.jsp.reservationapi.dto.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AdminRepository  extends JpaRepository<Admin, Integer>{
	
	@Query("select a from Admin a where a.email=?1 and a.password=?2")
	public Optional<Admin> verifyByPhone(String email,String password);
	


}
