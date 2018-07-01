import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import YouTube from '@u-wave/react-youtube';
import pgimage from '../img/releasespg1.jpg';
import './Releases.css';

let bg = {
  backgroundColor: 'black',
  height: '100%',
}

let positionText = {
  color:'white',
  position:'relative',
  fontSize: '6vh',
  width:'100vw',
  left: '50%',
  
  transform: `translate(${-50}%, ${-50}%)` 
}
let pgimagestyle = {
  backgroundImage: `url(${pgimage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '73vh',
}
const videos = [
  { id: '1hJyO5AJh_g', name: 'Memphis May Fire' },
  { id: 'UqzXxSpoMyU', name: 'Same Old War' },
  { id: '_22TBpvAfbk', name: 'You Want A Battle Heres A War' },
  { id: 'lwupD4LW99Q', name: 'Gone' },
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
    };

    this.handlePause = this.handlePause.bind(this);
    this.handlePlayerPause = this.handlePlayerPause.bind(this);
    this.handlePlayerPlay = this.handlePlayerPlay.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleQuality = this.handleQuality.bind(this);
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
    return (

      <div style={bg}>
      <div style={pgimagestyle}>      </div>
      <br/><br/>
      <Container  fluid style={{ lineHeight: '32px' }}>
      <Row>
      <Col align="center" xs={12} sm={12} md={12} lg={12}>

      <div className="animated fadeInDown">
       <h2  style={positionText}>
       <br/>

        OUR RECORDS
       </h2>
       
     </div>
      <div >
     <div className="row center-align">
     <div className="col s12 m12 l3 ">
       <h3 style={{color:'white'}}>
         Records
       </h3>
       <div className="collection">
         {videos.map((choice, index) => (
           <a
             key={choice.id}
             href={`#!/video/${index}`}
             className={`collection-item ${video === choice ? 'active' : ''}`}
             onClick={() => this.selectVideo(index)}
           >
             {choice.name}
           </a>
         ))}
       </div>
     </div>
     <div className="col s12 m12 l9">
       <YouTube
       showRelatedVideos={false}
       showCaptions ={false}
        showInfo	= {false}
         video={video.id}
         width={'100%'}
         height={480}
         autoplay
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
      </Col>
      </Row>
        </Container>
         </div>

    );
  }
}

export default Releases;