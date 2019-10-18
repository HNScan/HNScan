//Credit: https://github.com/donavon/use-persisted-state
import { useState, useEffect, useRef } from "react";
import useEventListener from "./useEventListener";
import useLocalStorage from "./useLocalStorage";

const globalState = {};

const createGlobalState = (key, thisCallback, initialValue) => {
  if (!globalState[key]) {
    globalState[key] = { callbacks: [], value: initialValue };
  }
  globalState[key].callbacks.push(thisCallback);
  return {
    deregister() {
      const arr = globalState[key].callbacks;
      const index = arr.indexOf(thisCallback);
      if (index > -1) {
        arr.splice(index, 1);
      }
    },
    emit(value) {
      if (globalState[key].value !== value) {
        globalState[key].value = value;
        globalState[key].callbacks.forEach(callback => {
          if (thisCallback !== callback) {
            callback(value);
          }
        });
      }
    }
  };
};

export default function usePersistedState(key, initialValue) {
  const globalState = useRef(null);
  const [savedState, setSavedState] = useLocalStorage(key, initialValue);
  const [state, setState] = useState(savedState);

  // subscribe to `storage` change events
  useEventListener("storage", ({ key: k, newValue }) => {
    if (k === key) {
      const newState = JSON.parse(newValue);
      if (state !== newState) {
        setState(newState);
      }
    }
  });

  // only called on mount
  useEffect(() => {
    // register a listener that calls `setState` when another instance emits
    globalState.current = createGlobalState(key, setState, initialValue);

    return () => {
      globalState.current.deregister();
    };
  }, [initialValue, key]);

  // Only persist to storage if state changes.
  useEffect(() => {
    // persist to localStorage
    setSavedState(state);

    // inform all of the other instances in this tab
    globalState.current.emit(state);
  }, [key, setSavedState, state]);

  return [state, setState];
}
