import BaseController from "../utils/BaseController";
import { carService } from "../services/CarsService";

export class CarsController extends BaseController {
  constructor() {
    super("api/cars");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async create(req, res, next) {
    try {
      let rawCarData = req.body;
      let car = await carService.create(rawCarData);
      res.send({ data: car, message: "Created the car!" });
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let rawEditedCarData = req.body;
      let car = await carService.edit(req.params.id, rawEditedCarData);
      res.send({ data: car, message: "edited the car!" });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await carService.delete(req.params.id);
      res.send("Dlorted");
    } catch (err) {
      next(err);
    }
  }

  async getAll(req, res, next) {
    try {
      let cars = await carService.getAll();
      res.send({ data: cars, message: "Gots tha cars" });
    } catch (error) {
      next(error);
    }
  }

  async getOne(req, res, next) {
    try {
      let car = await carService.getCarById(req.params.id);
      res.send({ data: car, message: "Gots that car" });
    } catch (error) {
      next(error);
    }
  }
}
