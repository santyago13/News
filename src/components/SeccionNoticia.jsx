import CardNoticia from "./CardNoticia";

const SeccionNoticia = () => {
  return (
    <div className="mb-10 vidrio mx-15 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 place-items-center">
      <CardNoticia />
      <CardNoticia />
      <CardNoticia />
      <CardNoticia />
      <CardNoticia />
    </div>
  );
};

export default SeccionNoticia;
