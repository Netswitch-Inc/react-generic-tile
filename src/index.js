import React, {Component} from 'react'
import styled from 'styled-components'
import LinesEllipsis from 'react-lines-ellipsis'
import { ClipLoader } from 'react-spinners'

import NumericContent from './Numeric'

const GenericTile = styled.div`
  margin: 5px;
  font-family: 'Roboto', sans-serif;
  border-radius: 0.125rem;
  // cursor: pointer;
  ${props => props.onClick && 'cursor: pointer'};
  outline: none;
  box-sizing: border-box;
  background-position: 0;
  background-color: ${props => props.loading ? '#F4F6F7' : "" };
  opacity: ${props => props.loading ? '0.3' : '1'};
  border: 1px solid transparent;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.15);
  vertical-align: top;

  width: 11rem;
  height: 11rem;
  padding: 10px;

  :hover {
    background-color: #F7F9FA;
    opacity: 0.4;
    color: #1e1e28;
  }

  :active {
    background-color: #1d83c5;
    color: #f5f5f5;
  }
`

const Header = styled.div`
  position: relative;
  min-heightL 1.2em;
  max-height: 2.4em;
  font-size: 14px;
  text-align: center;
`

const SubHeader = styled.div`
  padding: 2px 0;
  font-size: 12px;
  height: 2.4em;
`

const Loading = styled.div`
    position: absolute;
    width: 9rem;
    height: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
`;

const TileContent = styled.div`
  height: 5rem;
`;

const Footer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
  text-align: center;
`;

const linesEllipsisSettings = {
  ellipsis: '...',
  trimRight: true,
  basedOn: 'letters'
}

export default class ReactGenericTile extends Component {
  render() {

    const { header, subheader, footer, number, scale, indicator, loading, icon, size, onClick ,color} = this.props;

    return (
      <GenericTile
        size={size}
        loading={loading}
        onClick={onClick}
      >
        <Loading>
          <ClipLoader
            sizeUnit={"px"}
            size={44}
            color={'#123abc'}
            loading={loading}
          />
        </Loading>

        <Header>
          <LinesEllipsis
            text={header}
            maxLine='3'
            {...linesEllipsisSettings}
          />
        </Header>

        <SubHeader>
          <LinesEllipsis
            text={subheader}
            maxLine='3'
            {...linesEllipsisSettings}
          />
        </SubHeader>

        <TileContent>
          <NumericContent icon={icon} number={number} scale={scale} color={color} indicator={indicator} />
        </TileContent>

        <Footer>
          {footer}
        </Footer>
      </GenericTile>
    )
  }
}

// <TileContent footer="Current Quarter" unit="EUR" class="sapUiSmallMargin">
//   <content>
//     <NumericContent scale="M" value="1.96"
//       valueColor="Error" indicator="Up" />
//   </content>
// </TileContent>

ReactGenericTile.defaultProps = {
  header: "",
  subheader: "",
  footer: "",
  loading: false,
  number: "",
  scale: "",
  color: "#000",
  indicator: null,
  icon: null,
  size: "Normal"
}
