import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import Popover                from 'react-popover';

export class HomeView extends React.Component {
  static propTypes = {
    actions  : React.PropTypes.object,
    counter  : React.PropTypes.number
  }

  state = {
    showDiv: true
  }

  onBreakPopover = () => {
    this.setState({
      showDiv: false,
      isPopoverOpen: false
    });
  };

  openPopover = () => {
    this.setState({
      isPopoverOpen: true
    });
  };

  buildPopoverProps = () => {
    return {
      isOpen: this.state.isPopoverOpen,
      body: (
        <div
          style={{
            padding: 20,
            backgroud: 'lightgrey'
          }}
          onClick={this.onBreakPopover}>
          Click me to hide the div and break the popover
        </div>
      )
    };
  };

  render () {
    return (
      <div className='container text-center'>
        {this.state.showDiv && (
          <Popover {...this.buildPopoverProps()}>
            <button onClick={this.openPopover}>
              Click me to open the popover
            </button>
          </Popover>
        )}
        <div style={{
          height: 4000
        }}>
          Make this thing scroll
        </div>
      </div>
    );
  }
}

export default HomeView;
