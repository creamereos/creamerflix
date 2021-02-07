import React from 'react';
import HomePresenter from './HomePresenter';
import { movieApi } from 'API';
import Message from "Components/Message";

export default class extends React.Component{
    state = {
        nowPlaying: null,
        upComing: null,
        popular: null,
        error: null,
        loading: true
    };

    async componentDidMount(){
        try{
            const { data: { results: nowPlaying } } = await movieApi.nowPlaying();
            const { data: { results: upComing } } = await movieApi.upComing();
            const { data: { results: popular } } = await movieApi.popular();
            this.setState({ nowPlaying, upComing, popular });
        } catch{
            this.setState({
                error: "can't find movies info."
            });
        } finally{
            this.setState({
                loading: false 
            });
        }
    }

    render() {
        const { nowPlaying, upComing, popular, error, loading } = this.state;
        console.log(this.state);
        return (
            <HomePresenter 
            nowPlaying={nowPlaying} 
            upComing={upComing} 
            popular={popular} 
            error={error} 
            loading={loading} 
            />
        );
    }
}