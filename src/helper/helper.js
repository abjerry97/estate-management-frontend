const addToCartHandler = (cart, setcart, product, qty, setqty) => {
  const id = product._id;
  // const existProduct = product.find((x) => x._id === id);
  const existItem = cart.find((x) => x._id === id);

  if (existItem) {
    setcart(
      (cart || []).map((x) =>
        x._id === existItem._id
          ? {
              ...existItem,
              orderedQuantity: qty[existItem._id],
            }
          : x
      )
    );
  } else {
    if (!qty[id] || Number(qty[id]) < 1) {
      qty[id] = 1;
      setqty({ ...qty });
    }

    setcart([
      ...cart,
      {
        ...product,
        orderedQuantity: qty[product._id],
      },
    ]);
  }
};

const increaseCartItemQtyHandler = (cart, setcart, product, qty, setqty) => {
  const id = product._id;
  // const existProduct = product.find((x) => x._id === id);
  const existItem = cart.find((x) => x._id === id);

  if (existItem) {
    if (!!qty[id] && Number(qty[id]) > 0) {
      qty[id] += 1;
      setqty({ ...qty });
    }
    setcart(
      (cart || []).map((x) =>
        x._id === existItem._id
          ? {
              ...existItem,
              orderedQuantity: qty[existItem._id],
            }
          : x
      )
    );
  } else {
    if (!qty[id] || Number(qty[id]) < 1) {
      qty[id] = 1;
      setqty({ ...qty });
    }

    setcart([
      ...cart,
      {
        ...product,
        orderedQuantity: qty[product._id],
      },
    ]);
  }
};
const decreaseCartItemQtyHandler = (cart, setcart, product, qty, setqty) => {
  const id = product._id;
  // const existProduct = product.find((x) => x._id === id);
  const existItem = cart.find((x) => x._id === id);

  if (existItem) {
    if (!!qty[id] && Number(qty[id]) > 1) {
      qty[id] -= 1;
      setqty({ ...qty });
      setcart(
        (cart || []).map((x) =>
          x._id === existItem._id
            ? {
                ...existItem,
                orderedQuantity: qty[existItem._id],
              }
            : x
        )
      );
    } else {
      removeFromCartHandler(product, cart, setcart);
    }
   
  }
};

const removeFromCartHandler = (product, cart, setcart) => {
  console.log(111)
  const id = product._id;
  const existItem = cart.find((x) => x._id === id);
  if (existItem) {
    setcart((cart || []).filter((x) => x._id !== existItem._id));
  }
};

module.exports = {
  removeFromCartHandler,
  addToCartHandler,
  increaseCartItemQtyHandler,
  decreaseCartItemQtyHandler,
};
