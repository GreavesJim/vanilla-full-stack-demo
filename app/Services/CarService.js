import _store from "../store.js";
import Car from "../Models/Car.js";

// @ts-ignore
let _carApi = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 3000,
});

class CarService {
  bid(carId, carPrice) {
    _carApi
      .put("/cars/" + carId, { price: +carPrice + 100 })
      .then((res) => {
        this.loadCars();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  delortCar(carId) {
    // _carApi.delete("/cars/" + carId)
    _carApi
      .delete(`/cars/${carId}`)
      .then((res) => {
        console.log(res);
        this.loadCars();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  addCar(carData) {
    //carData is a POJO
    // new Car(data) is expecting data that represents a car and returns and instance of our model

    _carApi
      .post("/cars", carData)
      .then((res) => {
        this.loadCars();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  loadCars() {
    // make GET request to api, then save the data to our state
    _carApi
      .get("/cars")
      .then((res) => {
        console.log(res);
        let cars = res.data.data.map((c) => new Car(c));
        _store.commit("cars", cars);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  constructor() {
    console.log("hello from car service");
    this.loadCars();
  }
}

const CARSERVICE = new CarService();

export default CARSERVICE;
