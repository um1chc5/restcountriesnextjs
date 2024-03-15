import type { Meta, StoryObj } from "@storybook/react";
import CountryCard from "./countryCard";
import { countriesApis } from "src/apis/data";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/CountryCard",
  component: CountryCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  render: (args, { loaded: { country } }) => {
    // console.log(country);
    return <CountryCard country={country} />;
  },
} satisfies Meta<typeof CountryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// @ts-ignore
export const Sample: Story = {
  loaders: [
    async () => ({
      country: (await countriesApis.getCountriesByCode(["VNM"])).data[0],
    }),
  ],
};
