import React from 'react'
import { render, fireEvent, waitForElement, act, cleanup } from '@testing-library/react'
import { getByTestId } from '@testing-library/dom'
import ThermostatStatusContainer from '../ThemostatStatusContainer'
import ThermostatManager from '../../../../managers/ThermostatManager'

jest.mock('../../../../managers/ThermostatManager')

describe('ThermostatStatusContainer', () => {
  afterEach(cleanup)
  it('should display correct temperature on mount', async () => {
    const temp = 22
    const mockGetCurrentTemp = jest.fn()
    ThermostatManager.prototype.getCurrentTemp = mockGetCurrentTemp
    mockGetCurrentTemp.mockReturnValue(Promise.resolve({ temp }))
    await act(async () => {
      const { findByText } = render(<ThermostatStatusContainer />)
      const regex = new RegExp(temp)
      await findByText(regex)
    })
  })

  it('should display thermostat status as HEAT when the heat readio button is selected', async () => {
    await act(async () => {
      const { getByLabelText, findByText } = render(<ThermostatStatusContainer />)
      fireEvent.click(getByLabelText('Heat'))
      
      await waitForElement(() => findByText(/HEAT/))
    })
  })
})

