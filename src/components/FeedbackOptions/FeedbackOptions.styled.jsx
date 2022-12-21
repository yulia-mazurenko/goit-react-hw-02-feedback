import styled from 'styled-components';

export const Button = styled('button')`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  padding: ${p => p.theme.space[2]}px;
  width: ${p => p.theme.sizes.button};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};

  &:focus,
  &:hover {
    background-color: ${p => p.theme.colors.accentColor};
    color: ${p => p.theme.colors.white};
  }
  cursor: pointer;
`;
