import { h, Component } from "preact";
import { OTSession, OTStreams, preloadScript } from "opentok-react";
import ConnectionStatus from "./connectionStatus";
import Publisher from "./publisher";
import Subscriber from "./subscriber";

class VideoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      connected: false,
    };
    this.sessionEvents = {
      sessionConnected: () => {
        this.setState({ connected: true });
      },
      sessionDisconnected: () => {
        this.setState({ connected: false });
      },
    };
  }
  onError = (err) => {
    this.setState({ error: `Failed to connect: ${err.message}` });
  };

  render() {
    return (
      <OTSession
        apiKey="46705852"
        sessionId="2_MX40NjcwNTg1Mn5-MTU4ODA5OTA5NTQ2MX52VlMvelR3ZnU3S2l6UE9XYitmQkRnSDN-fg"
        token="T1==cGFydG5lcl9pZD00NjcwNTg1MiZzaWc9MTZlN2MzMmQ5OTY0YzRiY2YzZjRjYTUxMDY2YWZjNDk4ZDY1MWEyMjpzZXNzaW9uX2lkPTJfTVg0ME5qY3dOVGcxTW41LU1UVTRPREE1T1RBNU5UUTJNWDUyVmxNdmVsUjNablUzUzJsNlVFOVhZaXRtUWtSblNETi1mZyZjcmVhdGVfdGltZT0xNTg4MDk5MTE5Jm5vbmNlPTAuNTkxOTQ1NzIxODM1NjY0NSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTkwNjkxMTE5JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9"
        eventHandlers={this.sessionEvents}
        onError={this.onError}
      >
        {this.state.error ? <div id="error">{this.state.error}</div> : null}
        <ConnectionStatus connected={this.state.connected} />
        <Publisher />
        <OTStreams>
          <Subscriber />
        </OTStreams>
      </OTSession>
    );
  }
}

export default preloadScript(VideoComponent);
