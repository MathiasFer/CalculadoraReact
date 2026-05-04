import Menu from "../components/molecules/Menu";
import { type Screen } from "../types/screen";

type Props = {
  goTo: (screen: Screen) => void;
};

const HomePage = ({ goTo }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">

      <h1 className="text-3xl font-bold mb-6">
        Home
      </h1>

      <Menu goTo={goTo} />

    </div>
  );
};

export default HomePage;