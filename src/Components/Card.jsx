import React from "react";

export default function Card() {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col Al">
          <div className="card h-150">
            <div className="card-body Al">
              <h6 className="card-title ">Basic</h6>
              <h4>300 Rs/per Month</h4>
              <div className="det">
                <ul>
                  <li>High Speed</li>
                  <li>100GB </li>
                  <li>10Mbps</li>
                  <li>udguif</li>
                  <li>uiuihf</li>
                </ul>
                <button type="button" class="btn btn-outline-success">
                  Veiw
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col Al">
          <div className="card h-150">
            <div className="card-body Al">
              <h6 className="card-title ">Intermediate</h6>
              <h4>300 Rs/per Month</h4>
              <div className="det">
                <ul>
                  <li>High Speed</li>
                  <li>Unlimited</li>
                  <li>50Mbps</li>
                  <li>ufhfuehrg</li>
                  <li>diuhfiufwf</li>
                </ul>
                <button type="button" class="btn btn-outline-success">
                  Veiw
                </button> 
              </div>  
            </div>
          </div>
        </div>
        <div className="col Al">
          <div className="card h-150">
            <div className="card-body Al">
              <h6 className="card-title ">Advance</h6>
              <h4>300 Rs/per Month</h4>
              <div className="det">
                <ul>
                  <li>High Speed</li>
                  <li>Unlimited</li>
                  <li>100Mbps</li>
                  <li>uhgfuieh</li>
                  <li>uhuefuf</li>
                </ul>
                <button type="button" class="btn btn-outline-success">
                 Veiw
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
