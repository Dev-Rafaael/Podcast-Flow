import { FilterPodCastModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcast-repository"
import { Status } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<FilterPodCastModel> =>{
      let responseFormat: FilterPodCastModel = {
          statusCode: 0,
          body: []
      }
    
    const data = await repositoryPodcast()

      responseFormat.statusCode = data.length !== 0 ? Status.OK : Status.NO_CONTENT;
  return responseFormat;
}