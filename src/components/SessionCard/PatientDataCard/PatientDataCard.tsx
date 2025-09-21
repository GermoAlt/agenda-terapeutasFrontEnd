import "./PatientDataCard.css";

interface PatientDataCardProps {
  patient: {
    name: string;
    age: number;
    patientSince: Date;
  };
}

export const PatientDataCard: React.FC<PatientDataCardProps> = ({
  patient,
}) => {
  return (
    <div className="patient-data-container">
      <p>Patient name: {patient.name} </p>
      <p>Age: {patient.age} </p>
      <p>Patient since: {patient.patientSince.toLocaleDateString()} </p>
    </div>
  );
};
