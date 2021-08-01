import { url } from "../api";

const endPoint = `${url}name/taiwan`;
const fetchData = fetch(endPoint);

let taiwanInfo = {};

beforeAll(() => {
  return fetchData
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      taiwanInfo = result[0];
    });
});

afterAll(() => {
  taiwanInfo = {};
});

test("url checking", () => {
  expect(endPoint).toBe("https://restcountries.eu/rest/v2/name/taiwan");
});

test("Taiwan's capital is Taipei", () => {
  expect(taiwanInfo["capital"]).toBe("Taipei");
});

// let isCity = {};

// beforeEach(() => {
//   isCity = {
//     taipei: true,
//     tokyo: true,
//   };
// });

// afterEach(() => {
//   isCity = {};
// });

// test("city database has taipei", () => {
//   expect(isCity.taipei).toBeTruthy();
// });

// test("city database has San Juan", () => {
//   expect(isCity.sanJuan).not.toBeTruthy();
// });
