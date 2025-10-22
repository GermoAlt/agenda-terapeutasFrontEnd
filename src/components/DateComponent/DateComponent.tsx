import "./DateComponent.css";

interface DateComponentProps {
  date: Date;
}

export const DateComponent: React.FC<DateComponentProps> = (
  props: DateComponentProps
) => {
  return (
    <div className="date-component-container">
      <p>
        {props.date.toLocaleDateString(undefined, {
          month: "short", // Muestra el mes en su forma corta (ej: "Jan", "Feb")
          day: "2-digit", // Muestra el día con dos dígitos (ej: "01", "15")
          year: "numeric", // Muestra el año con cuatro dígitos (ej: "2023")
        })}
      </p>
    </div>
  );
};
