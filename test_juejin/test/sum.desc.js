import sum from "../src/sum";

it("adds 1 + 1 to equal 3", () => {
	expect(sum(1, 1)).toBe(3);
});
