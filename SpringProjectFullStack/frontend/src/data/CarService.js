import axios from 'axios';

const Car_Url = "http://Localhost:8080/api"
class CarDatabase {

    showInventory() {
        return axios.get(Car_Url + "/car/inventory")
    }

    addCar(car) {
        return axios.post(Car_Url + "/car/add", car)
    }

    getCarById(id) {
        return axios.get(Car_Url + "/car/searchbyid/" + id)
    }

    getCarByMake(make) {
        return axios.get(Car_Url + "/car/searchbymake/" + make)
    }

    updateCar(car, id) {
        return axios.put(Car_Url + "/car/update/" + id, car)
    }

    removeCar(id) {
        return axios.delete(Car_Url + "/car/delete/" + id)
    }

}

export default new CarDatabase();
