import styled from 'styled-components';
import { centerBlock }  from './mixins';
import { centerFlex }  from './mixins';
import { sizeVars }  from './vars';

export const Container = styled.div`
	${ centerBlock() }
	max-width: 1200px;
	background-color: blue;
`;

export const FullHeightFlex = styled.div`
	${ centerFlex() }
	padding: 20px 0px;
	box-sizing: border-box;
	height: auto;
	min-height: calc(100vh - ${sizeVars.navHeight});
	background-size: cover;
	background-repeat: no-repeat;
`;