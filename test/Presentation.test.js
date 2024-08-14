import React from "react";
import ReactDOM from "react-dom/client";
import { Presentation } from "../src/Presentation";
// https://react.dev/warnings/react-dom-test-utils
import { act } from "react-dom/test-utils";

describe("Presentation", () => {
    it("Shows the track name", () => {
        const container = document.createElement("div");
        document.body.appendChild(container);

        const track = { trackName: "Maria" }
        const component = <Presentation track={track} />;

        act(() =>
            ReactDOM.createRoot(container).render(component)
        );

        expect(document.body.textContent).toContain("Maria");
    })
});
