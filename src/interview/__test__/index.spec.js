const { getLandParcelsForCompany } = require('../index.js')

describe("Tests", () => {
  it("test", () => {
    expect(getLandParcelsForCompany('c1')).toEqual(["l1"])
    //expect(getLandParcelsForCompany('c1')).toBe(["l1","l3","l4","l5"])

  });

  it("youngest child should return only their landparcels", () => {
    expect(getLandParcelsForCompany('c5')).toEqual(["l4", "l5"])

  })

  it("a company with sub-company also returns child landparcels in", () => {
    expect(getLandParcelsForCompany('c3')).toEqual(["l3", "l4", "l5"])
    //expect(getLandParcelsForCompany('c1')).toBe(["l1","l3","l4","l5"])

  });
});