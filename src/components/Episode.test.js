import React from 'react';
import {render, getByTestId } from '@testing-library/react'
import Episodes from '../components/Episodes'

const mockEpisode = [{
    id: 4521,
    image: {
        medium: "http://static.tvmaze.com/uploads/images/medium_landscape/204/511286.jpg"
    },
    name: "Testing Episode",
    season: 1,
    number: 1,
    summary: "Test Summary",
    runtime: 60
}]



test('Episodes Component Renders', () => {
    render(<Episodes episodes={mockEpisode}/>)
})

test('Episode Component has all Elements', () => {
    const {getByTestId} = render(<Episodes episodes={mockEpisode}/>)

    const episodesDiv = getByTestId('episodes')
    const episodeDiv = getByTestId('episode')
    const episodeImg = getByTestId('episode-image')
    const episodeInfo = getByTestId('episode-info')
    const episodeNumber = getByTestId('episode-number')
    const episodeName = getByTestId('episode-name')
    const episodeRuntime = getByTestId('episode-runtime')

    const elements = [
        episodesDiv,
        episodeDiv,
        episodeImg,
        episodeInfo,
        episodeNumber,
        episodeName,
        episodeRuntime
    ]

    console.log(elements)

    elements.forEach(element => {
        expect(element).toBeInTheDocument()
    })
})