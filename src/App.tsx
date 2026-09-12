import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import ExploreTechnology from "./components/Explore the Technologies/ExploreTechnology";
import Footer from "./components/Footer";
import type { ITechnology } from "./types/technologyTypes";

function App() {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [selectedStack, setSelectedStack] = useState<ITechnology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const res = await fetch("/data.json");
        const data: ITechnology[] = await res.json();
        setTechnologies(data);
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  const handleAddToStack = (technology: ITechnology) => {
    const alreadySelected = selectedStack.some((item) => item.id === technology.id);

    if (alreadySelected) {
      toast.error(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedStack((prev) => [...prev, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemoveFromStack = (technologyId: string) => {
    const removedItem = selectedStack.find((item) => item.id === technologyId);

    setSelectedStack((prev) => prev.filter((item) => item.id !== technologyId));

    if (removedItem) {
      toast.info(`${removedItem.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) {
      toast.info("Your stack is already empty.");
      return;
    }

    setSelectedStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <div>
      <Nav />
      <Banner />
      <ExploreTechnology
        technologies={technologies}
        loading={loading}
        selectedStack={selectedStack}
        onAddToStack={handleAddToStack}
        onRemoveFromStack={handleRemoveFromStack}
        onRemoveAll={handleRemoveAll}
      />
      <Footer />
    </div>
  );
}

export default App;
