import { create } from "zustand";
import { persist } from "zustand/middleware";
import camelcaseKeys from "camelcase-keys";
import snakecaseKeys from "snakecase-keys";
import api from "@/api";
import type { IBaseError } from "@/types/error";
import type { ICartItem, ICartSummary, ICartData } from "@/types/data";

interface ICartStore {
  isValid: boolean | null;
  isLoading: boolean;
  isError: boolean;
  error: IBaseError | null;
  data: ICartData | null;
  summary: ICartSummary | null;
  setData: (data: ICartData) => void;
  setSummary: (summary: ICartSummary) => void;
  getSummary: () => Promise<void>;
  getData: () => Promise<void>;
  postItem: (
    proxyProductId: number,
    quantity: number,
    generationParams: string
  ) => Promise<void>;
  updateItem: (
    itemId: number,
    quantity: number,
    generationParams: string
  ) => Promise<void>;
  deleteItem: (itemId: number) => Promise<void>;
  deleteData: () => Promise<void>;
  validateData: () => Promise<void>;
}

export const useCartStore = create<ICartStore>()(
  persist(
    (set, get) => ({
      isValid: null,
      isLoading: false,
      isError: false,
      error: null,
      data: null,
      summary: null,
      setData: (data) => set({ data }),
      setSummary: (summary) => set({ summary }),
      getSummary: async () => {
        try {
          set({ isLoading: true });

          const response = await api.get("/cart/summary");
          const data = camelcaseKeys(response.data);

          if ([200, 201].includes(response.status)) {
            set({ summary: data });
          } else {
            set({ isLoading: false, isError: true, error: data });
          }
        } catch (e) {
          // @ts-ignore
          set({ isLoading: false, isError: true, error: e?.response?.data });
        }
      },
      getData: async () => {
        try {
          set({ isLoading: true });

          const response = await api.get("/cart");
          const data = camelcaseKeys(response.data);

          if ([200, 201].includes(response.status)) {
            set({ data });
          } else {
            set({ isLoading: false, isError: true, error: data });
          }
        } catch (e) {
          // @ts-ignore
          set({ isLoading: false, isError: true, error: e?.response?.data });
        }
      },
      postItem: async (proxyProductId, quantity, generationParams) => {
        try {
          set({ isLoading: true });

          const response = await api.post(
            "/cart/items",
            snakecaseKeys({ proxyProductId, quantity, generationParams })
          );
          const data = camelcaseKeys(response.data);

          if ([200, 201].includes(response.status)) {
            if (!!get().data) {
              set((state) => {
                if (state.data) {
                  return {
                    data: {
                      ...state.data,
                      items: [...state.data.items, data],
                    },
                  };
                } else {
                  return { data: null };
                }
              });
            }
          } else {
            set({ isLoading: false, isError: true, error: data });
          }
        } catch (e) {
          // @ts-ignore
          set({ isLoading: false, isError: true, error: e?.response?.data });
        }
      },
      updateItem: async (itemId, quantity, generationParams) => {
        try {
          set({ isLoading: true });

          const response = await api.put(
            `/cart/items/${itemId}`,
            snakecaseKeys({ quantity, generationParams })
          );
          const data = camelcaseKeys(response.data);

          if ([200, 201].includes(response.status)) {
            set((state) => {
              if (state.data) {
                const updatedItemIdx = state.data.items.findIndex(
                  (item) => item.id === (data as ICartItem).id
                );
                return {
                  data: {
                    ...state.data,
                    items: [
                      state.data.items.slice(0, updatedItemIdx),
                      data,
                      state.data.items.slice(updatedItemIdx + 1),
                    ],
                  },
                };
              } else {
                return { data: null };
              }
            });
          } else {
            set({ isLoading: false, isError: true, error: data });
          }
        } catch (e) {
          // @ts-ignore
          set({ isLoading: false, isError: true, error: e?.response?.data });
        }
      },
      deleteItem: async (itemId) => {
        try {
          set({ isLoading: true });

          const response = await api.delete(`/cart/items/${itemId}`);
          const data = camelcaseKeys(response.data);

          if ([200, 201].includes(response.status) && data?.success) {
            set((state) => {
              if (state.data) {
                return {
                  data: {
                    ...state.data,
                    items: state.data.items.filter(
                      (item) => item.id !== itemId
                    ),
                  },
                };
              } else {
                return { data: null };
              }
            });
          } else {
            set({ isLoading: false, isError: true, error: data });
          }
        } catch (e) {
          // @ts-ignore
          set({ isLoading: false, isError: true, error: e?.response?.data });
        }
      },
      deleteData: async () => {
        try {
          set({ isLoading: true });

          const response = await api.delete("/cart");
          const data = camelcaseKeys(response.data);

          if ([200, 201].includes(response.status) && data?.success) {
            set({ data: null, summary: null });
          } else {
            set({ isLoading: false, isError: true, error: data });
          }
        } catch (e) {
          // @ts-ignore
          set({ isLoading: false, isError: true, error: e?.response?.data });
        }
      },
      validateData: async () => {
        try {
          set({ isLoading: true });

          const response = await api.delete("/cart");
          const data = camelcaseKeys(response.data);

          if ([200, 201].includes(response.status) && data?.success) {
            set({ isValid: true });
          } else {
            set({
              isValid: false,
              isLoading: false,
              isError: true,
              error: data,
            });
          }
        } catch (e) {
          set({
            isValid: false,
            isLoading: false,
            isError: true,
            // @ts-ignore
            error: e?.response?.data,
          });
        }
      },
    }),
    {
      name: "gemups-cart-storage",
    }
  )
);
