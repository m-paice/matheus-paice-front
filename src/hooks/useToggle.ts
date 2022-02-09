import { useState, useCallback } from "react";

export default (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const toggle = useCallback(() => setIsOpen((prevState) => !prevState), []);
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const set = useCallback((value) => setIsOpen(value), []);

    return {
        isOpen,
        isActive: isOpen,
        toggle,
        open,
        close,
        set,
    };
};
