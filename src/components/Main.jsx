import Modals from "./Modals";
import { data } from "../data";

const Main = () => {
  return (
    <main>
      <h1>Mercedes Classic Cars</h1>
      <div className="container">
        {data.map(({ id, name, explanation, image }) => (
          <Modals id={id} name={name} explanation={explanation} image={image} />
        ))}
      </div>
    </main>
  );
};

export default Main;
