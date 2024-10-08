import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import StaticOffer from "../../Components/Static-offer/Static-offer";
import FeaturedCollectionsSession from "../../Components/FeaturedCollectionsSession/FeaturedCollectionsSession";
import PromotionBanner from "../../Components/PromotionBanner/PromotionBanner";
import "./HomePage.css"; // Corrigido para a importação correta

function HomePage() {
  return (
    <div>
      <PromotionBanner />
      <FeaturedCollectionsSession />
      <div className="totalCard">
        <div className="cardTitle">
          <h3>Produtos em alta</h3>
          <p>
            Ver todos <i className="fa-solid fa-arrow-right"></i>
          </p>
        </div>

        <div className="HomePage-CardContent">
          <ProductCard width={250} height={270} />
          <ProductCard width={250} height={270} />
          <ProductCard width={250} height={270} />
          <ProductCard width={250} height={270} />
          <ProductCard width={250} height={270} />
          <ProductCard width={250} height={270} />
          <ProductCard width={250} height={270} />
          <ProductCard width={250} height={270} />
        </div>
      </div>

      <StaticOffer />
    </div>
  );
}

export default HomePage;
