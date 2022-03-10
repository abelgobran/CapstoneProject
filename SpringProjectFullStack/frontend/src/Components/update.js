import React, { useEffect, useState } from "react";
import CarService from "../data/CarService";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Update() {
    const [carId, setCarId] = useState();
    const [year, setYear] = useState();
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [type, setType] = useState('');
    const {id}  = useParams();
    const navigate = useNavigate();
    
    const updatedCar = (e) => {
        e.preventDefault();
        let car = {
             id:Number(id),
             year,
             make,
             model,
             type
        }
        console.log(car)
        CarService.updateCar(car,id)
            .then(response => { })
        alert('Entry Successful')
        navigate('/')
    }
    useEffect(()=>{
        CarService.getCarById(id)
    
                .then((response) => {
                   setCarId(response.data.carId) 
                    console.log('updated', response.data);
                    // setId(response.data.id)
                    setYear(response.data.year)
                    setMake(response.data.make)
                    setModel(response.data.model)
                    setType(response.data.type)
                    //navigate ("/");
                })
                .catch(error => {
                    console.log('Oops', error);
                })
            },[])
    
    return (
        <div>
            <div>
            <label> ID: </label>
                <input placeholder={id} readOnly={true} name="id" value={id} />
                <input type='number' name="year" placeholder="year" value={year} onChange={(e) => setYear(e.target.value)}  ></input>
                <input type='text' name="make" placeholder="make" value={make} onChange={(e) => setMake(e.target.value)}  ></input>
                <input type='text' name="model" placeholder="model" value={model} onChange={(e) => setModel(e.target.value)}  ></input>
                <input type='text' name="type" placeholder="type" value={type} onChange={(e) => setType(e.target.value)}  ></input>
                <button onClick={updatedCar}>Update Vehicle</button>
            </div>
        </div>
    )
}export default Update

