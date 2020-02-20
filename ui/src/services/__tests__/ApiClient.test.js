import axios from 'axios'
// Services
import ApiClient from '../ApiClient'
// Models
import ThermostatData from '../../models/ThermostatData'
// Errors
import GetThermostatDataError from '../errors/GetThermostatDataError'
import GetCurrentTempError from '../errors/GetCurrentTempError'

jest.mock('axios')

describe('ApiClient', () => {
  describe('#getThermostatData', () => {
    it('should return correct thermostat data', async () => {
      const data = {
        data: { date: 'date', point_data: [] }
      }
      axios.get.mockImplementationOnce(() => Promise.resolve(data))
      const apiClient = new ApiClient()
      const res = await apiClient.getThermostatData()
      expect(res).toEqual(new ThermostatData(data.data))
    })

    it('should throw an error if the service call fails', async () => {
      axios.get.mockImplementationOnce(() => Promise.reject(new Error('error')))
      const apiClient = new ApiClient()
      try {
        await apiClient.getThermostatData()
      } catch (e) {
        expect(e).toEqual(new GetThermostatDataError('error'))
      }
    })
  })

  describe('#getCurrentTemp', () => {
    it('should return the current tempersture', async () => {
      const data = {
        data: {
          temp: 'temp'
        }
      }
      axios.get.mockImplementationOnce(() => Promise.resolve(data))
      const apiClient = new ApiClient()
      const res = await apiClient.getCurrentTemp()
      expect(res).toEqual(data.data)
    })

    it('should throw an error if the service call fails', async () => {
      axios.get.mockImplementationOnce(() => Promise.reject(new Error('error')))
      const apiClient = new ApiClient()
      try {
        await apiClient.getCurrentTemp()
      } catch (e) {
        expect(e).toEqual(new GetCurrentTempError('error'))
      }
    })
  })
})
