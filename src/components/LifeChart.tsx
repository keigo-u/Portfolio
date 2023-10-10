'use client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '年代別プログラミングモチベーション',
    },
  },
  layout: {
    padding: 40,
  },
};

const labels = [
  '小学4年生',
  '中学生',
  '高専1年生',
  '高専2年生',
  '高専3年生',
  '高専4年生',
  '高専5年生',
  '大学3年生',
  '現在',
];

export const data = {
  labels,
  datasets: [
    {
      label: 'keigo-u',
      data: [20, 10, 40, 50, 50, 45, 40, 85, 100],
    },
  ],
};

const LifeChart = () => {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default LifeChart;
