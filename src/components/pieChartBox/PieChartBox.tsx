import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import  "./pieChartBox.scss";

const data = [
    {name: "Mobile", value:400, color: "#0088FE" },
    {name: "Desktop", value:300, color: "#00C49F" },
    {name: "Laptop", value:200, color: "#FFBB28" },
    {name: "Table", value:300, color: "#FF8042" },

];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
    <h1>Leads by Source</h1>
    <div className="chart">
      <ResponsiveContainer width="99%" height={300}>
        <PieChart>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item) => (
            <Cell 
            key={item.name}
             fill={item.color} />
          ))}
        </Pie>
      </PieChart>
      </ResponsiveContainer>
    </div>
    </div>
  )
}

export default PieChartBox