import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./Card.scss";

const cardVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
    },
  }),
};
const Card = ({ product, i }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="card"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      custom={i}
    >
      <div className="card__image">
        <a href="#" aria-label="product">
          <img src={product.imageSrc} alt="" />
        </a>
      </div>
      <div className="card__text">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <a href="#" className="card__button">
          Shop {product.cat}
        </a>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    cat: PropTypes.string.isRequired,
  }).isRequired,
  i: PropTypes.number.isRequired,
};

export default Card;
