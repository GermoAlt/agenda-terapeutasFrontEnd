
const BringSessions = () => {
    const handleClick = () => {
        console.log("Button clicked");

        fetch("http://localhost:8080/api/v1/session", {
            method: "GET",
            headers: {
                // token
                // Authorization
            },
        })
            .then((res) => {
                if (!(res.status == 200)) {
                    throw new Error("Failed to bring sessions");
                }
                return res.json();
            })
            .then((data) => {
                console.log("Sessions received:", data);
                // You could use setState to display this data
            })
            .catch((err) => {
                console.error("Error bringing sessions:", err);
            });
    };

    return (
        <div>
            <button onClick={handleClick}>
                Todas las sesiones
            </button>
        </div>
    );
};

export default BringSessions;
