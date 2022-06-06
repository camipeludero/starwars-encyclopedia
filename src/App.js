/*
LA ENCICLOPEDIA STAR WARS: Crea una app que sirva para listar los personajes de Star Wars y que te permita buscarlos por nombre.

Requisitos:

[*] Usa el API https://swapi.dev/
[*] El diseño es de libre elección.
[*] Debe mostrar un listado y un detalle de cada personaje.
[*] El listado tendrá que estar paginado.
[*] El listado poseerá un filtro de búsqueda.
[*] Al seleccionar un personaje del listado, el detalle mostrará los datos que consideres oportunos.

[] OPCIONAL: Detalle de películas, vehículos, naves, especies...
[] OPCIONAL: Foto de cada personaje.

*/

import { useState, useEffect } from 'react';
import './App.css';
import Details from './components/Details';
import Pagination from './components/Pagination';
import PeopleList from './components/PeopleList';
import Search from './components/Search';
import { getPeople, getPeopleDetails } from './helpers/functions';


function App() {
  const [people, setPeople] = useState([]);
  const [peopleDetails, setPeopleDetails] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPeople(page).then(data => setPeople(data))
  }, [page])

  const handleChangePage = (value) => {
    //simple resolution 1
    /* if (page + value < 1 || page + value > 9) { return }
        setPage(page + value) */

    //resolution 2
    if (!people.previous && page + value <= 0) {
      return;
    }
    if (!people.next && page + value >= 9) {
      return;
    }
    setPage(page + value);
  };

  const handleShowDetails = (url) => {
    let id = Number(url.split("/").slice(-2)[0])

    getPeopleDetails(id).then(data => setPeopleDetails(data))
  }

  return (
    <>
      <h1>Star Wars Enclycopedia</h1>
      <Search setPeople={setPeople} setPeopleDetails={setPeopleDetails} />
      <PeopleList people={people.results} handleShowDetails={handleShowDetails} />
      <Pagination page={page} handleChangePage={handleChangePage} />
      <Details peopleDetails={peopleDetails} />
    </>
  )
}

export default App;
