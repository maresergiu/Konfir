import { userTableSchema } from "../objSchema";
import clients from "../__mocks__/verifications.json";

describe("objSchema", () => {
  describe("userTableSchema", () => {
    it("should match object", () => {
      expect(userTableSchema(clients.data[0])).toMatchObject({
        assignTo: "0TestCompany E2EEmployer",
        deadline: "01/01/2050",
        fullName: "TestUser Aaaaa TestUser Aaaaa",
        requestData: "24/02/2022",
        requestType: "Employment Verification",
        status: "Waiting for Employee",
        verifier: "0TestCompany E2EVerifier"
      });
    });
  });
});
