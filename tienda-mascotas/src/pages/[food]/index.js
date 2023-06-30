import { Food } from "@/api";

export { default } from "./food";

export async function getServerSideProps(context) {
    const { params : { food } } = context;
    

    const foodCtrl = new Food();
    const response = await foodCtrl.getBySlug(food);
    return {
        props: {
            food: response,
        }
    };
}