import React from 'react';
import mockAxios from 'axios';
import {
    render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import { mockShowRes } from './mockShowData';

jest.mock("axios");



test("app fetches show data and renders it", async () => {
    mockAxios.get.mockImplementation(() =>
        Promise.resolve({
            data: {
                id: 2993,
                name: "Stranger Things"
            }
        })
    );

//     const url = 'https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes'
//   render(<App url={url} axios={mockAxios} />)
//   fireEvent.click(screen.getByText(/fetching/i))

    await mockFetchShow();
    console.log(mockShowRes.id, mockShowRes.name)
    expect(mockAxios.get).toHaveBeenCalled();
    expect(mockShowRes.id).toEqual(2993);
    expect(mockShowRes.name).toEqual("Stranger Things");
    

});

// test("App renders properly", () => {
//     // const mockGetData = jest.fn();
//     render(<App getData={mockFetchShow} />);
//   });
  
//   test("Button works", async () => {
//     await mockFetchShow();
//     const { getByText, queryAllByTestId } = render(<App />);
//     const button = getByText(/Select a season/i);
//     fireEvent.click(button);
  
//     getByText(/fetching data/i);
//     // await mockFetchShow();
//     expect(queryAllByTestId("fetching")).toHaveLength(1);
//   });
