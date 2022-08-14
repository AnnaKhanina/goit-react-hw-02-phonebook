import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
  font-size: ${p => p.theme.fontSizes.xs};
`;

export const Button = styled.button`
  margin-left: ${p => p.theme.space[4]}px;
  cursor: pointer;
  font-size: ${p => p.theme.fontSizes.xs};
`;