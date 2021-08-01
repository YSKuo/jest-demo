import axios from "axios";

import { url } from "../api";
const endPoint = `${url}/name/taiwan`;

const fetchData = () => {
  return axios.get(endPoint);
};

// Mock Return Values
// function forEach(items, callback) {
//   for (let index = 0; index < items.length; index++) {
//     callback(items[index]);
//   }
// }

// test("test forEach", () => {
//   const mockCallback = jest.fn((x) => 42 + x);
//   forEach([0, 1], mockCallback);

//   expect(mockCallback.mock.calls.length).toBe(2);
//   expect(mockCallback.mock.calls[0][0]).toBe(0);
//   expect(mockCallback.mock.calls[1][0]).toBe(1);
//   expect(mockCallback.mock.results[0].value).toBe(42);
// });

// Mocking Modules
jest.mock("axios");

test("should fetch TW", () => {
  const resp = { name: "TAIWAN", capital: "Taipei" };
  axios.get.mockResolvedValue(resp);

  return fetchData().then((res) => expect(res.name).toBe("TAIWAN"));
});

// Mock Implementations
const myMockFn = jest
  .fn(() => "default")
  .mockImplementationOnce(() => "first call")
  .mockImplementationOnce(() => "second call");

console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
// > 'first call', 'second call', 'default', 'default'
