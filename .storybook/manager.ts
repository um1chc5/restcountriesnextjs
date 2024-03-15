import { addons, types } from "@storybook/manager-api";

addons.register("my-addon", () => {
  addons.add("my-addon/tab", {
    type: types.TAB,
    title: "Docs",
    match(matchOptions) {
      return matchOptions.path === "docs";
    },
    render: () => "Docs",
  });
});
