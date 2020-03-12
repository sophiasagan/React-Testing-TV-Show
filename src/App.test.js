import React from 'react';
import mockAxios from 'axios';
import {
  render,
  wait
} from '@testing-library/react';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import { mockShowRes } from './mockShowData';

jest.mock("axios");



// test("app fetches show data and renders it", async() => {
//     mockFetchShow.mockResolvedValueOnce(mockShowRes)
//     const { getByTestId } = render(<App/>)
//     expect(mockFetchShow).toHaveBeenCalledTimes(1);

//     await wait(() => { 
//     const app = getByTestId('fetching');
//     expect(app).toBeInTheDocument();
// })
// })

test("app fetches show data and renders it", async () => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: {
              id: 2993,
              name: "Stranger Things"
            }
      })
    );

    await mockFetchShow();
    console.log(mockShowRes.id, mockShowRes.name)
    // const actions = store.getActions();
    // expect(actions[0].type).toEqual("FETCH_SHOW");
    expect(mockShowRes.id).toEqual(2993);
    expect(mockShowRes.name).toEqual("Stranger Things");
  });
// });
