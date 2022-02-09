import React from "react";

import * as S from "./styles";

interface Props {}

const ShowSong: React.FC<Props> = () => {
    return (
        <S.Container>
            <S.Content> song details </S.Content>
        </S.Container>
    );
};

export default ShowSong;
