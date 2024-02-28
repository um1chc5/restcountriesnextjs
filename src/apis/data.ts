import { Countries } from "@/types/countries";
import { http } from "./http";
import { unstable_noStore as noStore } from "next/cache";

export const countriesApis = {
  getAllCountries: async function () {
    try {
      const data = await http.get<Countries>("all");
      return data;
    } catch (error) {
      throw error;
    }
  },
  getCountryByCode: async function (code: string) {
    noStore();
    try {
      const data = await http.get<Countries>(`alpha/${code}`);
      return data;
    } catch (error) {
      throw error;
    }
  },
  getCountriesByCode: async function (codes: string[]) {
    try {
      const data = await http.get<Countries>(`alpha?codes=${codes.join(",")}`);
      return data;
    } catch (error) {
      throw error;
    }
  },
  getCountriesByRegion: async function (region: string) {
    try {
      const data = await http.get<Countries>(`region/${region}`);
      return data;
    } catch (error) {
      throw error;
    }
  },
  getCountriesByName: async function (name: string) {
    try {
      const data = await http.get<Countries>(`name/${name}`);
      // console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  },
} as const;
