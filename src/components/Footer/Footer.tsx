import style from "../Footer/footer.module.scss";
export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div>
        <p>Colorizer Palette Generator - Made by Kasper Fryd</p>
        <p>Made possible by colormind.io palette API</p>
      </div>
    </footer>
  );
};
