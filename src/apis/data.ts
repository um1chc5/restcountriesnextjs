import { Countries } from "@/types/countries";
import { http } from "./http";

export const countriesApis = {
  getAllCountries: async function () {
    try {
      const data = await http.get<Countries>("all");
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
