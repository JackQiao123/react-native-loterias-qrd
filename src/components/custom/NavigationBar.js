import React, { Component } from 'react';
import {
  Image, TouchableOpacity, View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Colors, Fonts, Images, Metrics
} from '../../theme';
import CONFIG from '../../config';

const styles = {
  navigationBar: {
    backgroundColor: Colors.navigationBackground,
    height: Metrics.navigationBarHeight * 1.2,
    paddingTop: Metrics.statusBarHeight * 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 1 },
    shadowColor: Colors.navigationShadow,
    shadowOpacity: 0.4,
    zIndex: 10
  },
  navigationLeft: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  navigationRight: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  navigationButton: {
    padding: Metrics.paddingDefault
  },
  navigationButtonIcon: {
    color: Colors.navigationText,
    fontSize: Fonts.size.h2
  },
  navigationTitle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginLeft: -Metrics.marginDefault,
    paddingTop: Metrics.statusBarHeight * 1.5,
    flexDirection: 'row'
  },
  navigationImage: {
    height: Metrics.navigationBarHeight * 1.5,
    width: Metrics.navigationBarHeight * 1.5 * CONFIG.VIEW_OPTIONS.LAYOUTS.LOGO_ASPECT_RATIO,
    marginRight: Metrics.marginDefault
  },
  navigationImageSmall: {
    height: Metrics.navigationBarHeight - Metrics.paddingDefault,
    width: (Metrics.navigationBarHeight - Metrics.paddingDefault) * CONFIG.VIEW_OPTIONS.LAYOUTS.LOGO_ASPECT_RATIO
  },
  navigationContent: {

  },
  navigationText: {
    color: Colors.navigationText,
    fontSize: Fonts.size.h6,
    fontWeight: 'bold'
  },
  navigationDescription: {
    flexDirection: 'row'
  },
  navigationDescriptionText: {
    color: Colors.navigationText,
    fontSize: Fonts.size.small
  },
  navigationDescriptionIcon: {
    color: Colors.caret,
    fontSize: Fonts.size.small,
    marginRight: Metrics.marginDefault / 2
  }
};

class NavigationBar extends Component {
  render() {
    const VIEW_OPTION_NAVIGATION_SHOW_TITLE = CONFIG.VIEW_OPTIONS.NAVIGATIONS.SHOW_TITLE;
    return (
      <View style={styles.navigationBar}>
        <View style={[styles.navigationTitle]}>
          <Image
            style={[styles.navigationImage, VIEW_OPTION_NAVIGATION_SHOW_TITLE ? styles.navigationImageSmall : null]} 
            source={Images.logo} 
            resizeMode="contain"
          />
        </View>
        <View style={[styles.navigationLeft]}>
          <TouchableOpacity style={styles.navigationButton} onPress={this.props.onMenuPress}>
            <Icon style={styles.navigationButtonIcon} name="bars" />
          </TouchableOpacity>
        </View>
        <View style={[styles.navigationRight]}>
          <TouchableOpacity style={styles.navigationButton} onPress={this.props.onHomePress}>
            <Icon style={styles.navigationButtonIcon} name="home" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

NavigationBar.defaultProps = {
  onMenuPress: () => {},
  onHomePress: () => {}
};
export default NavigationBar;
