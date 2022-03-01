package SpringProjectFullStack.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity //tell spring that is a pojo and needs to be saved in database...entity bean
@Table(name="cars")// Telling spring boot that table with name people should be mapped with with person pojo, saved
//as record in people table
public class Car {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name="year")
	private int year;
	@Column(name="make")
	private String make;
	@Column(name = "model")
	private String model;
	@Column(name = "type")
	private String type;
	
	public Car() {
		super();
	}
	public Car(int year, String make, String model, String type) {
		super();
		
		this.year = year;
		this.make = make;
		this.model = model;
		this.type = type;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public int getYear() {
		return year;
	}
	public void setYear(int year) {
		this.year = year;
	}
	public String getMake() {
		return make;
	}
	public void setMake(String make) {
		this.make = make;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
		

}
