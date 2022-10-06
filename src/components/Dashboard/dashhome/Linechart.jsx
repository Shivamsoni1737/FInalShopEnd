import React from 'react'
import{ChartComponent, SeriesCollectionDirective, SeriesDirective,LineSeries, Inject, DateTime, Legend, Tooltip} from '@syncfusion/ej2-react-charts';
import {lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis} from "../../../data/data"

const Linechart = () => {
  return (
    <div>
      <ChartComponent
        id="line-chart"
        height='420px'
        primaryXAxis={LinePrimaryXAxis}
        chartArea={{border:{width: 0}}}
        tooltip={{enable:true}}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
            {
                lineCustomSeries.map((item, index) =>
                <SeriesDirective key={index} {...item} />
                )
            }
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Linechart
