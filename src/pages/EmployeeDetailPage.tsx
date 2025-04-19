
import { useParams } from "react-router-dom";
import EmployeeProfile from "@/components/EmployeeProfile";

const EmployeeDetailPage = () => {
  const { employeeId } = useParams();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <EmployeeProfile employeeId={employeeId} />
    </div>
  );
};

export default EmployeeDetailPage;
