import app from "./src/app.ts";

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`servidor escutando na porta ${PORT}`);
});