import Button from "./Button";

const Reflection = () => {
  return (
    <div className="my-50 flex flex-col items-center justify-center py-20  rounded-lg shadow-lg bg-reflection-01">
      <p className="text-4xl text-center tracking-paragraph max-w-2xl mx-auto font-cormorant">
        La reflexión es un proceso esencial en el camino hacia la sanación. Nos
        permite mirar hacia adentro.
      </p>
      <span className="my-10 font-lexend uppercase tracking-sub">-Albert</span>
      <Button children="CONSULTAR AGENDA" />
    </div>
  );
};

export default Reflection;
