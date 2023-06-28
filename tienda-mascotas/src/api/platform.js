import { ENV } from "@/utils";

export class Platform {
    async getAll() {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PLATFORM}?populate=icon`;
        }
    }
}