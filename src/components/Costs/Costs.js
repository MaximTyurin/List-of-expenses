import './Costs.css';
import { useState } from 'react';
import CostsFilter from './CostsFilter';
import CostList from './CostList';
import Card from '../UI/Card';
import CostsDiagram from './CostsDiagram';

const Costs = ({ costs }) => {
    const [selectedYear, setSelectedYear] = useState('2020');
    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };

    const filtredCosts = costs.filter(
        (cost) => cost.date.getFullYear().toString() === selectedYear
    );

    return (
        <div>
            <Card className='costs'>
                <CostsFilter
                    year={selectedYear}
                    onChangeYear={yearChangeHandler}
                />
                <CostsDiagram costs={filtredCosts} />
                <CostList costs={filtredCosts} />
            </Card>
        </div>
    );
};

export default Costs;
