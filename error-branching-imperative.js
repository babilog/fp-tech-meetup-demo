const R = require("ramda");

const someUser = {
  address: "1235 SomeWay Rd, Orlando, FL, 32827"
};

const cityByZip = zip => {
  switch (zip) {
    case "32827":
      return "Orlando";
    default:
      return "City not in DB";
  }
};

const extractCity = user => {
  const address = user.address;

  if (address) {
    const zip = address.match(/(\d{5})$/i);

    if (zip) {
      const city = cityByZip(zip[1]);

      if (city) {
        return city;
      } else {
        return "can't find city";
      }
    }
  }
  return "can't find city";
};

console.log(extractCity(someUser));
