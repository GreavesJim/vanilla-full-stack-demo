import ValuesController from "./Controllers/ValuesController.js";
import CarsController from "./Controllers/CarsController.js";
import InventoryController from "./Controllers/InventoryController.js";

class App {
  valuesController = new ValuesController();
  carsController = new CarsController()
  inventoryController = new InventoryController()
}

window["app"] = new App();
