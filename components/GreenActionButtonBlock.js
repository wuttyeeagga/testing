import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, withTheme } from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const GreenActionButtonBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <Button
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors.appGreen,
          borderRadius: 12,
          fontFamily: 'Inter_600SemiBold',
          fontSize: 16,
          height: 51,
          marginBottom: 5,
          marginTop: 5,
          textAlign: 'center',
        },
        dimensions.width
      )}
      title={'TopUp'}
    />
  );
};

export default withTheme(GreenActionButtonBlock);
