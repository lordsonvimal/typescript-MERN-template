import * as React from "react";
import App from "./App";
import { render } from "@testing-library/react";

const getComponent = () => {
    const { container, getByText } = render(<App />);
    return { container, getByText };
}

describe("App", () => {
    it("should render", function () {
        const { getByText } = getComponent();
        expect(getByText("Template APP")).toBeTruthy();
    });
});
