import {mainColor, secondaryColor, textColor, bgcolor, subcolor} from './colors'
export const primaryBtn =  {
    fontWeight: "400",
    fontSize: "16px",
    width: "8em",
    color: `${textColor}`,
    background: `${subcolor}`,
    borderRadius: "10px",
    border:`2px solid ${bgcolor}`,
    padding: "5px 15px",
    marginLeft: "1em",
    transition: `500ms`,
    '&:hover': {
        background: bgcolor,
        color: `${mainColor}`,
        border:`2px solid ${secondaryColor}`,
        cursor:'pointer'
    },
}

export const navBtn = {
    margin: "10px 20px",
    transition:'100ms',
    '&:hover': {
        fontWeight:'600',
        cursor:'pointer'
    },
}

// export const secondaryBtn =  {
//     // background: `${mainWhite}`,
//     // color: secondaryBlue,
//     // border: `solid 2px ${secondaryBlue}`,
//     '&:hover': {
//         background: secondaryBlue,
//         color: `${mainWhite}`
//     }
// }

// export const redButton = {
//     fontWeight: "500",
//     fontSize: "16px",
//     width: "7em",
//     color: `${mainWhite}`,
//     textTransform: 'capitalize',
//     background: `${mainRed}`,
//     borderRadius: "17px",
//     padding: "5px 15px",
//     borderColor: "transparent",
//     marginLeft: "1em",
//     transition: `${transition}`,
//     '&:hover': {
//             background: `${mainRedTint}`,
//             borderColor: `${mainRedTint}`,
//     },
// }
