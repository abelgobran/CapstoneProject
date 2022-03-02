package SpringProjectFullStack.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import SpringProjectFullStack.model.Car;

@Repository
public interface CarRepository extends JpaRepository<Car, Integer>{
	
	List<Car> findByMake(String make);

}
