import _store from "../store.js";

function drawInventory(){
  document.querySelector("#inventory").textContent = _store.State.cars.length.toString()
}
export default class InventoryController{
constructor(){
  _store.subscribe("cars", drawInventory)
  drawInventory()
}
}