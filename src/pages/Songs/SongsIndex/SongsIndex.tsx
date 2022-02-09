import React from "react";

import { Switch, Route, useHistory, withRouter, RouteProps, SwitchProps, RouterProps } from "react-router-dom";

import searchIcon from "../../../assets/images/search.svg";

// components
import SongsShow from "../SongsShow";

import * as S from "./styles";

interface Props {
    match: {
        url: string;
    };
}

const SongsIndex: React.FC<Props> = ({ match }) => {
    const history = useHistory();

    return (
        <S.Container>
            <S.WrapperSearch>
                <img src={searchIcon} alt="icon" />
                <input type="text" placeholder="type a song..." />
            </S.WrapperSearch>

            <S.WrapperSongs>
                {Array.from({ length: 5 }).map((_, key) => (
                    <S.Song key={key} onClick={() => history.push(`/songs/1`)}>
                        <S.WrapperTitle>
                            <img
                                src="https://i.picsum.photos/id/858/200/200.jpg?hmac=G9GRV3ekW4ntHO3WGxZOEAwT5chu9kPdCSt4evx7n6A"
                                alt="image-song"
                            />
                            <p> Even Flow </p>
                        </S.WrapperTitle>
                        <span> 1992 </span>
                    </S.Song>
                ))}
            </S.WrapperSongs>

            <Switch>
                <Route path={`${match.url}/:id`} component={SongsShow} />
            </Switch>
        </S.Container>
    );
};

export default withRouter(SongsIndex);
