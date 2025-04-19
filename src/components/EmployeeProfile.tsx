
import { Mail, Phone, UserRound } from "lucide-react";
import Logo from "./Logo";

// Base de données temporaire des employés
const employeesDatabase = {
  "jean": {
    name: "Jean Dupont",
    position: "Ingénieur Solutions",
    department: "Direction Technique", 
    email: "jean.dupont@entreprise.com",
    phone: "+33 1 23 45 67 89"
  },
  "marie": {
    name: "Marie Laurent",
    position: "Directrice Marketing",
    department: "Direction Marketing", 
    email: "marie.laurent@entreprise.com",
    phone: "+33 1 98 76 54 32"
  },
  "default": {
    name: "Jean Dupont",
    position: "Ingénieur Solutions",
    department: "Direction Technique", 
    email: "jean.dupont@entreprise.com",
    phone: "+33 1 23 45 67 89"
  }
};

type EmployeeProfileProps = {
  employeeId?: string;
};

const EmployeeProfile = ({ employeeId }: EmployeeProfileProps) => {
  // Sélectionne l'employé en fonction de l'ID passé en paramètre ou utilise l'employé par défaut
  const employee = employeeId && employeesDatabase[employeeId] ? 
    employeesDatabase[employeeId] : 
    employeesDatabase["default"];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <Logo />
      
      <div className="text-center space-y-6">
        <div className="space-y-3">
          <div className="inline-block p-3 rounded-full bg-blue-100 mb-4">
            <UserRound className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-[#0FA0CE]">{employee.name}</h1>
          <p className="text-xl text-[#33C3F0] font-bold">{employee.position}</p>
          <p className="text-lg text-gray-500 font-bold">{employee.department}</p>
        </div>

        <div className="space-y-4 pt-6">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Mail className="w-5 h-5" />
            <a href={`mailto:${employee.email}`} className="hover:text-[#1EAEDB] transition-colors font-bold">
              {employee.email}
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Phone className="w-5 h-5" />
            <a href={`tel:${employee.phone}`} className="hover:text-[#1EAEDB] transition-colors font-bold">
              {employee.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
