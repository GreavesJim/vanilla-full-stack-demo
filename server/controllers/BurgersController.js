import express from "express";
import BaseController from "../utils/BaseController";
import { burgersService } from "../services/BurgersService";

export class BurgersController extends BaseController {
  constructor() {
    super("api/burgers");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .delete("/:id", this.delete)
      .put("/:id", this.edit);
  }
  async getAll(_, res, next) {
    try {
      let data = await burgersService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await burgersService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let rawBurgerData = req.body;
      let burger = await burgersService.create(rawBurgerData);
      res.send({ data: burger, message: "created a burger!" });
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await burgersService.delete(req.params.id);
      res.send("burger gonzo");
    } catch (error) {}
  }
  async edit(req, res, next) {
    try {
      let changedBurger = req.body;
      let newBurger = await burgersService.edit(req.params.id, changedBurger);
      res.send({ data: newBurger, message: "changed da burger" });
    } catch (error) {
      next(error);
    }
  }
}
