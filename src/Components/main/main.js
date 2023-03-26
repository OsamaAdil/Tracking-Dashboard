import React, { useState } from "react";

const Main = () => {
  const [flagDaily, setFlagDaily] = useState(false);
  const [flagWeekly, setFlagWeekly] = useState(true);
  const [flagMonthly, setFlagMonthyl] = useState(false);

  let data = require("../../data.json");

  const clickDaily = () => {
    setFlagDaily(true);
    setFlagWeekly(false);
    setFlagMonthyl(false);
  };

  const clickWeekly = () => {
    setFlagDaily(false);
    setFlagWeekly(true);
    setFlagMonthyl(false);
  };

  const clickMonthly = () => {
    setFlagDaily(false);
    setFlagWeekly(false);
    setFlagMonthyl(true);
  };

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <>
      <div className="mainWrap flex-row">
        <div className="boxLef flex-col">
          <div className="flex-col">
            <div> </div>
            <div>
              <span id="report">Report for </span> <br /> Jeremy Robson
            </div>
          </div>
          <div>
            <ul>
              <li>
                <button type="button" onClick={() =>  {clickDaily(); handleClick()}} 
                style = {{color: flagDaily ? "white" : "hsl(235, 45%, 61%)" }}
                >
                  Daily 
                </button>
              </li>
              <li>
                <button type="button" onClick={() => clickWeekly()}
                style = {{color: flagWeekly ? "white" : "hsl(235, 45%, 61%)" }}
                >
                  Weekly
                </button>
              </li>
              <li>
                <button type="button" onClick={() => clickMonthly()}
                style = {{color: flagMonthly ? "white" : "hsl(235, 45%, 61%)" }}
                >
                  Monthly
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="boxRig">
          {data.map((e, i) => (
            <div
              className="gridBox"
              style={{
                backgroundColor: data[i].bgclr,
                backgroundImage: "url(" + `icon${i + 1}.svg` + ")",
              }}
            >
              <div>
                <div>
                  <span>{e.title}</span>
                  <img src={`./icon-ellipsis.svg`} />
                </div>

                {flagDaily && <div> {e.timeframes.daily.current}hrs</div>}
                {flagWeekly && <div> {e.timeframes.weekly.current}hrs</div>}
                {flagMonthly && <div> {e.timeframes.monthly.current}hrs</div>}

                {flagDaily && <div> Last Day - {e.timeframes.daily.previous}hrs</div>}
                {flagWeekly && <div> Last Week - {e.timeframes.weekly.previous}hrs</div>}
                {flagMonthly && <div> Last Month - {e.timeframes.monthly.previous}hrs</div>}

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
