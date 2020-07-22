import _carService from '../Services/CarService.js'
import _store from '../store.js'

// element to inject into
// cars data from the state
// turn car data into an element and store in template
function _drawCars() {
  let template = ''
  let cars = _store.State.cars
  cars.forEach(car => template += car.Template)
  //NOTE Same thing
  // cars.forEach(function (car, i) { template += car.getTemplate()})

  //NOTE same as foreach
  // for (let i = 0; i < cars.length; i++) {
  //   const car = cars[i];
  //   template += car.getTemplate()
  // }

  document.querySelector("#cars").innerHTML = template
}

export default class CarsController {
  constructor() {
    console.log("Hello from car controller")
    _store.subscribe("cars",_drawCars)
    _drawCars()
  }

  addCar(event) {
    event.preventDefault()
    let formData = event.target
    let newCar = {
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      price: formData.price.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value
    }

    _carService.addCar(newCar)
    formData.reset()

    console.log(event.target.make.value)
  }

  delortCar(carId) {
    _carService.delortCar(carId)
  }

  bid(carId, carPrice){
    _carService.bid(carId, carPrice)
  }

}