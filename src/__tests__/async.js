import { url } from '../api';

const endPoint = `${url}/name/taiwan` 
const fetchData = fetch(endPoint);

// const fetchDataPromise = () => {
//   return new Promise(function (resolve, reject) {
//     resolve("peanut butter");
//     reject("fail");
//   });
// };

// Callbacks
// test("the data is peanut butter", (done) => {
//   function callback(data) {
//     try {
//       expect(data).toBe("peanut butter");
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }

//   fetchData(callback);
// });

// Promises
test("test data taiwan", () => {
  return fetchData.then((response) => {
    response.json().then((json) => {
      expect(json[0]["name"]).toBe("Taiwan");
    });
  });
});

// test("the fetch fails with an error", () => {
//   expect.assertions(1);
//   return fetchDataPromise().catch((e) => expect(e).toMatch("fail"));
// });
