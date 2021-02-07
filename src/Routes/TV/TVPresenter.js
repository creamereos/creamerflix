import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";


const Container = styled.div`
    padding: 0px 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
    <>
    <Helmet>
        <title>TV | JIN FLIX</title>
    </Helmet>
     {loading ? (
        <Loader />
    ) : (
        <Container>
            {topRated && topRated.length > 0 && (
                <Section title="Top Rated TV">
                    {topRated.map(tv => (
                        <Poster 
                            key={tv.id} 
                            id={tv.id} 
                            imageUrl={tv.poster_path} 
                            title={tv.original_name} 
                            rating={tv.vote_average}
                            year={tv.first_air_date.substring(0, 4)}
                        />
                    ))}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="Popular TV">
                    {popular.map(tv => (
                        <Poster 
                            key={tv.id} 
                            id={tv.id} 
                            imageUrl={tv.poster_path} 
                            title={tv.original_name} 
                            rating={tv.vote_average}
                            year={tv.first_air_date.substring(0, 4)}
                        />
                    ))}
                </Section>
            )}
            {airingToday && airingToday.length > 0 && (
                <Section title="AiringToday TV">
                    {airingToday.map(tv => (
                        <Poster 
                            key={tv.id} 
                            id={tv.id} 
                            imageUrl={tv.poster_path} 
                            title={tv.original_name} 
                            rating={tv.vote_average}
                            year={tv.first_air_date.substring(0, 4)}
                        />
                    ))}
                </Section>
            )}
            {error && <Message color="#e74c3c" text={error} />}
        </Container>
    )}
    </>
)
    

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
}

export default TVPresenter;