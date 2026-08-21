import React from 'react';

function useStorageListener(sincronize) {
    const [storageChange, setStorageChange] = React.useState(false);

    React.useEffect(() => {
        const handleStorageChange = (change) => {
            if(change.key === 'TODOS_V1') {
                setStorageChange(true);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        }
    }, []);

    const toggleShow = () => {
        sincronize();
        setStorageChange(false);
    }

    return {
        show: storageChange,
        toggleShow,
    };
}

export { useStorageListener };