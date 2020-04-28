import { h, Component } from "preact";
import { OTSubscriber } from "opentok-react";
import CheckBox from "./checkbox";

class Subscriber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      audio: false,
      video: false,
    };
  }

  setAudio = (audio) => {
    this.setState({ audio });
  };

  setVideo = (video) => {
    this.setState({ video });
  };

  onError = (err) => {
    this.setState({ error: `Failed to subscribe: ${err.message}` });
  };

  render() {
    return (
      <div className="subscriber">
        Guest
        {this.state.error ? <div id="error">{this.state.error}</div> : null}
        <OTSubscriber
          properties={{
            subscribeToAudio: this.state.audio,
            subscribeToVideo: this.state.video,
          }}
          onError={this.onError}
        />
        <CheckBox
          label="Enable Guest Audio"
          initialChecked={this.state.audio}
          onChange={this.setAudio}
        />
        <CheckBox
          label="Enable Guest Video"
          initialChecked={this.state.video}
          onChange={this.setVideo}
        />
      </div>
    );
  }
}
export default Subscriber;
