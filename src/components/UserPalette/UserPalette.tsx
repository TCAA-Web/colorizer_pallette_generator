interface UserPaletteInterface {
  palette: Array<string>;
}
export const UserPalette = ({ palette }: UserPaletteInterface) => {
  console.log(`UserPalette`, palette);
  return <div>Palette</div>;
};
