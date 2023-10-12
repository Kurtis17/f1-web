const QualifyingDetails = ({
  position,
  number,
  driver,
  team,
  q1,
  q2,
  q3,
  laps,
  row,
}) => {
  return (
    <div
      className={`flex text-xs py-4 hover:bg-[#e10600]/50 ${
        row % 2 === 1 ? "bg-[#f4f4f4]" : ""
      }`}
    >
      <h3 className="w-[8%] pl-4">{position}</h3>
      <h3 className="w-[8%]">{number}</h3>
      <h3 className="w-[20%]">{driver}</h3>
      <h3 className="w-[27%] uppercase">{team}</h3>
      <h3 className="w-[10%]">{q1}</h3>
      <h3 className="w-[10%]">{q2}</h3>
      <h3 className="w-[10%]">{q3}</h3>
      <h3 className="w-[7%]">{laps}</h3>
    </div>
  );
};

export default QualifyingDetails;
