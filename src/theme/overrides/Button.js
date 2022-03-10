// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          //   color: '#fff',
          backgroundColor: theme.palette.text.primary,
          '&:hover': {
            //     color: '#8c46b9',
            //     backgroundColor: '#000',
            boxShadow: '1px 1px 1px 3px rgba(0,0,0,0.2)',
          },
        },
        sizeLarge: {
          height: 48,
        },
        // contained
        containedInherit: {
          color: theme.palette?.grey[800],
          boxShadow: theme.customShadows?.z8,
          '&:hover': {
            backgroundColor: theme.palette?.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows?.primary,
        },
        containedSecondary: {
          boxShadow: theme.customShadows?.secondary,
        },
        containedInfo: {
          boxShadow: theme.customShadows?.info,
        },
        containedSuccess: {
          boxShadow: theme.customShadows?.success,
        },
        containedWarning: {
          boxShadow: theme.customShadows?.warning,
        },
        containedError: {
          boxShadow: theme.customShadows?.error,
        },
        // outlined
        outlinedInherit: {
          border: `1px solid ${theme.palette?.grey[500_32]}`,
          '&:hover': {
            backgroundColor: theme.palette?.action?.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette?.action?.hover,
          },
        },
      },
    },
  };
}
