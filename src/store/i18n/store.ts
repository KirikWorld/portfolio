import { create } from "zustand";

type JSONLang = Record<string, string>;

export type i18nState = {
  data: Record<string, JSONLang>;
  setData: (data: Record<string, JSONLang>) => void;
};

const useI18n = create<i18nState>((set) => ({
  data: {},
  setData: (data: Record<string, JSONLang>) => set({ data })
}));

export default useI18n;
