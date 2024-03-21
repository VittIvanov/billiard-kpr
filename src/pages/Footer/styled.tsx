import styled from "styled-components"
import colors from "../../consts/colors"
import { FOOTER_HEIGHT } from "../../consts/index"

export const FooterWrapper = styled.div`
height: ${FOOTER_HEIGHT}px;
text-align: center;
background-color: ${colors.dark_bg_color};
color: ${colors.light_text_color} ;
`

