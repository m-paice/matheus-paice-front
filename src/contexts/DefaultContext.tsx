import React, { createContext, useContext, useState } from "react";

import songsResource from "../service/songs";

interface Song {
    id: string;
    name: string;
    description: string;
    year: string;
    createdAt: Date;
    updatedAt: Date;
}

interface DefaultContextData {
    songs: Song[];

    getAllSongs(): void;
    createNewSong(payload): void;
    getSongByName(songname): void;
}

const DefaultContext = createContext<DefaultContextData>({} as DefaultContextData);

export const DefaultContextProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<Song[]>([]);

    const getAllSongs = async () => {
        const response = await songsResource.index();

        setData(response);
    };

    const createNewSong = async (payload) => {
        const response = await songsResource.create(payload);

        setData([...data, response]);
    };

    const getSongByName = async (songname) => {
        const response = await songsResource.songByName(songname);

        setData(response);
    };

    return (
        <DefaultContext.Provider
            value={{
                songs: data,

                getAllSongs,
                createNewSong,
                getSongByName,
            }}
        >
            {children}
        </DefaultContext.Provider>
    );
};

export const useDefaultContext = () => {
    const context = useContext(DefaultContext);

    return context;
};
