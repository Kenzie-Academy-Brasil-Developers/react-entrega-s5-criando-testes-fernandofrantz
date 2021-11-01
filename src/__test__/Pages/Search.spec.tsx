import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../../components/Search";
import Providers from "../../providers/";

import api from "../../services";
import MockAdapter from "axios-mock-adapter";

const mockHistory = jest.fn();
const apiMock = new MockAdapter(api);

describe("Search", () => {
  it("should be able to search", async () => {
    apiMock.onPost("/cep").replyOnce(200, {});
    render(
      <Providers>
        <Search />
      </Providers>
    );

    const input = screen.getByPlaceholderText("Insira o CEP");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: 95901178 } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(input).toHaveValue(95901178);
    });
  });
});
