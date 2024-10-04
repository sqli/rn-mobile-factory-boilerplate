import React, { forwardRef } from 'react';

import { AccessibilityRole, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface AccessibleTouchableOpacityProps extends TouchableOpacityProps {
  accessibilityRole?: AccessibilityRole;
}

const AccessibleTouchableOpacity = forwardRef<TouchableOpacity, AccessibleTouchableOpacityProps>(
  ({ accessibilityRole = 'button', ...touchableOpacityProps }, forwardedRef) => (
    <TouchableOpacity
      accessibilityRole={accessibilityRole}
      ref={forwardedRef}
      {...touchableOpacityProps}
    />
  ),
);

export default AccessibleTouchableOpacity;
