import { sanitizeList } from "../data";
import { userTableSchema } from "../objSchema";
import { verificationsEnum } from "../../data";
import clients from "../__mocks__/verifications.json";

describe("data.js", () => {
  describe("sanitizeList", () => {
    it("should return a formatted list", () => {
      expect(
        sanitizeList(
          userTableSchema,
          [clients.data[0]],
          Object.values(verificationsEnum)
        )
      ).toEqual([
        {
          assignTo: "0TestCompany E2EEmployer",
          deadline: "01/01/2050",
          fullName: "TestUser Aaaaa TestUser Aaaaa",
          requestData: "24/02/2022",
          requestType: "Employment Verification",
          status: "Waiting for Employee",
          verifier: "0TestCompany E2EVerifier"
        }
      ]);
    });
  });
});
