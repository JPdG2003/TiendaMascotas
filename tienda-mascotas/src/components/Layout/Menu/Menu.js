import { useState, useEffect } from "react";
import { ENV } from "@/utils";
import { Image, Icon, Input } from "semantic-ui-react";
import { map } from "lodash";
import classNames from "classnames";
import Link from "next/link";
import { Pet } from "@/api";
import styles from "./Menu.module.scss";

const petCtrl = new Pet();

export function Menu(props) {
    const { isOpenSearch } = props;
    const [pets, setPets] =useState(null);
    const [showSearch, setShowSearch] = useState(false);

    const openCloseSearch = () => setShowSearch(prevState => !prevState); 

    useEffect(() => {
        (async () => {
            try {
                const response = await petCtrl.getAll();
                setPets(response.data);
            } catch (error) {
                console.error(error);
            }
        })()
    }, [])

  return (
    <div className={styles.pets}>
      {map(pets, (pet) => (
        <Link key={pet.id} href={`/foods/${pet.attributes.slug}`}>
            <Image src={`${ENV.SERVER_HOST}${pet.attributes.icon.data.attributes.url}`}
            alt= {pet.attributes.title}/>
            {pet.attributes.title}
        </Link>
      ))}


      <button className={styles.search} onClick={openCloseSearch}>
      <Icon name="search" />
      </button>

      <div className={classNames(styles.inputContainer, {
        [styles.active]: showSearch,                                           
      })}> 
        <Input id="search-foods" placeholder="Buscador" className={styles.input} focus={true}/>
        <Icon name="close" className={styles.closeInput} onClick={openCloseSearch} />
      </div>

    </div>

    
  )
}
