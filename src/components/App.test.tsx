import { render, screen } from "../testUtils/testUtils";
import App from "./App";

//An example of using react-testing-library
describe("App component", async () => {
    test("Should have text Hello, World on it", () => {
        render(<App />);
        const elem = screen.getByText("Hello, World");
        expect(elem).toBeInTheDocument();
    });
});
