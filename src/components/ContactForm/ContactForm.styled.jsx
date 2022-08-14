import styled from 'styled-components';

export const Form = styled.form`
  max-width: 360px;
  border-radius: ${p => p.theme.radii.sm};
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.primary};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Input = styled.input`
  width: ${p => p.theme.sizes.s};
  margin-top: ${p => p.theme.space[1]}px;
`;

export const Button = styled.button`
  cursor: pointer;
`;