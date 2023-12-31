import { useState } from "react";


export default function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const localStorageState = localStorage.getItem(key);

        if (localStorageState) {
            return JSON.parse(localStorageState);
        }

        return defaultValue;
    });
    const setBrowserState = (value) => {
        setState(value);
        let serialValue;

        if (typeof value === 'function') {
            serialValue = JSON.stringify(value(state));
        } else {
            serialValue = JSON.stringify(value);
        }
        localStorage.setItem(key, serialValue);
    };
    return [
        state,
        setBrowserState
    ];

}