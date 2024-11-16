# 💊 Caruaru Saúde - Plataforma de Serviços de Saúde 
<div align="center">
 
 <td><img src="/caruaru_saude/static/assets/img/caruarusaude2.jpeg" width="500" style="display: block; margin: 0 auto;" alt="Dinha"> </td>
  </div>

## 🔍 Introdução:
O projeto Caruaru Saúde é uma plataforma digital de saúde pública desenvolvida para conectar os cidadãos da região do Agreste Pernambucano a serviços e profissionais de saúde. Voltada para atender tanto às necessidades da população quanto das instituições médicas, a plataforma oferece uma solução prática e acessível para a busca e agendamento de consultas, além de informações essenciais sobre clínicas e profissionais de saúde locais. Utilizando tecnologias robustas de back-end e front-end, o Caruaru Saúde visa facilitar o acesso a serviços médicos e promover a saúde na região.

##  💬 Objetivo:
 O objetivo do Caruaru Saúde é simplificar e melhorar o acesso da população aos serviços de saúde no Agreste Pernambucano, oferecendo uma plataforma intuitiva e completa. Através de funcionalidades como cadastro, login, favoritos, marcação de consultas e um catálogo de instituições com busca por especialidades, o projeto facilita o processo de busca e interação com profissionais de saúde, além de proporcionar uma experiência digital otimizada para a população.

## Visualização:

![visualizacao do Projeto](caruaru_saude/static/assets/readme/caruaru_saude_curto.gif)

## 📱 Tecnologias utilizadas: 

<div align="center" style="display: inline_block">
<img align="center" alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />  
<img align="center" alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /> 
<img align="center" src="https://img.shields.io/badge/Python-133DAB?style=for-the-badge&logo=python&logoColor=y1CC0C0" alt="icon python" > 
<img align="center" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> 
<img align="center" alt="vscode" src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />  
<img align="center" alt="bootstrap" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
<img align="center" alt="django" src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" />
<img align="center" alt="github" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />

</div>

## 🎖️ Requisitos Essenciais e Critérios de Avaliação

| **Requisito Essencial**          | **Descrição**                                                                                                       | **Critério de Avaliação**                                                      | **Método de Avaliação**                                           |
|----------------------------------|---------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|-------------------------------------------------------------------|
| **Cadastro de Usuários**         | Implementação de cadastro e autenticação de usuários para acesso a funcionalidades personalizadas.                  | Usuário deve poder se cadastrar, fazer login e gerenciar perfil.               | Testes de criação, login e edição de perfil com diferentes dados. |
| **Cadastro da Instituição**      | Funcionalidade para permitir que instituições de saúde se cadastrem na plataforma e disponibilizem seus serviços.  | Instituição deve poder se cadastrar e gerenciar dados de serviços.             | Testes de cadastro e edição de perfil com diferentes instituições.|
| **Login de Usuário**             | Permite que os usuários façam login para acessar funcionalidades exclusivas, como favoritos e agendamentos.        | Usuário deve conseguir fazer login e acessar área restrita.                    | Testes de login e acesso, verificação de restrições de acesso.    |
| **Login de Instituição**         | Permite que as instituições façam login para gerenciar perfil, horários e serviços oferecidos.                    | Instituição deve conseguir fazer login e acessar área de gerenciamento.        | Testes de login e acesso para perfis institucionais.              |
| **Área do Usuário**              | Área onde o usuário pode visualizar e gerenciar instituições favoritas e agendamentos.                            | Usuário deve poder adicionar favoritos e gerenciar agendamentos.               | Testes de adição/remoção de favoritos, verificação de agendamentos.|
| **Área da Instituição**          | Área onde a instituição pode gerenciar seus serviços, profissionais e horários.                                    | Instituição deve poder editar informações e definir horários disponíveis.      | Testes de edição de informações e definição de horários.          |
| **Catálogo de Instituições**     | Exibição de um catálogo de instituições de saúde com opções de pesquisa por especialidade e serviços.              | Pesquisa deve retornar resultados corretos e relevantes.                       | Testes de busca por especialidade e serviço, verificação manual.  |
| **Mapa de Localização**          | Integração com Google Maps para mostrar a localização das instituições de saúde.                                   | Mapa deve exibir corretamente as localizações e detalhes das instituições.     | Inspeção visual e testes de localização com pontos de referência. |
| **Marcação de Consultas**        | Funcionalidade que permite aos usuários agendar consultas com instituições de saúde registradas.                  | Agendamento deve exibir opções de datas e horários disponíveis e salvar dados. | Testes de criação, edição e exclusão de agendamentos.             |
| **Filtro de Instituições**       | Filtros para refinar resultados por localização, especialidade e serviços disponíveis.                            | Filtros devem exibir resultados precisos e atualizados.                        | Testes de combinação de filtros com validação de dados retornados.|
| **Identidade Visual Consistente**| Interface de usuário atraente, com logotipo e esquema de cores definidos.                                         | Design deve ser consistente e alinhado à identidade visual.                    | Avaliação visual e revisão com feedback dos usuários.             |
| **Acesso Gratuito e Pago**       | Diferenciação clara entre serviços gratuitos e pagos oferecidos na plataforma.                                     | Ícones e descrições devem indicar corretamente o tipo de serviço.              | Teste funcional e verificação de ícones e descrições.             |

##  🖥️ Etapas do Desenvolvimento:

- **Back-End**:
  - Linguagem: Python
  - Framework: Django
  - Ambiente: Configuração e armazenamento dos dados no próprio ambiente Django
  - Autenticação: Sistema de login e autenticação para usuários e instituições
  - Modelos: Definição de modelos para cadastro de usuários, instituições, serviços e agendamentos
  - Views: Criação de views para gerenciar lógicas de cadastro, login e funcionalidades de consulta e área do usuário
  - URLs: Configuração das rotas de acesso para cada funcionalidade da plataforma
  - Forms: Criação de formulários para o cadastro de usuários, instituições e agendamento de consultas
  - Filtros: Implementação de filtros específicos para consultas e busca de instituições

- **Front-End**:
  - Linguagens: HTML, CSS, JavaScript
  - Estilo: Desenvolvimento de uma interface responsiva e intuitiva, mantendo a identidade visual do projeto
  - Catálogo de Instituições: Estruturação de cards interativos para exibir informações detalhadas de instituições de saúde
  - Integração com Mapas: Utilização do Google Maps para exibir a localização de cada instituição
  - Design Personalizado: Ajustes de layout e estilo para atender às necessidades de pesquisa e acesso do público-alvo

- **Banco de Dados**:
  - Ambiente: Armazenamento e gerenciamento de dados realizado no próprio Django, utilizando o ORM (Object-Relational Mapping) nativo
  - Configuração: Estruturação de tabelas para suportar cadastros, agendamentos e preferências de usuário
  - Consultas: Construção de consultas específicas para exibição e filtragem dos dados, facilitando o acesso rápido às informações


## 🫂 Equipe do Projeto:

<div align="center">
 
 <td><img src="/caruaru_saude/static/assets/readme/captura1.png" width="850" style="display: block; margin: 0 auto;" alt="miro"> </td>
  </div>


1. [João Paulo](https://github.com/jposilva) -> CEO : 
  * **Responsabilidades**: João Paulo assumiu a liderança como CEO, sendo o responsável pela gestão do grupo e pela coordenação das atividades. Ele elaborou os requisitos do projeto, realizou pesquisas de mercado e desenvolveu a estratégia de negócios. Além disso, João foi responsável por buscar monitoria e investimentos para o crescimento do projeto.
2. [Lucas Vinícius](https://github.com/Lucas-pypy) -> Desenvolvedor Full-stack :  
  * **Responsabilidades**:  Lucas Vinícius trabalhou principalmente no front-end do projeto, dedicando-se à implementação de funcionalidades de mapa para exibir as instituições de saúde com o uso de JavaScript. Seu trabalho permitiu uma interação visual e prática com a localização de serviços médicos.
4. [Micael José](https://github.com/micaellimaj) -> Desenvolvedor Full-stack :
  * **Responsabilidades**:  Micael José focou no desenvolvimento do front-end, mas também trabalhou significativamente no back-end utilizando Django e Python. Ele foi responsável pela autenticação de usuários e pela implementação do sistema de marcação de consultas, proporcionando uma interface interativa e segura para os usuários.
4. [José Vinícius](https://github.com/vtenorio309) -> Desenvolvedor Full-stack :
  * **Responsabilidades**: José Vinícius concentrou-se exclusivamente no desenvolvimento do front-end, garantindo a funcionalidade e o visual das interfaces do usuário, além de colaborar para a usabilidade do projeto.
5. [Ângelo Gabriel](https://github.com/red-rgb-Design) -> Design :
  * **Responsabilidades**:Ângelo Gabriel foi o responsável pela criação da identidade visual do projeto. Ele desenvolveu o logotipo, definiu a paleta de cores e elaborou a identidade visual, contribuindo para uma aparência profissional e atrativa da plataforma.

## 🏁 Conclusão

O projeto **Caruaru Saúde** foi desenvolvido com o objetivo de oferecer uma plataforma de saúde acessível e prática para a população do Agreste Pernambucano. Através da integração de tecnologias como Django, HTML, CSS e JavaScript, a plataforma conecta os cidadãos a uma rede de serviços médicos e profissionais de saúde, oferecendo funcionalidades de busca por especialidades, localização por mapa, e agendamento de consultas. 

Cada etapa do desenvolvimento, desde a implementação do back-end com Django até o design responsivo do front-end, foi planejada para garantir que a navegação e usabilidade fossem intuitivas, permitindo que os usuários encontrem rapidamente o que precisam. Além disso, o projeto foi estruturado de forma escalável, possibilitando futuras expansões para incluir novos serviços, funcionalidades e regiões.

Com o **Caruaru Saúde**, esperamos não apenas simplificar o acesso aos serviços de saúde, mas também fortalecer a rede de cuidados na região, promovendo o bem-estar e qualidade de vida dos usuários. Este é um passo inicial em direção a uma plataforma robusta que continue a evoluir, sempre atendendo às necessidades da comunidade.

    
