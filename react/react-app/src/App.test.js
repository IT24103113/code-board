import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders counter and increments on click", async () => {
  render(<App />);
  expect(screen.getByRole("button", { name: /click/i })).toBeInTheDocument();
  expect(screen.getByText("0")).toBeInTheDocument();
  await userEvent.click(screen.getByRole("button", { name: /click/i }));
  expect(screen.getByText("1")).toBeInTheDocument();
});
