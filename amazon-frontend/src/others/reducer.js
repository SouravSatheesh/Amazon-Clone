export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);

export const getQuantityTotal = (basket) =>
  basket?.reduce((quantity, item) => item.quantity + quantity, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );
      let editedBasket = [...state.basket];
      if (index >= 0) {
        editedBasket[index].quantity += 1;
        return {
          ...state,
          basket: editedBasket,
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      }

    case "REMOVE_FROM_CART":
      const index1 = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index1 >= 0) {
        if (newBasket[index1].quantity > 1) newBasket[index1].quantity--;
        else newBasket.splice(index1, 1);
      } else {
        console.warn("Cant remove product");
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
