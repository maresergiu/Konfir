import { getClients } from "../clients.js";
import axios from "axios";

describe("clients.js", () => {
  describe("getClients", () => {
    const data = [{ mockProp: "mockValue" }];

    it("should call verifications.json", async () => {
      const spy = jest.spyOn(axios, "get").mockResolvedValue({
        data: []
      });
      await getClients();
      expect(spy).toHaveBeenCalledWith(
        "http://localhost:3000/verifications.json"
      );
    });

    it("should return an array if succeed", async () => {
      jest.spyOn(axios, "get").mockResolvedValue({ data });
      const result = await getClients();
      expect(result).toEqual(data);
    });

    it("should return an error obj if fails", async () => {
      const data = [{ mockProp: "mockValue" }];
      jest.spyOn(axios, "get").mockRejectedValue({ data });
      const result = await getClients();
      expect(result).toMatchObject({
        error: true,
        errorObj: { data: [{ mockProp: "mockValue" }] }
      });
    });
  });
});
