import collection1 from "../../assets/images/collection-1.jpg";
import collection2 from "../../assets/images/collection-2.jpg";
import collection3 from "../../assets/images/collection-3.jpg";
import Card from "../Card/Card";
import "./Collections.scss";

const Collections = () => {
  const productData = [
    {
      name: "Activate",
      description: "With pH-balancing cleansers to reboot skin for self-repair",
      imageSrc: collection1,
      link: "#",
      cat: "Cleansers",
    },
    {
      name: "Accelerate",
      description: "With acid treatments that build skin’s resilience.",
      imageSrc: collection2,
      link: "#",
      cat: "Exfoliants",
    },
    {
      name: "Advocate",
      description: "To nourish and protect your skin’s healthy and vitality.",
      imageSrc: collection3,
      link: "#",
      cat: "Moisturisers",
    },
  ];

  return (
    <section className="collections">
      <div className="collections__container">
        {productData.map((product, index) => (
          <Card product={product} i={index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Collections;
