const R = require("ramda");
const Maybe = require("folktale/maybe");
const Result = require("folktale/result");

const someUser = {
  address: "1235 SomeWay Rd, Orlando, FL, 328e27"
};

const cityByZip = zip => {
  switch (zip) {
    case "32827":
      return "Orlando";
    default:
      return "";
  }
};

// Info on Maybe monad => http://folktale.origamitower.com/api/v2.0.0/en/folktale.maybe.html or http://folktale.origamitower.com/docs/v2.0.0/migrating/from-data.maybe/#maybeap
// Maybe from Haskell => https://en.wikibooks.org/wiki/Haskell/Understanding_monads/Maybe

const zip = address => R.view(R.lensIndex(0), R.match(/\b\d{5}\b/g, address));
const zipNotFound = "Cannot find zip on database";

const city = user =>
  Maybe.fromNullable(user.address)
    .chain(address => Maybe.fromNullable(zip(address)))
    .chain(zip => Maybe.fromNullable(cityByZip(zip)))
    .getOrElse(zipNotFound);

console.log(city(someUser));
