import styled from 'styled-components';

const StyledAvatar = styled.div`
  width: ${props => props.aSize}px;
  height: ${props => props.aSize}px;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.theme.palette.blue};
  color: ${props => props.theme.palette.white};
  font-size: 1.25rem;
  flex-shrink: 0;
  align-items: center;
  user-select: none;
  border-radius: 50%;
  justify-content: center;
`;

const StyledAvatarImage = styled.img`
  width: 100%;
  height: 100%;
  text-align: center;
  object-fit: cover;
`;

const StyledAvatarSvg = {
  fill: 'currentColor',
  width: '1em',
  height: '1em',
  display: 'inline-block',
  fontSize: '24px',
  transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  userSelect: 'none',
  flexShrink: '0'
};

const StyledAvatarText = styled.span`
  font-weight: 300;
  font-family: ${props => props.theme.type.avenirFamily};
`;

export { StyledAvatar, StyledAvatarImage, StyledAvatarSvg, StyledAvatarText };
