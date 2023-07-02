import { card } from "../assets";
import styles, { layout } from "../pages/style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        A better way to invest <br className="sm:block hidden" /> your money
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Investment DAOs offer a superior way to invest money, leveraging decentralized decision-making and community-driven strategies for optimal returns.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
