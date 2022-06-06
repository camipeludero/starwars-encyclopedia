export const getPeople = async (page = 1) => {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`)
    const data = await response.json()
    return data
}

export const getPeopleDetails = async (id) => {
    const response = await fetch(`https://swapi.dev/api/people/${id}`)
    const data = await response.json()
    return data
}

export const searchPeople = async (value) => {
    const response = await fetch(`https://swapi.dev/api/people/?search=${value}`)
    const data = await response.json()
    return data
}