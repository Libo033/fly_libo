import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "../__mocks__/createMockRouter";
import Footer from "@/components/Footer";
import LoadingPage from "@/components/LoadingPage";
import LowPrices from "@/components/LowPrices";
import NewsLetter from "@/components/NewsLetter";
import OpenDrawer from "@/components/OpenDrawer";

describe("COMPONENTES", () => {
  describe("FOOTER", () => {
    it("Deberia tener los logos de las redes sociales", () => {
      render(<Footer />);

      expect(
        screen.getByRole("img", { name: /facebook/i })
      ).toBeInTheDocument();
      expect(screen.getByRole("img", { name: /twitter/i })).toBeInTheDocument();
      expect(screen.getByRole("img", { name: /youtube/i })).toBeInTheDocument();
      expect(
        screen.getByRole("img", { name: /linkedin/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("img", { name: /instagram/i })
      ).toBeInTheDocument();
    });
    it("Deberia tener el logo de la pagina web", () => {
      render(<Footer />);

      expect(screen.getByRole("img", { name: /flylibo/i })).toBeInTheDocument();
    });
    it("Deberia tener el texto 'Valentin Libonati 2023'", () => {
      render(<Footer />);

      expect(screen.getByText(/valentin libonati 2023/i)).toBeInTheDocument();
    });
  });

  describe("LOADING PAGE", () => {
    it("Deberia tener la imagen del background", () => {
      render(<LoadingPage />);

      expect(screen.getByRole("img", { name: /sky/i })).toBeInTheDocument();
    });
    it("Deberia tener el gif del avion", () => {
      render(<LoadingPage />);

      expect(screen.getByRole("img", { name: /plane/i })).toBeInTheDocument();
    });
    it("Deberia tener el texto 'Cargando'", () => {
      render(<LoadingPage />);

      expect(screen.getByText(/Cargando/i)).toBeInTheDocument();
    });
  });

  describe("LOW PRICES", () => {
    it("Deberia tener el titulo '¿Cómo hacemos para darte los precios más bajos?'", () => {
      render(<LowPrices />);

      expect(
        screen.getByRole("heading", {
          name: /¿cómo hacemos para darte los precios más bajos\?/i,
        })
      ).toBeInTheDocument();
    });
    it("Deberia tener el subtitulo", () => {
      /* Subtitulo: Nuestro modelo de negocio no es un secreto: ya funciona
       * en decenas de países de manera rentable. Algunos de nuestros pilares:*/
      render(<LowPrices />);

      expect(
        screen.getByText(
          /nuestro modelo de negocio no es un secreto: ya funciona en decenas de países de manera rentable\. algunos de nuestros pilares:/i
        )
      ).toBeInTheDocument();
    });
    it("Deberia tener las imagenes de cada articulo", () => {
      render(<LowPrices />);

      expect(screen.getByRole("img", { name: /planes/i })).toBeInTheDocument();
      expect(screen.getByRole("img", { name: /wallet/i })).toBeInTheDocument();
      expect(
        screen.getByRole("img", { name: /online buy/i })
      ).toBeInTheDocument();
    });
  });

  describe("NEWS LETTER", () => {
    it("Deberia tener su titulo '¡No te pierdas de nada!'", () => {
      render(<NewsLetter />);

      expect(screen.getByText(/¡no te pierdas de nada!/i)).toBeInTheDocument();
    });
    it("Deberia tener su subtitulo", () => {
      /*Subtitulo: Suscribite a nuestro newsletter
       * para enterarte de todo antes que nadie. */
      render(<NewsLetter />);

      expect(
        screen.getByText(
          /suscribite a nuestro newsletter para enterarte de todo antes que nadie\./i
        )
      ).toBeInTheDocument();
    });
    it("Deberia tener un input y un button", () => {
      render(<NewsLetter />);

      expect(screen.getByRole("textbox")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /enviar/i })
      ).toBeInTheDocument();
    });
  });
});
