import React from 'react';

import { AccessibilityRole, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface AccessibleTouchableOpacityProps extends TouchableOpacityProps {
  accessibilityRole?: AccessibilityRole;
}

const AccessibleTouchableOpacity = ({
  accessibilityRole = 'button',
  ...touchableOpacityProps
}: AccessibleTouchableOpacityProps) => (
  <TouchableOpacity accessibilityRole={accessibilityRole} {...touchableOpacityProps} />
);

export default AccessibleTouchableOpacity;
