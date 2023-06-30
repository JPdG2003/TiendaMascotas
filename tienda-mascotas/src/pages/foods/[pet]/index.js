import {Pet, Food} from "@/api";

export { default } from "./pet";

export async function getServerSideProps(context){
  const { query, params } = context;
  const { page = 1 } = query;
  const { pet } = params;

    const petCtrl = new Pet();
    const responsePet = await petCtrl.getBySlug(pet);

    const foodCtrl = new Food();
    const responseFood = await foodCtrl.getFoodByPetSlug(pet, page);

  console.log(page);
  return {
    props: {
      pet: responsePet,
      food: responseFood.data,
      pagination: responseFood.meta.pagination,
    }
  }
}