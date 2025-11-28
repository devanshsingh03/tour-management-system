import HologramViewer from "./HologramPreview";

const HologramDemo = ({ title, model }) => {
  return (
    <div className="pt-24 pb-20 flex flex-col items-center">
      <h1 className="text-3xl font-bold">{title} Holographic Tour Demo</h1>
      <p className="mt-2 text-gray-300 text-center w-[60%]">
        Rotate, zoom, or activate AR mode to experience a next-gen holographic travel preview.
      </p>

      <div className="mt-10 w-[350px] h-[400px]">
        <HologramViewer modelPath={model} />
      </div>

      <div className="flex gap-3 mt-6">
        <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 rounded-xl text-black">
          Explore More Holograms
        </button>
        <button className="px-4 py-2 rounded-xl border border-gray-600">
          Related Tour Destinations
        </button>
      </div>
    </div>
  );
};

export default HologramDemo;
