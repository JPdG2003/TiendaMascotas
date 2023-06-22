import { Container } from "semantic-ui-react";
import styles from "./BasicLayout.module.scss";

export default function BasicLayout(props) {
  const {
    children,
    isOpenSearch = false,
    isContainer = false,
    relative = false,
  } = props;

  return (
    <>
        {/* TODO: TopBar */}

        <Container fluid>
          {isContainer ? <Container>{children}</Container> : children }
          </Container>

        {/* TODO: Footer */}
    </>
  )
}
