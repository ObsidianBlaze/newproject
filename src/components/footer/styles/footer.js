import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 60px;
   background: #F5F5F5;
  
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 2000px;
    margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  // margin-left: 40px;
  width:250px;
  // background:teal;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color:253D4E;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  color: rgb(33,86,130);

  &:hover {
      color: blue;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color:#253d4e;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Horizontal = styled.hr`
  
  margin-top:50px;
  width:1500px;
  border:10px tin #253d4e;

`;

export const CwayLogo = styled.img` `;

export const Copy = styled.p`
  font-size: 14px;
  color:#253d4e;
  margin-bottom: 40px;
  font-weight: bold;
  width:350px;
`;


