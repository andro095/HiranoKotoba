// React Libraries

// Third Party Libraries
import { useSelector, TypedUseSelectorHook } from "react-redux";

// Interfaces

// Hooks

// Store
import { RootState } from "@store";

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;