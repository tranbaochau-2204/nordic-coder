import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTrending } from '../redux/actions/giphyAction';

const Giphy = ({ data = [], fetchTrending, error }) => {
  useEffect(fetchTrending, []);

  return (
    <div className="giphy">
      {error && <div>{ error }</div>}
      {data.map((item, idx) => 
        <div key={ idx } className="giphy-item">
          <img src={ item.images.original.url } alt="img" />  
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.giphy.data,
  error: state.giphy.error
})

export default connect(mapStateToProps, { fetchTrending })(Giphy);