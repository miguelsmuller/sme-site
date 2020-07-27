# **SME-SITE**
> Site da Secretaria Municipal de Educação do Município de Rio Claro -  Site da Secretaria Municipal de Educação do Município de Rio Claro - Site da Secretaria Municipal de Educação do Município de Rio Claro - Site da Secretaria Municipal de Educação do Município de Rio Claro - Site da Secretaria Municipal de Educação do Município de Rio Claro - Site da Secretaria Municipal de Educação do Município de Rio Claro - Site da Secretaria Municipal de Educação do Município de Rio Claro - Site da Secretaria Municipal de Educação do Município de Rio Claro

**Versão Estável:** 1.2.1  
**Licensa:** Proprietário - Usu Privado  
Todos os direitos reservados.  
É estritamente proibida a cópia não autorizada de qualquer arquivo deste projeto, por qualquer meio.  

## **Angular Framework**
 [**`Angular`**](https://angular.io/) é uma plataforma e framework para construção da interface de aplicações usando HTML, CSS e, principalmente, JavaScript, criada pelos desenvolvedores da Google.  
Ele possui alguns elementos básicos que tornam essa construção interessante.  
Dentre os principais, podemos destacar os componentes, templates, diretivas, roteamento, módulos, serviços, injeção de dependências e ferramentas de infraestrutura que automatizam tarefas, como a de executar os testes unitários de uma aplicação.  

- **Angular** - *Version: 9.0*

## **Usando o projeto localmente**
- **Rodando localmente**  
```shell
ionic serve --lab --external
```  
- A flag `--lab` permite a vizualização multiplataforma no navegador
- A flag `--external` é para que a aplicação esteja disponivel para acesso dentro da rede internal



## **Git Workflow**  
Esse fluxo de trabalho usa duas branchs principais para registrar o histórico do projeto. O branch **`master`** armazena o histórico oficial de releases, e o branch **`develop`** serve como um ramo de integração de recursos.

O branch **`master`** é o branch que roda no ambiente de produção. Todos os commits no branch **`master`** devem possuir um número de versão.

Cada novo recurso deve residir em sua própria branch e devem partir do branch **`develop`**. Quando um recurso é concluído, ele é mesclado novamente no **`develop`**. Os recursos nunca devem  interagir diretamente com o mestre.

O branch **`develop`** é o branch que roda no ambiente de teste. Ele armazena as últimas funcionalidades incluídas no projetos e que ainda não estão aptas a entrarem no branch **`master`**.



## **Enviado atualizações**
1. [Clone o repositório!](https://help.github.com/articles/fork-a-repo/)
2. [Sincronize](https://help.github.com/articles/syncing-a-fork/) seu fork com a última versão
3. Crie uma branch para sua funcionalidade: `git checkout -b feature-123`
4. Commit suas alterações: `git commit -m 'Commit message'`
5. Envie as alterações pra sua branch: `git push origin feature-123`
6. [Envie sua pull request](https://help.github.com/articles/using-pull-requests/)


## **Precauções de contribuição**  
Antes de enviar sua colaboração verifique seu código e as conveções adotadas no projeto e tome as seguintes providências:  

- **Sempre verifique a branch que está sendo usada**  
```shell
git status
```

- **Faça uma atualização prévia do seu chechout**  
```shell
git pull
```

- **Veja as diferenças antes de commitar**  
```shell
git diff --cached
```

- **Não commite antes de rodar o projeto localmente**
- **Veja as mudanças implementadas sendo executadas**  
- **E principalmente tenha certeza que essas alterações funcionam**  
- **[Comandos úteis do git](https://gist.github.com/leocomelli/2545add34e4fec21ec16)**

## **Changelog**  
= **1.2.1 - 27/07/2020** =  
Nova Feature com números/estatísticas
Atualização do Rodapé
Mudança posição da metatags

= **1.2.0 - 01/07/2020** =  
Melhoria de SEO e desempenho
Inserção do Google Analytics
Correão de Bugs  

= **1.1.0 - 15/06/2020** =  
Remoção de depências
Correção do formulário de contato 
Correção da istagem de notícias  

= **1.0.0 - 14/06/2020** =  
Projeto Inicial  
