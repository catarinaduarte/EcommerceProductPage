import { useEffect, useState } from "react";
import { createContext } from "react";

const data = [
  {
    img: require("../assets/images/image-product-1.jpg"),
  },
  {
    img: require("../assets/images/image-product-2.jpg"),
  },
  {
    img: require("../assets/images/image-product-3.jpg"),
  },
  {
    img: require("../assets/images/image-product-4.jpg"),
  },
];

const Context = createContext(null);

export const ContextProvider = (props) => {
  const [modal, setModal] = useState(false);
  const [activeImg, setActiveImg] = useState(false);
  const [activeImgStyle, setActiveImgStyle] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);
  const [cart, showCart] = useState(false);
  const [toCart, setAddToCart] = useState(false);
  const [menu, setMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (!activeImg && data.length > 0) {
      setActiveImg(data[0]);
      setActiveImgStyle("first-photo");
    }

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    if (width > 1070) {
      setMenu(false);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [activeImg, quantity, width]);

  const photoHandler = (e) => {
    if (e.target.id === "0") {
      setActiveImg(data[0]);
      setActiveImgStyle("first-photo");
    }
    if (e.target.id === "1") {
      setActiveImg(data[1]);
      setActiveImgStyle("second-photo");
    }
    if (e.target.id === "2") {
      setActiveImg(data[2]);
      setActiveImgStyle("third-photo");
    }
    if (e.target.id === "3") {
      setActiveImg(data[3]);
      setActiveImgStyle("fourth-photo");
    }
  };

  const nextPhotoHandler = () => {
    let index = data.indexOf(activeImg);

    if (index < data.length - 1) {
      let newIndex = index + 1;
      setActiveImg(data[newIndex]);
    }
    if (index === data.length - 1) {
      setActiveImg(data[0]);
    }
  };

  const previousPhotoHandler = () => {
    let index = data.indexOf(activeImg);

    let newIndex = index - 1;
    setActiveImg(data[newIndex]);

    if (index === 0) {
      newIndex = 3;
      setActiveImg(data[newIndex]);
    }
  };

  const decQuantityHandler = () => {
    if (quantity === 0) return;
    setQuantity((prevState) => prevState - 1);
  };

  const addToCartHandler = () => {
    if (quantity === 0) return;
    setNewQuantity(quantity);
    setAddToCart(true);
  };

  const setMenuHandler = () => {
    setMenu((prevState) => !prevState);
    showCart(false);
  };

  const showCartHandler = () => {
    showCart((prevState) => !prevState);
    setMenu(false);
  };

  const context = {
    modal: modal,
    activeImg: activeImg,
    activeImgStyle: activeImgStyle,
    quantity: quantity,
    newQuantity: newQuantity,
    cart: cart,
    toCart: toCart,
    menu: menu,
    openModal: () => setModal(true),
    removeModal: () => setModal(false),
    incQuantity: () => setQuantity((prevState) => prevState + 1),
    showCart: showCartHandler,
    setMenu: setMenuHandler,
    decQuantity: decQuantityHandler,
    nextPhoto: nextPhotoHandler,
    prevPhoto: previousPhotoHandler,
    photoHandler: photoHandler,
    addToCart: addToCartHandler,
    removeFromCart: () => setAddToCart(false),
  };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default Context;
