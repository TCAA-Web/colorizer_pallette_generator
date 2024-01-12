import { useEffect, useState } from "react";
import { ColorCardGrid } from "../../components/ColorCardGrid/ColorCardGrid";
import { Button } from "../../components/Button/Button";
import style from "./UserPage.module.scss";
export const UserPage = () => {
  const [userPalettes, setUserPalettes] = useState<Array<Array<string>> | null>(
    null
  );

  useEffect(() => {
    if (localStorage.getItem("userPalette")) {
      setUserPalettes(JSON.parse(localStorage.getItem("userPalette")!));
    }
    // Get items from localstorage
  }, []);

  console.log(userPalettes);

  const handleSetActive = () => {
    console.log("ACTIVE");
  };

  const handleDelete = () => {
    console.log("DELETE");
  };

  return (
    <section>
      {userPalettes?.map((palette) => {
        return (
          <div className={style.paletteGrid}>
            <ColorCardGrid hexColors={palette} />
            <div className={style.innerGrid}>
              <Button
                title={"Set active"}
                gradient={"#222"}
                clickHandler={handleSetActive}
              />
              <Button
                title={"Delete"}
                gradient={"333"}
                clickHandler={handleDelete}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};
