import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Item from "../components/Item";

describe("Store Item", () => {
    it("calls addToCart function when add to cart button is clicked", () => {
        const addToCart = jest.fn();
        render(<Item addToCart={addToCart} itemName={"GTA5"} />);
        const addToCartBtn = screen.getByRole('button', { name: "Add to Cart"});
        userEvent.click(addToCartBtn);
        expect(addToCart).toBeCalled();
        expect(addToCart).toBeCalledWith("GTA5");
    });
});