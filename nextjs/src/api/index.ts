import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import Cookies from "js-cookie";
import camelcaseKeys from "camelcase-keys";
import type { AxiosResponse } from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL!
});

api.interceptors.request.use((config) => {
    const accessToken = Cookies.get("access_token");
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

const refreshAuthLogic = (failedRequest: any) => 
    api.post("/auth/refresh").then(tokenRefreshResponse => {
        const data = camelcaseKeys(tokenRefreshResponse.data) as { accessToken: string };
        Cookies.set("accessToken", data.accessToken);
        failedRequest.response.config.headers["Authorization"] = `Bearer ${data.accessToken}`;
        return Promise.resolve();
    })

// createAuthRefreshInterceptor(api, refreshAuthLogic);

export default api;