import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator, BarTrust, Seo } from "@/components/Shared";

export default function HomePage() {
  return (

    <>
      <Seo title="Home" />

      <BasicLayout>

        <Separator height={500} />

        <Container>
          <Home.LatestFoods title="Ultimas publicaciones" />
        </Container>

        <Separator height={100} />

        <BarTrust />

        <Separator height={100} />
      </BasicLayout>
    </>
      

  );
}
