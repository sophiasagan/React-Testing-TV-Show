import React from 'react';
import mockAxios from 'axios';
import {
    render, act,
    wait
} from '@testing-library/react';
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

    

    await mockFetchShow();
    console.log(mockShowRes.id, mockShowRes.name)
    expect(mockAxios.get).toHaveBeenCalled();
    expect(mockShowRes.id).toEqual(2993);
    expect(mockShowRes.name).toEqual("Stranger Things");
});
