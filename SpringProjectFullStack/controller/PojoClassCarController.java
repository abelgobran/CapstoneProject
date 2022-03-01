package SpringProjectFullStack.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
	@GetMapping("/car")
	public List<Car>getCars(){
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
		Car car = CarRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Car not Found"));
		return ResponseEntity.ok(car);
	}
	
	//get car by name
	@GetMapping("/car/{mmake}")
	public List<Car> getCarbyMake(@PathVariable String make){
		List <Car> cars=carRepo.findByMake(make);
		if(cars.isEmpty()) {
			System.out.println(new ResourseNotFoundException("Cars with the make"+make+"not found"));
			Car updatedStudent = carRepository.save(car);
		}
	}
	
	//update car
	//delete employee by id
	//
	
}
