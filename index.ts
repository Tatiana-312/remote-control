import { httpServer } from "./src/http_server/index";
import { mouse } from "@nut-tree/nut-js";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

process.on('SIGINT', () => {
    httpServer.close(() => process.exit());
});
