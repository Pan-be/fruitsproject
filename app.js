import { connect } from 'mongoose';

// Adres lokalnego serwera MongoDB
const mongoURI = 'mongodb://localhost:27017/twoja_nazwa_bazy_danych';

// Opcje połączenia (opcjonalne, możesz dostosować według potrzeb)
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Funkcja do łączenia z bazą danych
async function connectToDatabase() {
    try {
        await connect(mongoURI, options);
        console.log('Połączono z bazą danych MongoDB.');
        // Tutaj możesz umieścić kod dotyczący interakcji z bazą danych
    } catch (error) {
        console.error('Błąd połączenia z bazą danych:', error.message);
    }
}

// Wywołanie funkcji do łączenia z bazą danych
connectToDatabase();
