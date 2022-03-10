import React, { useEffect, useState } from "react";
import CarService from "../data/CarService";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


function EditInventory() {

    const [cars, setCars] = useState([])
    const [id, setId] = useState()
    let navigate = useNavigate();
    const [search, setSearch] = useState('');
    let params = useParams();


    useEffect(() => {
        CarService.showInventory()

            .then(response => {
                console.log(response)
                setCars(response.data)

            })
            .catch(error => {
                console.log(error);
            })
    }, ([]))

    // const getCarId = () => {
    //     CarService.getCarById(id)
    //     navigate(`/car/searchbyid/${id}`);
    // }

    const updateCar = (id) => {
        CarService.updateCar(id)
        navigate(`/car/update/${id}`);
    }

    function removeCar(id) {
        CarService.removeCar(id).then(res => {
            setCars(cars.filter(car => car.id !== id)
            )
        })
    }
    return (
        <div>

            <div>
                <table id="cars">
                    <thead><input id="filter" type='text' placeholder="filter by make..." onChange={e => { setSearch(e.target.value) }} />
                        <tr>
                            <th> Id</th>
                            <th>Year</th>
                            <th> Make</th>
                            <th>Model</th>
                            <th>Type</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.filter((term) => {
                            if (search === "") {
                                return term
                            } else if (term.make.toLowerCase().includes(search.toLowerCase())) {
                                return term
                            }

                        }).map((car, index) => {
                            return (
                                <tr key={car.id}>
                                    <td>{car.id}</td>
                                    <td>{car.year}</td>
                                    <td> {car.make}</td>
                                    <td> {car.model}</td>
                                    <td> {car.type}</td>
                                    <td>
                                        <button onClick={() => updateCar(car.id)} className="edit-button">Update</button>
                                        <button onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) removeCar(car.id) }} className="delete-button">Delete</button>

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
} export default EditInventory;