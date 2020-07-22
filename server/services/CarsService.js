import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CarsService {
  async delete(carId) {
    return await dbContext.Cars.findByIdAndDelete(carId);
  }

  async edit(carId, rawEditedCarData) {
    return await dbContext.Cars.findByIdAndUpdate(carId, rawEditedCarData, {
      new: true,
    });
  }

  async getAll() {
    return await dbContext.Cars.find();
  }

  //NOTE always null check
  async getCarById(id) {
    let car = await dbContext.Cars.findById(id);
    if (!car) {
      throw new BadRequest("Invalid id");
    }
    return car;
  }

  // async getCarById(id) {
  // return await dbContext.Cars.find({ _id: id })
  // }

  async getAllChevys() {
    return await dbContext.Cars.find({ make: "Chevy" });
  }

  async create(rawCarData) {
    // dbContext.Cars.create(rawCarData).then(car => { })
    let car = await dbContext.Cars.create(rawCarData);
    return car;
  }
}

export const carService = new CarsService();
