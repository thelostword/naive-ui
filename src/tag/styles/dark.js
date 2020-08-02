import create from '../../styles/_utils/create-component-base'
import commonVariables from '../../styles/_common-style/tag'
import { changeColor } from '../../_utils/color'

export default create({
  theme: 'dark',
  name: 'Tag',
  getDerivedVariables ({ base, derived }) {
    const {
      secondaryTextOverlayColor,
      primaryHoverColor,
      primaryActiveColor,
      primaryColor,
      infoColor,
      successColor,
      warningColor,
      errorColor,
      baseBackgroundColor,
      borderOverlayColor,
      disabledOpacity,
      closeOverlayColor,
      closeHoverOverlayColor,
      closeActiveOverlayColor
    } = derived
    const {
      smallBorderRadius: borderRadius
    } = base
    return {
      ...commonVariables,
      borderRadius,
      disabledOpacity,
      checkable: {
        textColor: secondaryTextOverlayColor,
        textColorHover: primaryHoverColor,
        textColorActive: primaryActiveColor,
        textColorChecked: baseBackgroundColor,
        color: 'transparent',
        colorHover: 'transparent',
        colorActive: 'transparent',
        colorChecked: primaryColor,
        colorCheckedHover: primaryHoverColor,
        colorCheckedActive: primaryActiveColor
      },
      default: {
        borderColor: borderOverlayColor,
        textColor: secondaryTextOverlayColor,
        color: 'transparent',
        closeColor: closeOverlayColor,
        closeColorHover: closeHoverOverlayColor,
        closeColorActive: closeActiveOverlayColor
      },
      primary: {
        borderColor: changeColor(primaryColor, { alpha: 0.3 }),
        textColor: primaryColor,
        color: 'transparent',
        closeColor: changeColor(primaryColor, { alpha: 0.7 }),
        closeColorHover: changeColor(primaryColor, { alpha: 0.85 }),
        closeColorActive: changeColor(primaryColor, { alpha: 0.57 })
      },
      info: {
        borderColor: changeColor(infoColor, { alpha: 0.3 }),
        textColor: infoColor,
        color: 'transparent',
        closeColor: changeColor(infoColor, { alpha: 0.7 }),
        closeColorHover: changeColor(infoColor, { alpha: 0.85 }),
        closeColorActive: changeColor(infoColor, { alpha: 0.57 })
      },
      success: {
        borderColor: changeColor(successColor, { alpha: 0.3 }),
        textColor: successColor,
        color: 'transparent',
        closeColor: changeColor(successColor, { alpha: 0.7 }),
        closeColorHover: changeColor(successColor, { alpha: 0.85 }),
        closeColorActive: changeColor(successColor, { alpha: 0.57 })
      },
      warning: {
        borderColor: changeColor(warningColor, { alpha: 0.3 }),
        textColor: warningColor,
        color: 'transparent',
        closeColor: changeColor(warningColor, { alpha: 0.7 }),
        closeColorHover: changeColor(warningColor, { alpha: 0.85 }),
        closeColorActive: changeColor(warningColor, { alpha: 0.57 })
      },
      error: {
        borderColor: changeColor(errorColor, { alpha: 0.3 }),
        textColor: errorColor,
        color: 'transparent',
        closeColor: changeColor(errorColor, { alpha: 0.7 }),
        closeColorHover: changeColor(errorColor, { alpha: 0.85 }),
        closeColorActive: changeColor(errorColor, { alpha: 0.57 })
      }
    }
  }
})
