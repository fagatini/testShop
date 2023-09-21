import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./store";

export const appSelector: TypedUseSelectorHook<RootState> = useSelector;