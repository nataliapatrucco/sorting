describe("Bubble Sort", function() {
  beforeEach(function() {
    spyOn(window, "swap").and.callThrough();
  });
  it("contar swapeos", function() {
    bubbleSort([6, 4, 3, 8, 50]);
    expect(swap.calls.count()).toEqual(3);
  });
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("Ordena un arreglo", function() {
    expect(bubbleSort([6, 4, 3, 8, 50])).toEqual([3, 4, 6, 8, 50]);
  });
});
