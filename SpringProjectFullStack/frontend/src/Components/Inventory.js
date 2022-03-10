import React, { useEffect, useState } from "react";
import axios from 'axios';


function Inventory() {
    const [cars, setCars] = useState([])

    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('http://Localhost:8080/api/car/inventory')
            .then(response => {
                console.log(response)
                setCars(response.data)

            })
            .catch(error => {
                console.log(error);
            })
    }, ([]))

    return (
        <div>
            <div>

                <table id="cars">
                    <thead> <input type='text' placeholder="filter" onChange={e => { setSearch(e.target.value) }} />
                        <tr>
                            <th> Id</th>
                            <th>Year</th>
                            <th> Make</th>
                            <th>Model</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.filter((term) => {
                            if (search == "") {
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
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )

} export default Inventory