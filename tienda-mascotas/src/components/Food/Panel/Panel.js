import { Button, Container, Icon, Image } from "semantic-ui-react";
import { fn, ENV } from "@/utils";
import styles from "./Panel.module.scss";

export function Panel(props) {

    const { foodId, food } = props;

    const pet = food.pet.data;

    const finalPrice = fn.calcDiscountedPrice(food.price, food.discount);
    

  return (
    <Container className={styles.panel}>
      <div className={styles.imgContainer}>
        <Image src={`${ENV.SERVER_HOST}${food.cover.data.attributes.url}`} />
      </div>

      <div className={styles.actionsContainer}>
        <div>
            <h2>{food.title}</h2>

            <div className={styles.moreInfo}>
                <span>
                    <Image src={`${ENV.SERVER_HOST}${pet.attributes.icon.data.attributes.url}`} />
                    {pet.attributes.title}
                </span>

                <span>
                    <Icon name="check" />
                    En stock
                </span>
            </div>

            <div className={styles.price}>
                {food.discount > 0 && (
                    <>
                        <span className={styles.originalPrice}>
                            <Icon name="tag" />
                            $ {food.price}
                        </span>

                        <span className={styles.discount}>
                            -{food.discount}%
                        </span>
                    </>
                )}

                <span className={styles.price}>
                    $ {finalPrice}
                </span>
            </div>

            <Button primary fluid>
                Comprar ahora
            </Button>
        </div>
      </div>
    </Container>
  )
}
