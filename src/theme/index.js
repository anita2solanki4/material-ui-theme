require('../index.css');
module.exports = {
    fontFamily: "'Lato', sans-serif",
    palette: {
        root: {
            fontSize: 20,
        },
        common: {
            black: '#000',
            white: '#fff',
            transparent: 'rgba(0, 0, 0, 0)',
            fullBlack: 'rgba(0, 0, 0, 1)',
            darkBlack: 'rgba(0, 0, 0, 0.87)',
            lightBlack: 'rgba(0, 0, 0, 0.54)',
            minBlack: 'rgba(0, 0, 0, 0.26)',
            faintBlack: 'rgba(0, 0, 0, 0.12)',
            fullWhite: 'rgba(255, 255, 255, 1)',
            darkWhite: 'rgba(255, 255, 255, 0.87)',
            lightWhite: 'rgba(255, 255, 255, 0.54)'
        },
        type: "light",
        primary: {
            "50": "#FCE4EC",
            "100": "#F8BBD0",
            "200": "#F48FB1",
            "300": "#F06292",
            "400": "#EC407A",
            "500": "#E91E63",
            "600": "#D81B60",
            "700": "#C2185B",
            "800": "#AD1457",
            "900": "#880E4F",
            "A100": "#FF80AB",
            "A200": "#FF4081",
            "A400": "#F50057",
            "A700": "#C51162",
            "contrastDefaultColor": "dark"
        },
        "secondary": {
            "50": "#F1F8E9",
            "100": "#DCEDC8",
            "200": "#C5E1A5",
            "300": "#AED581",
            "400": "#9CCC65",
            "500": "#8BC34A",
            "600": "#7CB342",
            "700": "#689F38",
            "800": "#558B2F",
            "900": "#33691E",
            "A100": "#CCFF90",
            "A200": "#B2FF59",
            "A400": "#76FF03",
            "A700": "#64DD17",
            "contrastDefaultColor": "dark"
        },
        "typography": {
            "fontFamily": "Roboto",
            "fontSize": 14,
            "fontWeightLight": 300,
            "fontWeightRegular": 400,
            "fontWeightMedium": 600,
            "button": {
                "fontFamily": "Roboto",
            }
        },
    },
    overrides: {
        MuiTypography: require('./MuiTypography'),
        MuiButton: require('./MuiButton'),
        MuiAppBar: require('./MuiAppBar')
    },
}