import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

export default function ScreenHoc(Wrapped: any) {
  class ScrHoc extends Component {
    render() {
      return (
        <SafeAreaView>
          <Wrapped {...this.props} />
        </SafeAreaView>
      );
    }
  }
  return ScrHoc;
}
