import { ENV } from "@/utils";

export class Food {
  /* async getLastPublished() {
    try {
      const sort = "sort=publishedAt:desc";
      const pagination = "pagination[limit]=1";
      const populate = "populate=*";
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.FOOD}?${sort}&${pagination}&${populate}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  } */

  async getLatestPublished({ limit = 9, petId = null }) {
    try {
      const filterPet =
        petId && `filters[pet][id][$eq]=${petId}`;
      const paginationLimit = `pagination[limit]=${limit}`;
      const sort = `sort[0]=publishedAt:desc`;
      const populate = `populate=*`;
      const urlParams = `${sort}&${paginationLimit}&${filterPet}&${populate}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.FOOD}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getFoodByPetSlug(slug, page) {
    try {
      const filters = `filters[pet][slug][$eq]=${slug}`;
      const pagination = `pagination[page]=${page}&pagination[pageSize]=30`;
      const populate = "populate=*"
      const urlParams = `${filters}&${pagination}&${populate}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.FOOD}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if(response.status !== 200) throw result;

      return result;

    } catch (error) {
      throw error;
    }
  }

  async searchFood(text, page) {
    try {
      const filters = `filters[title][$contains]=${text}`;
      const pagination = `pagination[page]=${page}&pagination[pageSize]=30`;
      const populate = "populate=*";
      const urlParams = `${filters}&${pagination}&${populate}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.FOOD}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getBySlug(slug) {
    try {
      const filters = `filters[slug][$eq]=${slug}`;
      const populate = `populate[0]=cover&populate[1]=pet&populate[2]=pet.icon&populate[3]=gallery`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.FOOD}?${filters}&${populate}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result.data[0];
    } catch (error) {
      throw error;
    }
  }

  async getFoodById(id) {
    try {
      const populate = `populate[0]=cover&populate[1]=pet`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.FOOD}/${id}?${populate}`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}