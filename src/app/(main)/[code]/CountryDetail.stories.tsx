import type { Meta, StoryObj } from "@storybook/react";
import Country from "./page";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/CountryDetail",
  component: Country,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  render: (args) => (
    <div className="max-w-6xl">
      <Country {...args} />
    </div>
  ),
} satisfies Meta<typeof Country>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LightTheme: Story = {
  args: {
    params: {
      code: "VNM",
    },
  },
};

// export const DarkTheme: Story = {
//   args: {
//     params: {
//       code: "DE",
//     },
//   },
// };
