import styled from "styled-components"
import colors from "../../consts/colors"
import { HEADER_HEIGHT } from "../../consts/index"

export const HeaderWrapper = styled.div`
height: ${HEADER_HEIGHT}px;
text-align: center;
background-color: ${colors.dark_bg_color};
color: ${colors.light_text_color} ;
`
