const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <h2 style={styles.logo}>Agenda de Terapeutas</h2>
            <ul style={styles.navList}>
                <li><a href="/">Home</a></li>
                <li><a href="/sessions">Sessions</a></li>
                <li><a href="/therapists">Therapists</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1976d2',
        padding: '10px 20px',
        color: 'white',
    },
    logo: {
        margin: 0,
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        gap: '15px',
        margin: 0,
        padding: 0,
    },
};

export default Navbar;