import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.button`
    background-color: ${cores.fundoTag };
    color: ${cores.branca};
    padding: 6px 4px;
    font-size: 12px;
    fot-weight: bold; 
    margin-left: 8px;
    `
export const ButtonLink = styled(Link)`
    background-color: ${cores.fundoTag };
    color: ${cores.branca};
    padding: 6px 4px;
    font-size: 12px;
    fot-weight: bold; 
    text-decoration: none;
    margin-left: 8px;
    `
