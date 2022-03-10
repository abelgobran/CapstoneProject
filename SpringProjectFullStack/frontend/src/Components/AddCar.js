import React, { useState } from "react";
import CarService from '../data/CarService';
import { useNavigate } from "react-router-dom";

function AddCar() {
    const [id, setId] = useState();
    const [year, setYear] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate();
    
    const addnewCar = (e) => {
        e.preventDefault();
        let car = {
            id: id,
            year: year,
            make: make,
            model: model,
            type: type
        }
        console.log(car)
        CarService.addCar(car)
            .then(response => { })
        alert('Entry Successful')
        navigate('/')

    }

    return (
        <div>
            <div>
                <div>
                    <table>
                        <td><input type='number' min={1988} max={2022} name="year" placeholder="year" value={year} onChange={(e) => setYear(e.target.value)}  ></input></td>
                        <td><input type='text' name="make" placeholder="make" value={make} onChange={(e) => setMake(e.target.value)}  ></input></td>
                        <td><input type='text' name="model" placeholder="model" value={model} onChange={(e) => setModel(e.target.value)}  ></input></td>
                        <td><input type='text' name="type" placeholder="type" value={type} onChange={(e) => setType(e.target.value)}  ></input></td>
                        <td><button onClick={addnewCar}>Add Vehicle</button></td>
                    </table>
                </div>
            </div>

        </div>
    )
} export default AddCar;

