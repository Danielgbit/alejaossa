import Button from "./Button";

const Reflection = ({children = "", textButton = ""}) => {
  return (
    <div className="my-60 flex flex-col items-center justify-center py-20  rounded-lg shadow-lg bg-reflection-01">
      <p className="text-4xl text-center tracking-paragraph text-dark-03 max-w-2xl mx-auto font-cormorant">
        {children}
      </p>
      <span className="my-10 font-lexend uppercase tracking-sub text-dark-04">-Albert</span>
      <Button className="button-01" children={textButton} />
    </div>
  );
};

export default Reflection;
