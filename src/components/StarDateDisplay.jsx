import React, { useEffect, useState } from 'react';

const getStarDate = () => {
    const now = new Date();
    const year = String(now.getFullYear()).slice(2); // '2025' → '25'
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    return {
        starDate: `${year}${month}${day}.${hour}`,      // → 250601.22
        fullDate: now.toLocaleString()                  // → Hover tooltip
    };
};

const StarDateDisplay = () => {
    const [starDate, setStarDate] = useState(getStarDate());

    useEffect(() => {
        const interval = setInterval(() => {
            setStarDate(getStarDate());
        }, 60 * 60 * 1000); // every hour

        return () => clearInterval(interval);
    }, []);

    return (
        <span title={starDate.fullDate}>
      StarDate {starDate.starDate}
    </span>
    );
};

export default StarDateDisplay;
