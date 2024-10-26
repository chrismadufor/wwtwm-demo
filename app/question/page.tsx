import AdBlock from "./components/AdBlock";
import AdminPanel from "./components/AdminPanel";
import OptionsBlock from "./components/OptionsBlock";
import PriceBlock from "./components/PriceBlock";

export default function QuestionsPage() {
  return (
    <main className="lg:h-screen lg:max-h-screen flex flex-col blue-bg">
      <div className="h-full flex">
        <div className="lg:h-full flex flex-col w-full">
          <AdBlock />
          <OptionsBlock />
        </div>
        <PriceBlock />
      </div>
      <AdminPanel />
    </main>
  );
}
