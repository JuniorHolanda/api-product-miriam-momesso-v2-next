import 'dotenv/config';
import app from "./app.js";
import connectDb from "./config/db.js";

const PORT = process.env.PORT || 3000;

async function start() {
    try {
        await connectDb();

        app.listen(PORT, () => {
            console.log(`servidor escutando na porta ${PORT}`);
        });

    } catch (error) {
        console.log(`erro ao conectar a aplicação ${error}`)
    }
}

start()

