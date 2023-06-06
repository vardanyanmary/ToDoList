import { useState, useEffect } from "react";
import { LOCALSTORAGE_KEYS } from "../constants/localStorage";

type useLocalStorageReturnType<Type> = [Type, React.Dispatch<React.SetStateAction<Type>>]

function useLocalStorage<Type>(key: LOCALSTORAGE_KEYS, defaultValue: Type):useLocalStorageReturnType<Type> {
    const [value, setValue] = useState<Type>(() => {
        
        let currentValue;

        try {
            currentValue = JSON.parse(
                localStorage.getItem(key) || String(defaultValue)
            );
        } catch (error) {
            currentValue = defaultValue;
        }

        return currentValue;
    });

    useEffect(() => {        
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
};

export default useLocalStorage;