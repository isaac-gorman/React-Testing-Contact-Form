import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("ContactForm can submit", async () => {
  render(<ContactForm />);

  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);

  fireEvent.change(firstNameInput, { target: { value: "Isaac" } });
  fireEvent.change(lastNameInput, { target: { value: "Gorman" } });
  fireEvent.change(emailInput, {
    target: { value: "isaac@gmail.com" },
  });
  fireEvent.change(messageInput, {
    target: { value: "test test testing" },
  });

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  const result = await screen.findByTestId("result");
  console.log("result", result);
  expect(result).toBeInTheDocument();
});
