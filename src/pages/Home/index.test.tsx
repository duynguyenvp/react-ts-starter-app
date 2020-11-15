import React from "react"
import { screen, render, cleanup } from "@testing-library/react"
import Home from "./index"

describe("App component", () => {
  beforeAll(() => {
    render(<Home />)
  })

  it("should have the right message in the dom", () => {
    const message = "Hello world"
    expect(screen.getByText(message)).toBeInTheDocument()
  })

  afterAll(cleanup)
})
