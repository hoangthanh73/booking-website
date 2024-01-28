import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import './DateRangeEl.css';

const RangeEl = (props) => {
    // 
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: "selection"
        }
    ]);
    return (
        <div className={`daterange-wrapper ${props.isHidden && 'hidden'}`}>
            <DateRange
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                className="date"
                minDate={new Date()}
                onChange={(item) => setState([item.selection])}
                ranges={state}
            />
        </div>
    );
};

export default RangeEl;