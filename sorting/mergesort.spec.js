describe("Split Array function", function() {
  it("es capar de dividir el arreglo en dos partes", function() {
    expect(split([6, 40, 3, 8, 50, 10, 70])).toEqual([
      [6, 40, 3],
      [8, 50, 10, 70]
    ]);
  });
});

describe("Merge", function() {
  it("es capaz de mergear dos arreglos ordenados a un solo arreglo ordenado", function() {
    expect(merge([30, 40], [6, 10])).toEqual([6, 10, 30, 40]);
  });
});

describe("mergeSort", function() {
  it("hace el mergeSort", function() {
    expect(mergeSort([30, 40, 6, 10])).toEqual([6, 10, 30, 40]);
  });
});
