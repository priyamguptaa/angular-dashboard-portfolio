import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridsterModule, GridsterConfig, GridsterItem } from 'angular-gridster2';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, GridsterModule, NgChartsModule, MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  options: GridsterConfig = {
    draggable: { enabled: true },
    resizable: { enabled: true },
    pushItems: true,
    gridType: 'fixed',
    margin: 12,
    // outerMargin: true,
    // minCols: 6,
    // maxCols: 6,
    // minRows: 4,
    // maxRows: 6,
    defaultItemCols: 2,
  };

  dashboard: Array<GridsterItem & { chart: string }> = [
    { cols: 2, rows: 1, y: 0, x: 0, chart: 'line' },
    { cols: 2, rows: 1, y: 0, x: 2, chart: 'bar' },
    { cols: 1, rows: 1, y: 0, x: 4, chart: 'pie' },
    { cols: 3, rows: 1, y: 1, x: 0, chart: 'radar' },
    { cols: 2, rows: 1, y: 1, x: 3, chart: 'doughnut' }
  ];

  kpis = [
    { title: 'Revenue', value: '$12,500', change: '+8.5%', color: '#009688' },
    { title: 'Active Users', value: '3,420', change: '+3.2%', color: '#26a69a' },
    { title: 'Conversion Rate', value: '4.5%', change: '-0.5%', color: '#ef5350' },
    { title: 'Bounce Rate', value: '32%', change: '+1.1%', color: '#ffa726' }
  ];

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { size: 12 },
          color: '#009688'
        }
      }
    },
    scales: {
      x: {
        grid: { color: '#e0f7fa' },
        ticks: { color: '#009688' }
      },
      y: {
        grid: { color: '#e0f7fa' },
        ticks: { color: '#009688' }
      }
    }
  };

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        data: [100, 200, 150, 250],
        label: 'Orders',
        borderColor: '#009688',
        backgroundColor: 'rgba(0, 150, 136, 0.2)',
        fill: true,
        tension: 0.3
      }
    ]
  };

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      { data: [5000, 10000, 7500, 12000], label: 'Revenue ($)', backgroundColor: '#26a69a' }
    ]
  };

  pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Admin', 'User', 'Manager'],
    datasets: [
      {
        data: [10, 70, 20],
        backgroundColor: ['#009688', '#4db6ac', '#b2dfdb']
      }
    ]
  };

  radarChartData: ChartConfiguration<'radar'>['data'] = {
    labels: ['Quality', 'Speed', 'UX', 'Reliability'],
    datasets: [
      {
        data: [90, 80, 70, 85],
        label: 'Team A',
        backgroundColor: 'rgba(0, 150, 136, 0.2)',
        borderColor: '#009688',
        pointBackgroundColor: '#009688'
      }
    ]
  };

  doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Completed', 'Pending', 'Failed'],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: ['#009688', '#4db6ac', '#e0f7fa']
      }
    ]
  };

  multiLineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [120, 200, 180, 300, 250, 400],
        label: '2024',
        borderColor: '#009688',
        backgroundColor: 'rgba(0,150,136,0.1)',
        fill: true,
        tension: 0.3
      },
      {
        data: [100, 150, 160, 280, 220, 350],
        label: '2023',
        borderColor: '#80cbc4',
        backgroundColor: 'rgba(128,203,196,0.1)',
        fill: true,
        tension: 0.3
      }
    ]
  };

  ngOnInit() {
    console.log('Dashboard initialized');
  }
}
