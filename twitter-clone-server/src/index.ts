import { initServer } from "./app";

/**
 * init: Application Loader
 */

async function init() {
    const app = await initServer();
    app.listen(8000, () => console.log("Server Started At POT : 8000"));
}

init();
