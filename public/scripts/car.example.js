class Car {
    static list = [];

    static init(cars) {
        this.list = cars.map((i) => new this(i));
    }

    constructor({ id, plate, manufacture, model, image, rentPerDay, capacity, description, transmission, available, type, year, options, specs, availableAt, driverType }) {
        this.id = id;
        this.plate = plate;
        this.manufacture = manufacture;
        this.model = model;
        this.image = image;
        this.rentPerDay = rentPerDay;
        this.capacity = capacity;
        this.description = description;
        this.transmission = transmission;
        this.available = available;
        this.type = type;
        this.year = year;
        this.options = options;
        this.specs = specs;
        this.availableAt = availableAt;
        this.driverType = driverType;
    }

    render() {
        const money = this.rentPerDay;
        const currency = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(money); //Currency Formatting
        return `
  
      <div class="card car-card">
        <img class="card-img-top car-img" src="${this.image}" alt="Card image cap">
      <div class="card-body car-card-body pb-3 px-3 d-flex flex-column">
          <h5 class="card-title car-card-title pt-3">${this.manufacture} ${this.model}</h5>
          <p class="card-title car-card-rent">${currency} / hari</p>
          <p class="card-text py-2">Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. </p>
      <div class="card-text car-capacity"><img src="https://i.ibb.co/cFwn7cJ/fi-users.png"> ${this.capacity} Orang</div>
      <div class="card-text car-transmission"><img src="https://i.ibb.co/dppss6Z/fi-settings.png"> ${this.transmission}</div>
      <div class="card-text car-year"><img src="https://i.ibb.co/r4NCjn2/fi-calendar.png"> Tahun ${this.year}</div>
        <div class="d-grid gap-2 pt-3">
            <a href="#" class="text-white text-center text-decoration-none py-3 green-bg" style="border-radius: 5px;">Pilih Mobil</a>
        </div>
      </div>
      </div>
      
      `;
    }
}
