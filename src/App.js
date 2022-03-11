import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Images from "./components/Product/Images";
import Description from "./components/Product/Description";
import Modal from "./components/Modal/Modal";

import Context from "./store/context";
import { useContext } from "react";
function App() {
  const ctx = useContext(Context);
  return (
    <>
      <Header />
      <Main>
        <Images />
        <Description />
      </Main>
      {ctx.modal && <Modal />}
    </>
  );
}

export default App;
