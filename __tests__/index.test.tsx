import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Home from "../pages/index";

describe("Test example", () => {
  test("add button test", () => {
    render(<Home />);
    let addButton = screen.getByRole("button", { name: /add/i });
    expect(addButton).toBeInTheDocument();
  });

  test("add button click test", () => {
    render(<Home />);
    let addButton = screen.getByRole("button", { name: /add/i });
    user.click(addButton);
    let count = screen.getByText(/1/);
    expect(count).toBeInTheDocument();
  });

  test("testing playground", () => {
    render(<Home />);
    screen.logTestingPlaygroundURL();
  });
});
