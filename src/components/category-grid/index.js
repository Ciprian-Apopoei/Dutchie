import Styles from "./CategoryGrid.module.css";
import CategoryLarge from "./category-large";
import CategorySmall from "./category-small";

export default function CategoryGrid() {
  return (
    <section className={Styles.CategoryGrid}>
      <div className="container">
        <div className={Styles.container_inner}>
          <CategoryLarge details="Lorem ipsum dolor sit amet, consectetur" />
          <div className={Styles.col_2}>
            <CategorySmall
              details="Lorem ipsum dolor sit amet, consectetur"
              btnStyle="btnDark"
            />
            <CategorySmall
              details="Lorem ipsum dolor sit amet, consectetur"
              btnStyle="btnDark"
            />
          </div>
          <div className={Styles.col_3}>
            <CategorySmall
              details="Lorem ipsum dolor sit amet, consectetur"
              btnStyle="btnLink"
            />
            <CategorySmall
              details="Lorem ipsum dolor sit amet, consectetur"
              btnStyle="btnLink"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
