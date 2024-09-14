// import TabsDemo from "@/components/example/tabs-demo";

import Main from "@/components/main/main";

export default function Home() {
  return (
    <div className="  dark:bg-black bg-black  dark:bg-grid-white/[0.7] bg-grid-white/[0.2] relative ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black  "></div>
      <Main />;
    </div>
  );
}
