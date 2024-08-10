import { i18nState } from "./store";

const getData = (state: i18nState) => state.data;
const setData = (state: i18nState) => state.setData;

export { getData, setData };
