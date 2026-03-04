import { ButtonContainer, ButtonLink } from "./styles";

type Props = {
  type: 'button' | 'link';
  title: string;
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  $cardapio?: 'home' | 'pizza'; // ← adiciona o cardapio aqui
};

const Button = ({ type, title, to, onClick, children, $cardapio }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        $cardapio={$cardapio} // ← passa para o styled-component
      >
        {children}
      </ButtonContainer>
    );
  }

  return (
    <ButtonLink
      to={to as string}
      title={title}
      $cardapio={$cardapio} // ← passa para o styled-component
    >
      {children}
    </ButtonLink>
  );
};

export default Button;