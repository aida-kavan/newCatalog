import Header from "../../components/header";
import styles from "../../components.style/page.module.scss";
import Title from "../../components/title";
import SquareProductItem from "../../components/squareProductItem";
import { pen } from "../../datas/pen";

const Pen = () => {
  return (
    <>
      <Header />
      <div className={styles.mainPageCont}>
        <div className={styles.productCont}>
          <Title title={"خودکار تبلیغاتی "} />
          {pen.map((item) => (
            <SquareProductItem
              img={item.image}
              code={item.Pcode}
              title={item.name}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Pen