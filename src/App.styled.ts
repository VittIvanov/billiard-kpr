import styled, { createGlobalStyle } from "styled-components"
import colors from "./consts/colors"
import { HEADER_HEIGHT, FOOTER_HEIGHT } from "./consts/index"

export const AppStyles = createGlobalStyle`
  body{
      -webkit-font-smoothiing: antialiased;
      -moz-osx-font-smoothiing: grayscale;
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 14px;
      font-style: italic;
      font-weight: normal;
      min-width: 320px;
    }

  *,
  *:before,
  *:after{
    box-sizing: border-box;
  }

  a{
    color: inherit;
    text-decoration: inherit;
    color: ${colors.light_text_color};
  }

  ul,li{
    list-style: none;
  }

  img{
    display: block;
    max-width: 100%;
    height: auto;
  }

  tr,
  td,
  th,
  p,
  button,
  ul,
  li,
  h1, h2, h3, h4, h5, h6{
    margin: 0;
    padding: 0;
  }

  h1, .h1{
    font-size: 26px;
  }

  h2, .h2{
    font-size: 22px;
  }

  h3, .h3{
    font-size: 18px;
  }

  h4, .h4{
    font-size: 16px;
  }

  p, li{
    font-size: 21px;
  }
`

export const PageWrapper = styled.div`
padding: 20px;
min-height: calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT})px;
`
