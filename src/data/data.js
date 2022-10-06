export const LinePrimaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Months',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    background: 'white',
  };
  
  export const LinePrimaryYAxis = {
    labelFormat: '{value}%',
    rangePadding: 'None',
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };

  export const lineChartData = [
  
    [
      { x: new Date(2022, 4, 1), y: 3.6 },
      { x: new Date(2022, 5, 1), y: 6.4 },
      { x: new Date(2022, 6, 1), y: 9.4 },
      { x: new Date(2022, 7, 1), y: 8.1 },
      { x: new Date(2022, 8, 1), y: 10 },
      { x: new Date(2022, 9, 1), y: 12.3 },
      { x: new Date(2022, 10, 1), y: 10.1 },
    ],
  ];

  export const lineCustomSeries = [
  
    { dataSource: lineChartData[0],
      xName: 'x',
      yName: 'y',
      name: 'Sales in L',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
  ];