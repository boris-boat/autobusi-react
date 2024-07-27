import moment from "moment";
import "./App.css";
import "moment/dist/locale/sr";
import { summer } from "./data/Summer/busScheduleSummer";
import { getTodayType } from "./utilFn/getDayType";
import { getDepartures } from "./utilFn/getDepartures";

function App() {
  moment.locale("sr");
  const allBussesData = summer[getTodayType()];
  const todaysDay = moment().format("dddd");
  const getDateType = todaysDay.charAt(0).toUpperCase() + todaysDay.slice(1);

  return (
    <div className="app-wrapper">
      <div className="date">{moment().format("lll")}</div>
      <div className="date-type">{getDateType}</div>
      <div className="departures">
        {getDepartures(allBussesData).map((departure) => {
          return (
            <div className="departure" key={departure.time}>
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
