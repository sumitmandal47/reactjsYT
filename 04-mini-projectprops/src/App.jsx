
// import Card from './components/Card';

import { Bookmark } from "lucide-react";
const App = () => {
 
  

  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkK_pyCBoxv8m5CJqGkrDHd7zxie4p9Ho2xdfWgF7UnIFPZWoNs5mQVgLauf3I7EzXK-o&usqp=CAU" />
          <button>
            Save <Bookmark size={18} />
          </button>
        </div>

        <div className="center">
          <h2>
            Amazon <span>5 Days ago</span>
          </h2>

          <p>junior developer UI/Ux desiner</p>
          <div className="tag">
            <h4>Full time</h4>
            <h4>Remote</h4>
          </div>
        </div>

        <div className="bottom ">
          <div>
            <h3>$200-250k</h3>
            <p>Munbai,India</p>
          </div>

          <button>Apply now</button>
        </div>
      </div>
      <div className="card">
        <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkK_pyCBoxv8m5CJqGkrDHd7zxie4p9Ho2xdfWgF7UnIFPZWoNs5mQVgLauf3I7EzXK-o&usqp=CAU" />
          <button>
            Save <Bookmark size={18} />
          </button>
        </div>

        <div className="center">
          <h2>
            Amazon <span>5 Days ago</span>
          </h2>

          <p>junior developer UI/Ux desiner</p>
          <div className="tag">
            <h4>Full time</h4>
            <h4>Remote</h4>
          </div>
        </div>

        <div className="bottom ">
          <div>
            <h3>$200-250k</h3>
            <p>Munbai,India</p>
          </div>

          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
}

export default App
