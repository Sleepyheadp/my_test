// 这里文件后缀修改为 tsx，因为需要测试 dom
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./src/App";

describe("test", () => {
	test("first unit test", () => {
		render(<App />);
		expect(screen.getByText("Vite + React")).toBeInTheDocument();
	});
});