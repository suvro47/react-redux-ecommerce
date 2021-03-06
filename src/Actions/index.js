import axios from "axios";
import imageToBase64 from "image-to-base64/browser";

export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const incrementQuantityInCartItem = (item) => {
  return {
    type: "INCREMENT_QUANTITY_IN_CART_ITEM",
    payload: item,
  };
};

export const decrementQuantityInCartItem = (item) => {
  return {
    type: "DECREMENT_QUANTITY_IN_CART_ITEM",
    payload: item,
  };
};

export const removeItemFromCart = (item) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: item,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const incrementInTotalQuantity = () => {
  return {
    type: "INCREMENT_IN_TOTAL",
  };
};

export const decrementInTotalQuantity = () => {
  return {
    type: "DECREMENT_IN_TOTAL",
  };
};

export const decrementFixedQuantityInTotalQuantity = (quantity) => {
  return {
    type: "DECREMENT_FIXED_QUANTITY_IN_TOTAL",
    payload: quantity,
  };
};

export const clearTotalQuantity = () => {
  return {
    type: "CLEAR_TOTAL_QUANTITY",
  };
};

export const modalOpen = () => {
  return {
    type: "OPEN",
  };
};

export const modalClose = () => {
  return {
    type: "CLOSE",
  };
};

export const fetchSuccess = (fetchData) => {
  return {
    type: "FETCH_SUCCESS",
    payload: fetchData,
  };
};

export const fetchFailure = (message) => {
  return {
    type: "FETCH_FAILURE",
    payload: message,
  };
};

export const fetchProducts = async (dispatch) => {
  await axios
    .get("https://fakestoreapi.com/products")
    .then((responses) => {
      responses.data.forEach((res) => {
        imageToBase64(res.image)
          .then((base64image) => {
            localStorage.setItem(res.id, base64image);
          })
          .catch((error) => {
            console.log(error);
          });
      });
      return responses.data;
    })
    .then((result) => {
      dispatch(fetchSuccess(result));
    })
    .catch((err) => {
      // error
      dispatch(fetchFailure(err.message));
    });
};
