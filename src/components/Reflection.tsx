import Button from "./Button";

const Reflection = ({ children = "", textButton = "" }) => {
  return (
    <div
      className="my-20 md:my-40 lg:my-60 flex flex-col items-center justify-center 
                py-10 md:py-16 lg:py-20 px-4 rounded-lg shadow-lg bg-reflection-01"
    >
      {/* Texto principal */}
      <p
        className="text-lg md:text-2xl lg:text-4xl text-center tracking-paragraph 
                 text-dark-03 max-w-2xl mx-auto font-cormorant"
      >
        {children}
      </p>

      {/* Autor */}
      <span className="my-6 md:my-8 lg:my-10 font-lexend uppercase tracking-sub text-dark-04">
        -Albert
      </span>

      {/* Botón */}
      <Button className="button-01" children={textButton} />
    </div>
  );
};

export default Reflection;
