
import { Mail, Phone, UserRound } from "lucide-react";
import Logo from "./Logo";

const EmployeeProfile = () => {
  const employee = {
    name: "Jean Dupont",
    position: "Ingénieur Solutions",
    department: "Direction Technique",
    email: "jean.dupont@entreprise.com",
    phone: "+33 1 23 45 67 89"
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <Logo />
      
      <div className="text-center space-y-6">
        <div className="space-y-3">
          <div className="inline-block p-3 rounded-full bg-blue-100 mb-4">
            <UserRound className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">{employee.name}</h1>
          <p className="text-xl text-gray-600">{employee.position}</p>
          <p className="text-lg text-gray-500">{employee.department}</p>
        </div>

        <div className="space-y-4 pt-6">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Mail className="w-5 h-5" />
            <a href={`mailto:${employee.email}`} className="hover:text-blue-600 transition-colors">
              {employee.email}
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Phone className="w-5 h-5" />
            <a href={`tel:${employee.phone}`} className="hover:text-blue-600 transition-colors">
              {employee.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
