import React from 'react';
import { connect } from 'react-redux';
import Stream from './Stream'
// import { useSelector } from 'react-redux';

import Loader from 'react-loader-spinner'
import { getData } from '../actions'
// Another way to use useSelecror wich it is pretty cool!

const StreamList = (p) => {
    // const test = useSelector(state => state.test)
    return (
    <>
    <h1>Welcome to Soccer match results </h1>
    <button onClick={p.getData}>
    {p.isLoading ? <Loader /> : 'Get results'}</button>
    {p.streams && p.streams.map(stream => (
        <Stream key={stream.title} streams={stream} />
    ))}
    {p.error && <p>{p.error}</p> }
    </>
    )
}
// type="TailSpin" color="#00BFFF" height="10" width="20" 
const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        stream: state.streams,
        error: state.error
    }
}

// export default StreamList;
export default connect(mapStateToProps, { getData })(StreamList);