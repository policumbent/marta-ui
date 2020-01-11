import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import { CardState, CardVideo, CardRasp, CardSettings } from './Cards'

class Bike extends Component {
  _isMounted = false

  constructor(props) {
    super(props)

    this.state = {
      settings: {
        dest: '0',
        type: '3',
        circonferenza: '450',
        run: '4',
        log: true,
        csv: false,
        ant: true,
        potenza: '18',
        led: '7',
        p13: false,
        led_mode: '7',
        circumference: '5',
        calibration: true,
        calibration_value: '14',
        update: '12:00:00_01:01',
      },
      state: {
        dest: '0',
        type: '1',
        log: true,
        video: false,
        ant: true,
        video_running: false,
        video_recording: false,
        powermeter_running: false,
        heartrate_running: false,
        speed_running: true,
        calibration: false,
      },
      visible: false,
      visible_video: false,
      visible_rasp: false,
    }
  }

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  reloadStatus(data) {
    if (data !== undefined) {
      let newValue
      if (data.type === '7') {
        newValue = {
          ...this.state.state,
          video_recording: data.value,
        }
        this.setState({ state: newValue })
      }
      if (data.type === '3') {
        newValue = data
        this.setState({ settings: newValue })
      }
    }
  }

  updateView = data => {
    this.reloadStatus(data)
  }

  // NOTE: probabilmente da deprecare
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  )

  render() {
    if (this.state.state === '' || this.state.settings === '') {
      return null
    }
    return (
      <article>
        <Row>
          <Col xs="12" xl="4">
            <CardState
              settings={this.state.settings}
              state={this.state.state}
              reloadStatus={this.updateView}
            />
          </Col>

          <Col xs="12" xl="4">
            <CardVideo
              value={this.state.state.video_recording}
              dest={this.state.state.dest}
              reloadStatus={this.updateView}
            />
            <CardRasp
              dest={this.state.state.dest}
              reloadStatus={this.updateView}
            />
          </Col>

          <Col xs="12" xl="4">
            <CardSettings
              settings={this.state.settings}
              reloadStatus={this.updateView}
            />
          </Col>
        </Row>
      </article>
    )
  }
}

export default Bike
