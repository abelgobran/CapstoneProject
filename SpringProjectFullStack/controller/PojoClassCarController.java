package SpringProjectFullStack.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import SpringProjectFullStack.Exception.ResourceNotFoundException;
import SpringProjectFullStack.model.Car;
import SpringProjectFullStack.repository.CarRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class PojoClassCarController {
	
	@Autowired
	private CarRepository carRepository;
	
	//create get all cars api
	@GetMapping("/carinventory")
	public List<Car>getCarInventory(){
		return carRepository.findAll();
	}
	
	//create car
	@PostMapping("/addcar")
	public Car newCar(@RequestBody Car car) {
		return carRepository.save(car);
	}
	
	
	//get cars by Id
	@GetMapping("/car/{id}")
	public ResponseEntity<Car> getCarById(@PathVariable int id){
		Car car = carRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Car not Found"));
		return ResponseEntity.ok(car);
	}
	
	//get car by name
	@GetMapping("/car/{make}")
	public List<Car> getCarByMake(@PathVariable String make){
		List <Car> cars=carRepository.findByMake(make);
		return cars;
	}
	
	//update car
	//delete employee by id
	//
	
}
