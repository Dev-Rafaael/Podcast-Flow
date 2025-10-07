import * as http from "http";
import { getListEpisodes } from "./controllers/podcasts-controller";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const [baseUrl,queryString] =  req.url?.split("?") ?? ["",""]

    if (req.method === "GET" && baseUrl === "api/list") {
      await getListEpisodes(req, res);
    }
    if (req.method === "GET" && baseUrl === "api/episode") {
      await getListEpisodes(req, res);
    }
  
  }
);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`SERVIDOR RODANDO NA PORTA ${port}`);
});
