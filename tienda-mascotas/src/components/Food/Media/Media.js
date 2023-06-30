import { Container } from "semantic-ui-react";
import { Separator } from "@/components/Shared";
import { Gallery } from "./Gallery";

export function Media(props) {
    const { gallery } = props;
  return (
    <Container>
        <h2>Visuales</h2>
        <Separator height={30} />

        <Gallery gallery={gallery} />
    </Container>
  );
}
