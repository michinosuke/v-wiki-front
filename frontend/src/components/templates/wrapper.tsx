import React from 'react'
import { SuperEllipseClip } from '~/components/clips/super_ellipse'
import { MenuButton } from '../organisms/menu_button'
import { Colors } from '~/types/colors'
import { CheckboxErrorBoundary } from '../organisms/checkbox-error-boundary'

type Props = {
  colors: Colors
  className?: string
}

export const Wrapper: React.FC<Props> = ({ colors, children, className }) => {
  return (
    <div
      style={{ backgroundColor: colors.themeLight }}
      className={`w-full min-h-screen ${className}`}
    >
      <div className="h-14" />
      <SuperEllipseClip />
      <CheckboxErrorBoundary>
        <div className="flex">{children}</div>
      </CheckboxErrorBoundary>
      <MenuButton colors={colors} className="fixed bottom-5 right-5" />
    </div>
  )
}
