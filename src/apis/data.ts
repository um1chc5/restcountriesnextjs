import { Countries } from "src/types/countries";
import { http } from "./http";
import { cache } from "react";


export const countriesApis = {
  getAllCountries: cache(async function () {
    try {
      console.log("hehe");
      const data = await http.get<Countries>("all");
      return data;
    } catch (error) {
      throw error;
    }
  }),
  getAllCountriesFetch: cache(async function () {
    try {
      // console.log("hehe fetch");
      const res = await fetch('https://restcountries.com/v3.1/all');
      const data = await res.json()
      return {data: data as Countries} 
    } catch (error) {
      throw error;
    }
  }),
  getAllCountriesNoCache: async function () {
    try {
      console.log("hehe");
      const data = await http.get<Countries>("all");
      return data;
    } catch (error) {
      throw error;
    }
  },
  getCountryByCode: async function (code: string) {
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
