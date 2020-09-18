import faker from "faker";

export class User {
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude()),
    };
  }

  name: string;
  location: {
    lat: number;
    lng: number;
  };
}
