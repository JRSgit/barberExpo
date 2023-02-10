import React from "react";
import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

const StarArea = styled.View`
  flex-direction: row;
  align-items: center;
`;
const StarView = styled.View`

`
const StartText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-left: 10px;
  color: #737373;
`

const Stars = ({ stars, showNumber }) => {
  let s = [0, 0, 0, 0, 0]
  let floor = Math.floor(stars)
  let left = stars - floor

  for (var i = 0; i < floor; i++) {
    s[i] = 2
  }
  if (left > 0) {
    s[i] = 1
  }

  return (
    <StarArea>
      {s.map((i, k) => (
        <StarView key={k}>
          {i === 0 && <FontAwesome name="star-o" size={20} color="#ff9200" />}
          {i === 1 && <FontAwesome name="star-half-empty" size={20} color="#ff9200" />}
          {i === 2 && <FontAwesome name="star" size={20} color="#ff9200" />}
        </StarView>
      ))}
      {showNumber && <StartText>{stars}</StartText>}
    </StarArea>
  )
}

export default Stars
