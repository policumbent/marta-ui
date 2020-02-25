import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'

import {
  cardChartData1,
  cardChartData2,
  cardChartData3,
  cardChartData4,
  cardChartOpts1,
  cardChartOpts2,
  cardChartOpts3,
  cardChartOpts4,
} from './costants'

const CardChart = ({ state, value, data, history, opts }) => {
  const [line, setLine] = useState(state)

  useEffect(() => {
    manageHistory({ ...line }, history, value)
  }, [])

  useEffect(() => {
    updateLine({ ...line }, value, data)
  }, [data])

  const manageHistory = (data, chart, str) => {
    for (let x = 1; x < line.labels.length; x++) {
      let value = chart[str][x]

      if (value !== undefined) {
        data.datasets[0].data.push(value)
      } else {
        data.datasets[0].data.unshift(value)
      }
    }
    setLine(data)
  }

  const updateLine = (line, str, data) => {
    let oldDataSet = line.datasets[0]
    let labels = line.labels
    let newData = []

    for (let x = 1; x < labels.length; x++) {
      let value = oldDataSet.data[x]

      if (value !== undefined) {
        newData.push(value)
      } else {
        newData.unshift(value)
      }
    }

    labels.shift()
    labels.push('')

    let value = data[str]
    newData.push(value)

    setLine({
      ...line,
      datasets: [
        {
          ...oldDataSet,
          data: newData,
        },
      ],
    })
  }

  return <Line data={line} options={opts} />
}

const PowerCard = ({ data, history }) => {
  return (
    <CardChart
      state={cardChartData1}
      opts={cardChartOpts1}
      value="power"
      data={data}
      history={history}
    />
  )
}

const CadenceCard = ({ data, history }) => {
  return (
    <CardChart
      state={cardChartData2}
      opts={cardChartOpts2}
      value="cadence"
      data={data}
      history={history}
    />
  )
}

const SpeedCard = ({ data, history }) => {
  return (
    <CardChart
      state={cardChartData3}
      opts={cardChartOpts3}
      value="speed"
      data={data}
      history={history}
    />
  )
}

const HRCard = ({ data, history }) => {
  return (
    <CardChart
      state={cardChartData4}
      opts={cardChartOpts4}
      value="heartrate"
      data={data}
      history={history}
    />
  )
}

export { CardChart, CadenceCard, PowerCard, SpeedCard, HRCard }
