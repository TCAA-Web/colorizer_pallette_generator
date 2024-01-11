import style from "../Footer/footer.module.scss";
export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div>
        <p>Colorizer Tool - Made by KasperFryd</p>
        <p>Made possible by colormind.io pallette API</p>
      </div>
    </footer>
  );
};
