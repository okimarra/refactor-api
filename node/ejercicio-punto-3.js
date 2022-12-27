// Dado un arreglo de objetos, los cuales son de la forma { date: Date, items: Array<Object> } retornar un objeto donde la key es el mes/año 
// (ejemplo: 02/2020) y el valor es un arreglo con los elementos cuya fecha sea la de ese mes/año ordenados de forma ascendente. 
const objectsArray = [
    { date: new Date(1995, 11, 12), items: [{ value: 'dato 1' }] },
    { date: new Date(1995, 11, 13), items: [{ value: 'dato 2.1' }, { value: 'dato 2.2' }] },
    { date: new Date(1995, 12, 11), items: [{ value: 'dato 3.1' }, { value: 'dato 3.2' }] },
    { date: new Date(1995, 12, 2), items: [{ value: 'dato 4' }] },
    { date: new Date(1996, 1, 12), items: [{ value: 'dato 5.1' }, { value: 'dato 5.2' }] },
    { date: new Date(1997, 3, 12), items: [{ value: 'dato 6' }] },
    { date: new Date(1996, 1, 10), items: [{ value: 'dato 7.1' }, { value: 'dato 7.2' }, { value: 'dato 7.3' }] },
    { date: new Date(1995, 10, 1), items: [{ value: 'dato 8.1' }, { value: 'dato 8.2' }] },
    { date: new Date(1995, 11, 2), items: [{ value: 'dato 9.1' }, { value: 'dato 9.2' }] }
]


const mapArray = (array) => {
    array.sort((a, b) => a.date.getTime() - b.date.getTime())
    let newObject = {}
    for (const obj of array) {
        const key = (obj.date.getMonth() + 1) + '/' + obj.date.getYear();
        if (newObject.hasOwnProperty(key)) {
            newObject[key].push(obj);
        } else {
            newObject[key] = [obj]
        }
    }
    return newObject
}


console.info(mapArray(objectsArray))