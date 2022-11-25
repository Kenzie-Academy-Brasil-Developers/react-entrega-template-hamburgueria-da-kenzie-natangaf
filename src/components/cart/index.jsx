import { StlyesCart } from "./style";
import { StyledTypography } from "../BaseTypography/style";
import { ProductsListCart } from "./ListCart/";
import { StyledButtons } from "../../Styles/Buttons";
import { useState } from "react";
import { CartEmpty } from "./CartEmpty";

export function MyCart({ currentSale, setCurrentSale, cart, SetCart }) {
  function ContValue() {
    const values = currentSale.map((element) => element.price);
    const value = values.reduce((valueOne, valueTwo) => valueOne + valueTwo, 0);
    return value;
  }

  return (
    <StlyesCart>
      <span>
        <StyledTypography tag="h2" classText="Heading3">
          Carrinho de Compras
        </StyledTypography>
      </span>
      {cart ? (
        <>
          <ProductsListCart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            SetCart={SetCart}
          />
          <div>
            <div>
              <StyledTypography tag="p" classText="Body600">
                Total
              </StyledTypography>
              <StyledTypography tag="p" classText="Body600">
                $ {ContValue()}
              </StyledTypography>
            </div>
            <StyledButtons
              nameButtons="bntOne"
              onClick={() => {
                setCurrentSale([]);
              }}
            >
              Remover todos os Itens
            </StyledButtons>
          </div>
        </>
      ) : (
        <>
          <CartEmpty />
        </>
      )}
    </StlyesCart>
  );
}
