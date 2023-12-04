import React from 'react';
import TableContainer from './components/Table/TableContainer';
import LineChart from './components/Charts/LineChart';
import PieChart from './components/Charts/PieChart';
import ComparisonSelector from './components/Comparison/ComparisonSelector';
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <h1>Dashboard for Sales Analysis</h1>
      <TableContainer />
      <div className="chart-container">
        <LineChart />
        <PieChart />
      </div>
      <ComparisonSelector />
    </div>
  );
}

export default App;