import React,{useState} from "react";
import CarService from "../data/CarService";
import { useNavigate } from "react-router-dom";


function RemoveCar(){

    const [year, setYear] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate();


    const RemoveExistingCar = (e) => {
        e.preventDefault();
        let car = {
            year: year,
            make: make,
            model: model,
            type: type
        }
        console.log(car)
        CarService.removeCar(car)
            .then(response => { })
            alert("successful")
            navigate('/')


    }

    return (
        <div>
            <input type='number' name="year" placeholder="year" value={year} onChange={(e) => setYear(e.target.value)}  ></input>
            <input type='text' name="make" placeholder="make" value={make} onChange={(e) => setMake(e.target.value)}  ></input>
            <input type='text' name="model" placeholder="model" value={model} onChange={(e) => setModel(e.target.value)}  ></input>
            <input type='text' name="type" placeholder="type" value={type} onChange={(e) => setType(e.target.value)}  ></input>
            <button onClick={RemoveExistingCar}>Remove Vehicle</button>
        </div>
    )
}export default RemoveCar;
