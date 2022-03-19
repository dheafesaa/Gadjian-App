import meet from "../assets/img/meet.jpg";

export default function DailyAttendance() {
  return (
    <>
      <div className="bg-white m-6">
        <div className="py-6 px-8 border-t border-gray-200 flex flex-col items-center">
          <div className="text-tosca-100 font-bold text-3xl uppercase">
            Daily Attendance
          </div>
          <img src={meet} alt="..." />
        </div>
      </div>
    </>
  );
}
