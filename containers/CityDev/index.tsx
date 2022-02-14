import { FC } from 'react';
import TabletMode from "./TabletMode";
import MobileMode from "./MobileMode";
import { useMediaQuery } from 'beautiful-react-hooks';
const CityDevelopment: FC = () => {
    const isTabletMode = useMediaQuery('(max-width: 768px)');
    return (
        <>
            {
                isTabletMode ? <TabletMode /> : <MobileMode />
            }
        </>
    );
};

export default CityDevelopment;
