import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - X-Store`;
        } else {
            document.title = 'X-Store | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
