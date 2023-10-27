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
        <h1>Produtos Recomendados</h1>
      <div className="container">
      <Card img={"https://placehold.co/100x100"}>Gran Plus Ração </Card>
      <Card img={"https://placehold.co/100x100"}>Petisco Biscoito Joy Cook Big </Card>
      <Card img={"https://placehold.co/100x100"}>Creme Dental Pet Clean Sabor Morango para Cães e Gatos </Card>
      <Card img={"https://placehold.co/100x100"}>São Francisco Tapete Higiênico Sapecão </Card>
      <Card img={"https://placehold.co/100x100"}>Pet Clean Creme Hidratante para Patas </Card>
      </div>


      <h2>Para cães</h2>
      <div className="container">
      <Card img={"https://placehold.co/100x100"}>Rações </Card>
      <Card img={"https://placehold.co/100x100"}>Anti-Pulga </Card>
      <Card img={"https://placehold.co/100x100"}>Higiene Canina </Card>
      <Card img={"https://placehold.co/100x100"}>Casinhas </Card>
      <Card img={"https://placehold.co/100x100"}>Medicamentos </Card>
      <Card img={"https://placehold.co/100x100"}>Petiscos </Card>
      </div>

      <h2>Para gatos</h2>
      <div className="container">
      <Card img={"https://placehold.co/100x100"}>Rações </Card>
      <Card img={"https://placehold.co/100x100"}>Anti-Pulga </Card>
      <Card img={"https://placehold.co/100x100"}>Higiene Felina </Card>
      <Card img={"https://placehold.co/100x100"}>Casinhas </Card>
      <Card img={"https://placehold.co/100x100"}>Medicamentos </Card>
      <Card img={"https://placehold.co/100x100"}>Transporte </Card>
      </div>

     <h1>Acessórios</h1>
      <h2>Coleiras</h2>
      <div className="container">
      <Card img={"https://placehold.co/100x100"}>Coleira Guia Retrátil para Cachorros e Gatos </Card>
      <Card img={"https://placehold.co/100x100"}>Coleita Peitoral para Cachorros </Card>
      <Card img={"https://placehold.co/100x100"}>Coleira Peitoral Reforçada para Cachorros</Card>
      <Card img={"https://placehold.co/100x100"}>Coleira Peitoral para Cahorros</Card>
      <Card img={"https://placehold.co/100x100"}>Coleira Elegante Pescoço para Cachorros e Gatos </Card>
      <Card img={"https://placehold.co/100x100"}>Coleira Peitoral para Gatos </Card>
      </div>

      <h2>Roupas</h2>
      <div className="container">
      <Card img={"https://placehold.co/100x100"}>Smooking Elegante</Card>
      <Card img={"https://placehold.co/100x100"}>Camiseta Funny Personalizada </Card>
      <Card img={"https://placehold.co/100x100"}>Casaco Forest - peça com nome bordado </Card>
      <Card img={"https://placehold.co/100x100"}>Roupinha The Dog Face </Card>
      <Card img={"https://placehold.co/100x100"}>Casaquinho com forro Blue </Card>
      <Card img={"https://placehold.co/100x100"}>Casaquinho com forro Pink </Card>
      </div>

      <h1>Rações</h1>
      <h2>Cães</h2>
      <div className="container">
      <Card img={"https://placehold.co/100x100"}>Ração Golden Special 15Kg </Card>
      <Card img={"https://placehold.co/100x100"}>Ração Premier Raças Pequenas 10Kg </Card>
      <Card img={"https://placehold.co/100x100"}>Ração Pedigree Adultos 15Kg </Card>
      <Card img={"https://placehold.co/100x100"}>Ração Royal Adultos 15Kg </Card>
      <Card img={"https://placehold.co/100x100"}>Gran Plus Ração 15Kg </Card>
      </div>

      <h2>Gatos</h2>
      <div className="container">
      <Card img={"https://placehold.co/100x100"}>Whiskas - Sabor Carne </Card>
      <Card img={"https://placehold.co/100x100"}>Ração Golden Gatos </Card>
      <Card img={"https://placehold.co/100x100"}>Ração Special Cat </Card>
      <Card img={"https://placehold.co/100x100"}>Ração Gran Plus </Card>
      <Card img={"https://placehold.co/100x100"}>Ração Premier 25Kg </Card>
      <Card img={"https://placehold.co/100x100"}>Gran Plus Ração </Card>
      </div>

      <h1>Produtos bem avaliados</h1>
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
