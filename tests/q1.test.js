const limitItems = require("../q1");

describe("Test for the q1", () => {
  const emptyArray = [];
  let sampleArrTen = [];
  let sampleArrTwenty = [];

  beforeEach(() => {
    sampleArrTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    sampleArrTwenty = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
  });

  it("should return an empty array when input array is empty", () => {
    const result = limitItems(emptyArray, 1, 1);
    expect(result).toEqual([]);
  });

  it("should return an empty array when page size or page number is invalid", () => {
    const result = limitItems(sampleArrTen, 11, -1);
    expect(result).toEqual([]);
  });

  it("should return an empty array when page size or page size is invalid", () => {
    const result = limitItems(sampleArrTen, -11, 1);
    expect(result).toEqual([]);
  });

  it("should return an empty array when page size or page size is invalid", () => {
    const result = limitItems(sampleArrTen, 'test', "test");
    expect(result).toEqual([]);
  });

  it("should return empty array even if input page number and size is in string ", () => {
    const result = limitItems(sampleArrTen, '1', "1");
    expect(result).toEqual([]);
  });

  it("Should return first 5 elements when page is 1 and size is 5", () => {
    const result = limitItems(sampleArrTen, 5, 1);
    expect(result.length).toEqual(5);
    expect(result).toEqual(sampleArrTen.slice(0, 5));
  });

  it("Should return second 5 elements when page is 2 and size is 5", () => {
    const result = limitItems(sampleArrTen, 5, 2);
    expect(result.length).toEqual(5);
    expect(result).toEqual(sampleArrTen.slice(5, sampleArrTen.length));
  });

  it("Should return last 2 items when page is over size", () => {
    const result = limitItems(sampleArrTen, 4, 3);
    expect(result.length).toEqual(2);
    expect(result).toEqual(
      sampleArrTen.slice(sampleArrTen.length - 2, sampleArrTen.length)
    );
  });

  it("should return first 10 items when first when size is 10 and page number is 1", () => {
    const result = limitItems(sampleArrTwenty, 10, 1);
    expect(result).toEqual(sampleArrTwenty.slice(0, 10));
  });
});
