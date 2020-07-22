import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class BurgersService {
  async edit(id, changedBurger) {
    let newBurger = await dbContext.Burger.findByIdAndUpdate(
      id,
      changedBurger,
      { new: true }
    );
    if (!newBurger) {
      throw new BadRequest("Invalid Id");
    }
    return newBurger;
  }
  async delete(id) {
    return await dbContext.Burger.findByIdAndDelete(id);
  }
  async getById(id) {
    let burger = await dbContext.Burger.findById(id);
    if (!burger) {
      throw new BadRequest("Invalid ID");
    }
    return burger;
  }

  async getAll() {
    let burgers = await dbContext.Burger.find({});
    return burgers;
  }
  async find(query = {}) {
    let values = await dbContext.Values.find(query);
    return values;
  }
  async findById(id) {
    let value = await dbContext.Values.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
  async create(rawBurgerData) {
    let burger = await dbContext.Burger.create(rawBurgerData);
    return burger;
  }
}

export const burgersService = new BurgersService();
