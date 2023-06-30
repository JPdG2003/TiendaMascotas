import { BasicLayout } from "@/layouts"
import { Food } from "@/components/Food"
import { Separator, Seo } from "@/components/Shared"

export default function FoodPage(props) {
  const { food } = props;
  return (
    <>
        <Seo title={food.attributes.title} />
        <BasicLayout>
            <Separator height={220} />
            <Food.Panel foodId={food.id} food={food.attributes} />

            <Separator height={50} />

            <Food.Info food={food.attributes} />

            <Separator height={30} />

            <Food.Media gallery={food.attributes.gallery.data} />

            <Separator height={35} />
  

        </BasicLayout>
    </>
  );
}
