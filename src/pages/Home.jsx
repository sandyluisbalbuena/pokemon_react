import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {

	const [names , setNames] = useState([]);

	useEffect(()=> {
		axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
		.then(response=>{
				setNames(response.data.results)
				console.log(response.data)
			}
		)		
		.catch((error)=>{
			console.log(error);
		})
	}, [])

	return (
		<>
			{names && names.map((pokemonname)=>(
				<li>{pokemonname.name}</li>
			))}
		</>
	)
}

export default Home