import LeftSide from "./pages/LeftSide";
import RightSide from "./pages/RightSide";
import ScrollSpyProvider from "./components/ScrollSpyProvider";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <ScrollSpyProvider />

      <div className="mx-auto min-h-screen max-w-screen-xl pl-6 pr-6 py-12 font-sans md:pl-12 md:pr-12 md:py-20 lg:pl-0 lg:pr-6 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <LeftSide />

          <RightSide />
        </div>
      </div>
    </div>
  );
}
