import logo from '../../assets/images/logo.png'
import {FooterContainer} from './styles'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export const Footer = () => (
    <FooterContainer>
        <div className="container">
            <img src={logo} alt="logo efood" />
                <ul>
                    <li><FaFacebookF /></li>
                    <li><FaInstagram /></li>
                    <li><FaTwitter /></li>
                </ul>

            <p>A efood é uma plataforma para divulgação de estabelecimentos,
      a responsabilidade pela entrega, qualidade dos produtos é toda
      do estabelecimento contratado.</p>
        </div>
    </FooterContainer>
    )