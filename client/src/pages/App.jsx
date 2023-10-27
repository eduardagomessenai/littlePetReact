import Card from "../components/card/card";
import Categories from "../components/categories/categories";
import Header from "../components/header/header";
import Slider from "../components/slider/slider";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Slider />
        <h2>Produtos Recomendados</h2>
      <div className="container">
      <Card img={"https://placehold.co/100x100"}>Gran Plus Ração </Card>
      <Card img={"https://placehold.co/100x100"}>Gran Plus Ração </Card>
      <Card img={"https://placehold.co/100x100"}>Gran Plus Ração </Card>
      <Card img={"https://placehold.co/100x100"}>Gran Plus Ração </Card>
      <Card img={"https://placehold.co/100x100"}>Gran Plus Ração </Card>
      <Card img={"https://placehold.co/100x100"}>Gran Plus Ração </Card>
      </div>
    </div>
  );
};

export default App;
