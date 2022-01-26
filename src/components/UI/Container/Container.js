import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div `
  margin: 30px;


`

const Container = ({ children }) => {
    return (
      <div>
<StyledContainer>{children}</StyledContainer>
      </div>
        
    )


}
export default Container;