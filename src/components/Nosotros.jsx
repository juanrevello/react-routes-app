import React from 'react'
import { Link } from 'react-router-dom'

const Nosotros = () => {

    /*const datos = [
        {id: 1, nombre: 'Reactjs'},
        {id: 2, nombre: 'Angularjs'},
        {id: 3, nombre: 'Vuejs'}
    ]*/

    const [equipo, setEquipo] = React.useState([])

    React.useEffect(() => {
        //console.log('useEffect')
        //setEquipo(datos)
        obtenerDatos()
    }, [])

    //llamada a API
    const obtenerDatos = async () => {
        //const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
        const users = await data.json()
        //console.log(users)
        //setEquipo(users)
        setEquipo(users.civilizations)
    }

    return (
        <div>
            <h1>nosotros</h1>
            <ul>
                {
                    equipo.map(item => (
                        <li key={item.id}>
                            <Link to={`/nosotros/${item.id}`}>
                                {item.name} - {item.expansion}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Nosotros
