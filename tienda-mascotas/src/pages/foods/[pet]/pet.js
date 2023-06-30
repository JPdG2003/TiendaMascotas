import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import { GridFoods, Separator, NoResult, Pagination, Seo } from "@/components/Shared";

export default function PetPage(props) {
    const { food, pet, pagination} = props;
    const hasProducts = size(food) > 0;

  return (
    <>
      <Seo title={`Alimentos para ${pet.attributes.title}`} />
      <BasicLayout relative>
        <Container>
          <Separator height={50} />

          <h2>{pet.attributes.title}</h2>

          {hasProducts ? (
            <>
            <GridFoods foods={food} />
            <Separator height={30} />
            <Pagination currentPage={pagination.page} totalPages={pagination.pageCount}/>
            </>
          ) : (
            <NoResult text={`La categoria ${pet.attributes.title} aun no tiene productos`} />
          )}

          <Separator height={100} />
        </Container>
      </BasicLayout>
    
    </>
  )
}
