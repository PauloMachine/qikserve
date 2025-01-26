/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import Menu from "src/features/menu";

describe("Menu Component", () => {
  describe("Menu Sections", () => {
    it("renders menu sections correctly", () => {
      const { getByText } = render(<Menu />);

      expect(getByText("Burgers")).toBeInTheDocument();
      expect(getByText("Drinks")).toBeInTheDocument();
      expect(getByText("Desserts")).toBeInTheDocument();
    });
  });

  describe("Menu Items", () => {
    it("renders burger items correctly", () => {
      const { getByText } = render(<Menu />);

      expect(getByText("Hard Core")).toBeInTheDocument();
      expect(getByText("Smash Brooks")).toBeInTheDocument();
      expect(getByText("Ogro Burger")).toBeInTheDocument();
    });

    it("renders drink items correctly", () => {
      const { getByText } = render(<Menu />);

      expect(getByText("Caipirinha")).toBeInTheDocument();
      expect(getByText("Red Label")).toBeInTheDocument();
      expect(getByText("Smirnoff")).toBeInTheDocument();
    });

    it("renders dessert items correctly", () => {
      const { getByText } = render(<Menu />);

      expect(getByText("Pink Lmenonas")).toBeInTheDocument();
    });
  });
});
