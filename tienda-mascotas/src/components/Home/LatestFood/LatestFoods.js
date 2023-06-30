import { useState, useEffect } from "react";
import { Food } from "@/api";
import { GridFoods } from "@/components/Shared";

const foodCtrl = new Food();

export function LatestFoods(props) {
    const { title, limit = 5, petId = null } = props;
    const [foods, setFoods] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await foodCtrl.getLatestPublished({limit, petId});
                setFoods(response.data);
            } catch (error) {
                console.error(error);
            }
        })()
    }, []);

    if (!foods) return null;

  return (
    <div>
      <h2>{title}</h2>
      <GridFoods foods={foods} />
    </div>
  )
}
