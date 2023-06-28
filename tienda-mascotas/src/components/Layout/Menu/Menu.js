import { useState, useEffect } from "react";
import { Image, Icon, Input } from "semantic-ui-react";
import styles from "./Menu.module.scss";

export default function Menu(props) {
    const { isOpenSearch } = props;
    const [platforms, setPlatforms] =useState(null);

    useEffect(() => {
        (async () => {
            try {
                // TODO. peticion...
            } catch (error) {
                console.error(error);
            }
        })()
    }, [])

  return (
    <div>
      
    </div>
  )
}
