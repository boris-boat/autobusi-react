import moment from "moment";
import "./App.css";
import "moment/dist/locale/sr";
import { summer } from "./data/Summer/busScheduleSummer";
import { getTodayType } from "./utilFn/getDayType";
import { getDepartures } from "./utilFn/getDepartures";
import { useState } from "react";

function App() {
  moment.locale("sr");
  const [busTypeSelected,setBusTypeSelected]=useState({
    5:true,
    7:false
  })
  const allBussesData = summer[getTodayType()];
  const todaysDay = moment().format("dddd");
  const getDateType = todaysDay.charAt(0).toUpperCase() + todaysDay.slice(1);
  const isSelected = (buttonLabel:5 | 7) => {
    return Boolean(busTypeSelected[buttonLabel])
  }

  const filterFn = (allBusses) => {
    let filteredBusses = allBusses.filter((bus) => {
        return String(bus.bus).includes('5') && busTypeSelected[5] || String(bus.bus).includes('7') && busTypeSelected[7]
    });
    return filteredBusses
  };
  return (
    <div className="app-wrapper">
      <div className="date">{moment().format("lll")}</div>
      <div className="second-row">
        <button className={isSelected(5) ? "is-selected" : ""} onClick={() => {
          setBusTypeSelected((prev) => ({...prev,5:!prev[5]}) )
        }}>5*</button>
      <div className="date-type">{getDateType}</div>
        <button className={isSelected(7) ? "is-selected" : ""} onClick={() => {
          setBusTypeSelected((prev) => ({...prev,7:!prev[7]}) )
        }} >7*</button>
      </div>
      <div className="departures">
        {filterFn(getDepartures(allBussesData)).map((departure) => {
          return (
            <div className="departure" key={departure.bus + departure.time}>
              <span style={{ fontWeight: "bold" }}>{departure.bus}</span>
              <span>{departure.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
