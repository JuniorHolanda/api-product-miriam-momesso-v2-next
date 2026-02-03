import 'dotenv/config';
import app from "./src/app.ts";
import connectDb from "./src/config/db.ts";

const PORT = 8000;

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

