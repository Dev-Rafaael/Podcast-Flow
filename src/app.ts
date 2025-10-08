import * as http from "http";
import { getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { Methods } from "./utils/http-methods";

export const app =   async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const baseUrl =  req.url?.split("?")[1]

    if (req.method === Methods.GET && baseUrl === Routes.LIST) {
      await getListEpisodes(req, res);
    }
    if (req.method === Methods.GET && baseUrl === Routes.EPISODE) {
      await getListEpisodes(req, res);
    }
  
  }