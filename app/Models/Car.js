export default class Car {
  constructor(data) {
    this._id = data._id;
    this.make = data.make || "Unknown";
    this.model = data.model || "Unknown";
    this.year = data.year || "Unknown";
    this.price = data.price || "Free";
    this.description = data.description || "Free";
    this.imgUrl = data.imgUrl || "Free";
  }

  get Template() {
    return `
            <div class="col-3 m-3 p-2 border rounded bg-dark">
                <h2>${this.make}</h2>
                <h2>${this.model}</h2>
                <h5>${this.year}</h5>
                <h5>${this.price}</h5>
                <h5>${this.description}</h5>
                <img class="img-fluid" src="${this.imgUrl}" height="200">
                <button type="button" class="btn btn-danger btn-block" onclick="app.carsController.delortCar('${this._id}')">Delort</button>
                <button type="button" class="btn btn-success" onclick="app.carsController.bid('${this._id}', '${this.price}')">Bid</button>
            </div>
    `;
  }
}
