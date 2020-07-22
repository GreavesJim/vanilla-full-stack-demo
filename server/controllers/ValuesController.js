import express from "express";
import BaseController from "../utils/BaseController";
import { valuesService } from "../services/ValueService";
import { burgersService } from "../services/BurgersService";

export class ValuesController extends BaseController {
  constructor() {
    super("api/values");
    this.router.get("", this.getAll).post("", this.create);
  }
  async getAll(_, res, next) {
    try {
      let data = await burgersService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}
