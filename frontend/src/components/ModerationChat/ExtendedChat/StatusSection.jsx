const StatusSection = () => {
  return (
    <div className="bg-white p-6 w-[25%] mr-auto">
      <div className="flex items-center w-full mb-4 border-b-[1px] border-gray-300 pb-2">
        <span className="text-gray-700 font-semibold">На рассмотрении</span>
        <input
          type="radio"
          name="status"
          className="mr-2 ml-auto custom-radio"
          checked
        />
      </div>
      <div className="flex items-center mb-4 w-full border-b-[1px] border-gray-300 pb-2">
        <span className="text-gray-700 font-semibold">Закрыто</span>
        <input
          type="radio"
          name="status"
          className="mr-2 ml-auto custom-radio"
        />
      </div>
      <div className="flex items-center w-full mb-4 pb-2">
        <span className="text-gray-700 font-semibold">
          Запрашиваю подробности
        </span>
        <input
          type="radio"
          name="status"
          className="mr-2 ml-auto custom-radio"
        />
      </div>
    </div>
  );
};

export default StatusSection;
