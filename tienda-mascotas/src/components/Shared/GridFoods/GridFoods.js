import styles from "./GridFoods.module.scss";
import Link from "next/link";
import { map } from "lodash";
import { ENV } from "@/utils";
import { fn } from "@/utils";
import { Label } from "@/components/Shared";


export function GridFoods(props) {
    const { foods } = props;
  return (
    <div className={styles.gridFoods}>
      {map(foods, (food) => (
        <Link key={food.id} 
        href={`/${food.attributes.slug}`}
        className={styles.food}>
            <div>
                <img src={`${ENV.SERVER_HOST}${food.attributes.cover.data.attributes.url}`} /> 
                {food.attributes.discount > 0 && (
                  <Label.Discount className={styles.discount}>
                  {`-${food.attributes.discount}%`}
                </Label.Discount>
                )}
            </div> 

            <div>
              <span>{food.attributes.title}</span>
              <span className={styles.price}>
                {fn.calcDiscountedPrice(
                  food.attributes.price,
                  food.attributes.discount
                )}
                $
              </span>
          </div>                           
        </Link>
      ))}
    </div>
  )
}
