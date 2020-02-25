import React, { useState, useEffect, useCallback } from 'react'
import { Line } from 'react-chartjs-2'

import { mainChartData, mainChartOpts } from './costants'

const MainChart = ({ data, history }) => {
  const [state, setState] = useState(mainChartData)

  useEffect(() => {
    manageHistory()
  }, [])

  useEffect(() => {
    updateData({ ...state }, data)
  }, [data])

  const manageHistory = useCallback(() => {
    console.log('history')

    let data = { ...state }
    for (let x = 1; x < data.labels.length; x++) {
      let value1 = history.power[x]
      let value2 = history.cadence[x]
      let value3 = history.speed[x]
      let value4 = history.heartrate[x]

      if (value1 !== undefined) {
        data.datasets[0].data.push(value1)
        data.datasets[1].data.push(value2)
        data.datasets[2].data.push(value3)
        data.datasets[3].data.push(value4)
      } else {
        data.datasets[0].data.unshift(value1)
        data.datasets[1].data.unshift(value2)
        data.datasets[2].data.unshift(value3)
        data.datasets[3].data.unshift(value4)
      }
    }
    setState(data)
  }, [state])

  const updateData = useCallback(() => {
    let oldDataSet1 = state.datasets[0]
    let oldDataSet2 = state.datasets[1]
    let oldDataSet3 = state.datasets[2]
    let oldDataSet4 = state.datasets[3]

    let labels = state.labels
    /*let time = Math.round(data.Minutes * 100 * 60) / 100;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;*/

    let newData1 = []
    let newData2 = []
    let newData3 = []
    let newData4 = []

    for (let x = 1; x < labels.length; x++) {
      let value1 = oldDataSet1.data[x]
      let value2 = oldDataSet2.data[x]
      let value3 = oldDataSet3.data[x]
      let value4 = oldDataSet4.data[x]

      if (value1 !== undefined) {
        newData1.push(value1)
        newData2.push(value2)
        newData3.push(value3)
        newData4.push(value4)
      } else {
        newData1.unshift(value1)
        newData2.unshift(value2)
        newData3.unshift(value3)
        newData4.unshift(value4)
      }
    }

    labels.shift()
    labels.push('')

    newData1.push(data.power)
    newData2.push(data.cadence)
    newData3.push(data.speed)
    newData4.push(data.heartrate)

    setState({
      ...state,
      datasets: [
        {
          ...oldDataSet1,
          data: newData1,
        },
        {
          ...oldDataSet2,
          data: newData2,
        },
        {
          ...oldDataSet3,
          data: newData3,
        },
        {
          ...oldDataSet4,
          data: newData4,
        },
      ],
    })
  }, [state, data])

  return <Line data={state} options={mainChartOpts} />
}

export default MainChart
