import { propertyGroups } from "stylelint-config-clean-order";

const propertiesOrder = propertyGroups.map((properties) => ({
  noEmptyLineBetween: true,
  emptyLineBefore: "never",
  properties,
}));

/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-recommended-scss", "stylelint-config-clean-order"],
  rules: {
    "order/properties-order": [
      propertiesOrder,
      {
        severity: "warning",
        unspecified: "bottomAlphabetical",
      },
    ],
    "declaration-empty-line-before": null,
  },
};
