const ButtonBar = () => {
  const buttons = ["All", "Live", "Music", "trending", "AI", "Motivation","Coding","All", "Live", "Music", "trending", "AI"];
  return (
    <div className="mt-2 ">
      {buttons.map((button, index) => {
        return <button className="m-1 p-1 px-2 mx-2 bg-slate-200 rounded-md text-xs" key={index}>{button}</button>;
      })}
    </div>
  );
};

export default ButtonBar;
