import React, { Component } from 'react';
import YouTube from '@u-wave/react-youtube';
import pgimage from '../../img/covers/releasespg1.jpg';
import './Releases.css';
import Loading from 'react-loading-components';

let bg = {
  backgroundColor: 'black',
  height: '100%',
}

let positionText = {

  fontSize: '6vh',

  color:'white',
  

}
let pgimagestyle = {
  backgroundImage: `url(${pgimage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '73vh',
}
const videos = [
  { id: 'lwupD4LW99Q', name: 'Gone' },
  { id: 'UqzXxSpoMyU', name: 'Same Old War' },
  { id: '_22TBpvAfbk', name: 'You Want A Battle Heres A War' },
  { id: '1hJyO5AJh_g', name: 'Memphis May Fire' },
];

const qualities = ['auto', '240', '380', '480', '720', '1080', '1440', '2160'];

const hashVideoRx = /^#!\/video\/(\d)$/;
const hash = typeof window.location !== 'undefined'
  ? window.location.hash : ''; // eslint-disable-line no-undef
const defaultVideo = hashVideoRx.test(hash)
  ? parseInt(hash.replace(hashVideoRx, '$1'), 10)
  : 0;
class Releases extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoIndex: defaultVideo,
      suggestedQuality: 'auto',
      volume: 1,
      paused: false,
      isLoading: true 
    };

    this.handlePause = this.handlePause.bind(this);
    this.handlePlayerPause = this.handlePlayerPause.bind(this);
    this.handlePlayerPlay = this.handlePlayerPlay.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleQuality = this.handleQuality.bind(this);
  }

  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 1000))
  }

componentDidMount(){
  this.authenticate().then(() => {
    this.setState({ isLoading: false });
 })
}
  selectVideo(index) {
    this.setState({ videoIndex: index });
  }

  handlePause(event) {
    this.setState({
      paused: event.target.checked,
    });
  }

  handlePlayerPause() {
    this.setState({ paused: true });
  }

  handlePlayerPlay() {
    this.setState({ paused: false });
  }

  handleVolume(event) {
    this.setState({
      volume: parseFloat(event.target.value),
    });
  }

  handleQuality(event) {
    this.setState({
      suggestedQuality: qualities[event.target.selectedIndex],
    });
  }

  render() {
    
    const {
      videoIndex, volume, paused, suggestedQuality,
    } = this.state;

    const video = videos[videoIndex];
    if (this.state.isLoading) {
      return(
      <div  className="loading"><center>
      <Loading
      
      type='puff'
       width={100}
        height={100}
         fill='#f44242' />
      </center></div>
    );
  }
    return (

      <div style={bg}>
      <div style={pgimagestyle}>      </div>
      <br/>

      <div className="container" >
      <div className="row center-align">
      <div className="col s12 m12 l12">
      <div className="animated fadeInDown">
      <h4 class="center-align"  style={positionText}>

      OUR RELEASES
       <hr style={{width:'20%'}} />
       </h4>
      
     </div>
     </div>
     </div>
     </div>

     
      <div className="container" >
     <div className="row center-align">
     <div className="col s6 m6 l6 push-l3 push-m3 push-s3">
       <h4 style={{color:'white'}}>
        R e c o r d s
       </h4>
       </div>
       </div>
       <div className="row center-align">
       <div className="col s6 m6 l6 push-l3 push-m3 push-s3">

       <div className="collection">

         {videos.map((choice, index) => (
           <a
             key={choice.id}
             href={`#!/video/${index}`}
             className={`collection-item ${video === choice ? 'activerec' : ''}`}
             onClick={() => this.selectVideo(index)}
           >
             {choice.name}
           </a>

         ))}
         
         </div>
       </div>
       </div>

       <div className="row center-align">

     <div className="col s12 m12 l8 push-l2">
       <YouTube
       modestBranding={true}
       allowFullscreen={false}
       showRelatedVideos={false}
       showCaptions ={false}
        showInfo	= {false}
         video={video.id}
         width={'100%'}
         height={480}
         controls={false}
         suggestedQuality={suggestedQuality}
         volume={volume}
         paused={paused}
         onPause={this.handlePlayerPause}
         onPlaying={this.handlePlayerPlay}
       />

     </div>
     </div>
   </div>
   </div>

    );
  }
}

export default Releases;