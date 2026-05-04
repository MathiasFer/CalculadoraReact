import Button from "../atoms/Button";
import { SCREENS, type Screen } from "../../types/screen";

type Props = {
  goTo: (screen: Screen) => void;
};

const Menu = ({ goTo }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4">

      <Button
        text="Simple Calculator"
        onClick={() => goTo(SCREENS.SIMPLE)}
      />

      <Button
        text="Calculator"
        onClick={() => goTo(SCREENS.CALCULATOR)}
      />

      <Button
        text="Search Anime"
        onClick={() => goTo(SCREENS.ANIME)}
      />

    </div>
  );
};

export default Menu;