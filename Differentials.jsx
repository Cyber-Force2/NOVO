import React from 'react';
import styled from 'styled-components';
import { FaBrain, FaShieldAlt, FaLeaf, FaMedal } from 'react-icons/fa';

const DifferentialsSection = styled.section`
  margin: 3rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;
const DiffGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
`;
const DiffCard = styled.div`
  background: rgba(24,28,34,0.92);
  border-radius: 16px;
  box-shadow: 0 2px 16px #39ff1422;
  padding: 2rem 1.2rem 1.2rem 1.2rem;
  text-align: center;
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const IconWrap = styled.div`
  font-size: 2.5rem;
  color: var(--neon);
  margin-bottom: 1rem;
  text-shadow: 0 0 8px #39ff14cc;
`;
const DiffTitle = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--blue);
`;
const DiffText = styled.div`
  font-size: 1rem;
  color: #fff;
`;

export default function Differentials() {
  return (
    <DifferentialsSection>
      <Title>Diferenciais CyberForce</Title>
      <DiffGrid>
        <DiffCard>
          <IconWrap><FaBrain /></IconWrap>
          <DiffTitle>Inovação e Tecnologia</DiffTitle>
          <DiffText>Utilizamos soluções inteligentes e tecnologia de ponta para automação e instalações elétricas residenciais.</DiffText>
        </DiffCard>
        <DiffCard>
          <IconWrap><FaShieldAlt /></IconWrap>
          <DiffTitle>Segurança Garantida</DiffTitle>
          <DiffText>Priorizamos a segurança em todos os projetos, seguindo normas técnicas e boas práticas do setor.</DiffText>
        </DiffCard>
        <DiffCard>
          <IconWrap><FaLeaf /></IconWrap>
          <DiffTitle>Eficiência e Sustentabilidade</DiffTitle>
          <DiffText>Projetos pensados para economia de energia, sustentabilidade e redução de custos para sua residência.</DiffText>
        </DiffCard>
        <DiffCard>
          <IconWrap><FaMedal /></IconWrap>
          <DiffTitle>Atendimento Especializado</DiffTitle>
          <DiffText>Equipe qualificada, atendimento personalizado e suporte em todas as etapas do serviço.</DiffText>
        </DiffCard>
      </DiffGrid>
    </DifferentialsSection>
  );
}
